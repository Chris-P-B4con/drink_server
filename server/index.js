const express = require("express");
const session = require("express-session");
const passport = require("passport");
const crypto = require("crypto");
const app = express();
const redis = require("redis");
const connectRedis = require("connect-redis");
const RedisStore = connectRedis(session);
const dotenv = require("dotenv");
dotenv.config();
const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});
redisClient.on("error", function (err) {
  console.log("Could not establish a connection with redis. " + err);
});
redisClient.on("connect", function (err) {
  console.log("Connected to redis successfully");
}); //Configure session middleware

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    resave: true,
    saveUninitialized: false,
    secret: process.env.secret,
    cookie: {
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 60 * 24 * 30, // session max age in miliseconds
    },
  })
);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/api/users", require("./routes/user"));
const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
