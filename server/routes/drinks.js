const router = require("express").Router();

const fileFunctions = require("../lib/files")
const isAuth = require("../middleware/is-auth");
const drinks = require("../controller/drinks");
const files = require("../lib/files")


router.get("/get", isAuth, drinks.getDrinks);

router.post("/add", isAuth, files.upload.single("file"), drinks.addDrink);

router.post("/book", isAuth, drinks.bookDrink)

module.exports = router;
