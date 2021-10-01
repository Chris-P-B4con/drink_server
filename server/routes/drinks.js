const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");
const { response } = require("express");

const prisma = new PrismaClient();

router.get("/get", (req, res) => {
  const drinks = prisma.drinks.findMany().then((data) => res.json(data));
});

router.post("/add", async (req, res) => {
  const drink = {
    drink_name: req.body.drink_name,
    volume: Number(req.body.volume),
    available: parseInt(req.body.available, 10),
    price: Number(req.body.price),
  };

  const cur_num = await prisma.drinks.findMany({
    where: {
      drink_name: drink.drink_name,
    },
    select: {
      available: true,
    },
  });
  let available = drink.available + cur_num[0].available;
  if (cur_num.length > 0 && available > 0) {
    try {
      const update = await prisma.drinks.update({
        where: {
          drink_name: drink.drink_name,
        },
        data: {
          available,
        },
      });
      res.status(200).json({ success: "Updated database", error: "" });
    } catch (e) {
      res.json({ succes: "", error: e });
    }
  } else if (available < 0)
    res.status(400).json({
      succes: "",
      error: "Cant update due to negative available number.",
    });

  for (key in drink) {
    if (drink[key] === "" || Number.isNaN(drink[key]) || drink[key] === 0)
      res.json({ succes: "", error: "Please fill out all fields." });
  }
  prisma.drinks
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
