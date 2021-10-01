const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/get", (req, res) => {
  const drinks = prisma.drinks.findMany().then((data) => res.json(data));
});

router.post("/add", async (req, res) => {
  const drinks = await prisma.drinks.findMany({
    where: {
      drink_name: req.body.drink_name,
      volume: req.body.volume,
    },
    select: {
      drink_name: true,
    },
  });

  if (!drinks) {
    const created = prisma.drinks
      .create({
        data: req.body,
      })
      .then();
  }
});

module.exports = router;
