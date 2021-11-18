const path = require("path");
const fs = require("fs");

const express = require("express");
const session = require("express-session");
const redis = require("redis");
const connectRedis = require("connect-redis");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

// Server Setup
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const RedisStore = connectRedis(session);

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(helmet());
app.use(compression());
app.use(morgan("combined", { stream: accessLogStream }));
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

// MIDDLEWARE
app.set("trust proxy", 1);
app.use(
  cors({
    origin: true,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("images"));
app.use(
  session({
    name: "Session",
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    secret: process.env.secret,
    cookie: {
      sameSite: "none",
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 60 * 24 * 30, // session max age in miliseconds
    },
  })
);

app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
});

// ROUTES
app.use("/users", require("./routes/user"));
app.use("/drinks", require("./routes/drinks"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
