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

  // Get all drinks (paid=true) or all unpaid drinks (paid=false)
  const paid = req.params.paid;
  const drinks = paid
    ? await prisma.userDrinks.findMany({
        where: { userId: req.session.user.id },
        select: { id: true, drink: true, orderedAt: true },
      })
    : await prisma.userDrinks.findMany({
        where: { userId: req.sessions.user.id, paid: true },
        select: { drink: true, orderedAt: true },
      });

  if (!drinks) {
    return res.status(500).json({
      error: "Couldn't find any drinks under that user (did you already pay?)",
      success: "",
    });
  }
  let answer = {};
  const type = req.params.type; //total_volume,summarized, detailed
  if (type === "total_volume") {
    answer = 0;
    for (let drink of drinks) {
      answer += drink.drink.volume;
    }
    res.status(200).json(answer);
  } else if (type === "detailed") {
    for (let drink of drinks) {
      let cur_id = drink.drink.drinkName;
      // drink_map[cur_id] ? ("") : drink_map[cur_id] = drink.drink.drinkName;
      if (!answer[cur_id]) {
        answer[cur_id] = { volume: drink.drink.volume, bottles: 1 };
      } else {
        answer[cur_id].volume += drink.drink.volume;
        answer[cur_id].bottles += 1;
      }
    }
    res.json(answer);
  } else if (type === "list") {
    res.status(200).json(drinks);
  } else
    return res
      .status(422)
      .json({ error: "Wrong data configuration provided.", success: "" });
};
