const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/login", (req, res) => {
  const users = prisma.user
    .findMany({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
      select: {
        username: true,
      },
    })
    .then((data) => res.json(data));
});

router.post("/register", async (req, res, next) => {
  // Check if any field is empty
  if (
    req.body.username === "" ||
    req.body.email === "" ||
    req.body.password === ""
  )
    return res
      .status(400)
      .json({ success: "", error: "Please fill out fields." });
  // Check if passwords match
  else if (req.body.password !== req.body.confirm_password)
    return res.status(400).json({
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
        .status(400)
        .json({ success: "", error: "User already exists." });
    } else {
      prisma.user
        .create({
          data: {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
          },
        })
        .then((data) => {
          res.status(200).json({
            success: "User created successfully.",
            error: "",
          });
        });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
