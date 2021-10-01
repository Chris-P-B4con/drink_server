const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/get", (req, res) => {
  const drinks = prisma.drinks.findMany().then((data) => res.json(data));
});

router.post("/add", async (req, res) => {
  const drink = {
    drink_name: req.body.drink_name,
    volume: Number(req.body.volume),
    available: Number(req.body.available),
    price: Number(req.body.price),
  };
  for (key in drink) {
    if (drink[key] === "" || Number.isNaN(drink[key]))
      res.json({ succes: "", error: "Please fill out all fields." });
  }
  const created = prisma.drinks
    .create({
      data: drink,
    })
    .catch((err) => {
      if (err.code === "P2002")
        res.json({
          success: "",
          error: "Drink already exists in database.",
        });
    })
    .then((data) => {
      res.status(200).json({
        success: "Drink added to database.",
        error: "",
      });
    });
});

module.exports = router;
