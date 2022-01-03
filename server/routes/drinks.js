const router = require("express").Router();

const fileFunctions = require("../lib/files");
const isAuth = require("../middleware/is-auth");
const isAdmin = require("../middleware/is-admin");
const drinks = require("../controller/drinks");
const files = require("../lib/files");

router.get("/get", isAuth, drinks.getDrinks);

router.post(
  "/add",
  isAuth,
  isAdmin,
  files.upload.single("file"),
  drinks.addDrink
);

router.post("/book", isAuth, drinks.bookDrink);

router.post("/delete/:drinkId", isAdmin, isAuth, drinks.deleteDrink);

router.post(
  "/update",
  isAuth,
  isAdmin,
  files.upload.single("file"),
  drinks.updateDrink
);

router.post("/deleteBooking/:id", isAuth, drinks.deleteBooking);

module.exports = router;
