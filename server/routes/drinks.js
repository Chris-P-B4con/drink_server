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
  const drinks = await prisma.drinks.findMany({
    where: {
      drink_name: drink.drink_name,
      volume: drink.volume,
    },
    select: {
      drink_name: true,
    },
  });
  if (drinks != []) {
    const created = prisma.drinks
      .create({
        data: drink,
      })
      .then((data) => {
        res.status(200).json({
          success: "Drink added to database.",
          error: "",
        });
      });
  } else
    res.status(400).json({
      success: "",
      error: "Drink already in database.",
    });
});

module.exports = router;
