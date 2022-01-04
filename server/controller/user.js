const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const s = require("connect-redis");
const { response } = require("express");


exports.postLogin = (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res
      .status(422)
      .json({ success: "User already logged in. Refresh page", error: "" });
  }
  if (!req.body.email || !req.body.password) {
    return res
      .status(422)
      .json({ success: "", error: "Please fill out all fields." });
  } else {
    prisma.user
      .findMany({
        where: {
          email: req.body.email,
        },
      })
      .then((user) => {
        if (user[0]) {
          bcrypt
            .compare(req.body.password, user[0].password)
            .then((doMatch) => {
              if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user[0];
                return res.status(200).json(req.session.user.id);
              } else {
                return res.status(422).json({
                  success: "",
                  error: "Incorrect e-mail or password.",
                });
              }
            });
        } else {
          return res
            .status(422)
            .json({ success: "", error: "Incorrect e-mail or password." });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.postRegister = async (req, res, next) => {
  // Check if any field is empty

  if (
    req.body.username === "" ||
    req.body.email === "" ||
    req.body.password === ""
  )
    return res
      .status(422)
      .json({ success: "", error: "Please fill out all fields." });
  // Check if passwords match
  else if (req.body.password !== req.body.confirm_password)
    return res.status(422).json({
      success: "",
      error: "Passwords do not match",
    });

  // Check database for username and emails
  const emails = prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
    select: {
      email: true,
    },
  });
  const usernames = prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
    select: {
      username: true,
    },
  });

  // Check to see if query found match of username or email
  try {
    const data = await Promise.all([emails, usernames]);
    if (data.some((el) => el !== null)) {
      return res
        .status(422)
        .json({ success: "", error: "User already exists." });
    } else {
      bcrypt
        .hash(req.body.password, 12)
        .then((hashedPassword) => {
          prisma.user
            .create({
              data: {
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword,
              },
            })
            .then((result) => {
              res.status(200).json({
                success: "User created successfully.",
                error: "",
              });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.findOne = (req) => {
  if (req.session.user[0].id) {
    prisma.user
      .findMany({ where: { id: req.session.user[0].id } })
      .then((user) => {
        if (!user) {
          return false;
        }
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return false;
  }
};

exports.logout = (req, res, next) => {
  if (req.session.isLoggedIn) {
    req.session.isLoggedIn = false;
    req.session.invalidated = new Date().toISOString();
    req.session.save();
  }
  next();
};

exports.getUserDrinks = async (req, res, next) => {
  if (!req.session.user) {
    return res
      .status(401)
      .json({ error: "You are not properly logged in.", succes: "" });
  }

  // Get all paid drinks (paid=true) or all unpaid drinks (paid=false)
  const ITEMS_PER_PAGE = 5;
  let paid = null;
  if (req.query.paid === "false") paid = false;
  else if (req.query.paid === "true") paid = true;
  const page = Number(req.params.page);
  let drinks = null;

  try {
    let numElem = paid 
      ? await prisma.userDrinks.findMany({
          where: { userId: req.session.user.id, paid: paid },
        })
      : await prisma.userDrinks.findMany({ where: { userId: req.session.user.id } });
    numElem = numElem.length
    if (page !== null) {
      drinks = paid
        ? await prisma.userDrinks.findMany({
            skip: (page - 1) * ITEMS_PER_PAGE,
            take: ITEMS_PER_PAGE,
            where: { userId: req.session.user.id, paid: paid },
            select: { id: true, drink: true, orderedAt: true },
          })
        : await prisma.userDrinks.findMany({
            skip: (page - 1) * ITEMS_PER_PAGE,
            take: ITEMS_PER_PAGE,
            where: { userId: req.session.user.id },
            select: { id: true, drink: true, orderedAt: true },
          });
    } else {
      drinks = paid
        ? await prisma.userDrinks.findMany({
            where: { userId: req.session.user.id, paid: paid },
            select: { id: true, drink: true, orderedAt: true },
          })
        : await prisma.userDrinks.findMany({
            where: { userId: req.session.user.id },
            select: { id: true, drink: true, orderedAt: true },
          });
    }
    if (!drinks) {
      return res.status(500).json({
        error:
          "Couldn't find any drinks under that user (did you already pay?)",
        success: "",
      });
    }
    return res.status(200).json({numElem: Math.ceil(numElem / ITEMS_PER_PAGE), drinks});
  } catch (err) {
    console.log(err);
  }
};
