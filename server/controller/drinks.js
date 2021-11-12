const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getDrinks = (req, res, next) => {
  prisma.drinks
    .findMany()
    .then((data) => res.json(data))
    .catch((err) => res.json([]));
};

exports.addDrink = async (req, res, next) => {
  const drink = {
    drink_name: req.body.drink_name,
    volume: Number(req.body.volume),
    available: parseInt(req.body.available, 10),
    price: Number(req.body.price),
    image: req.file.path,
  };
  const cur_num = await prisma.drinks.findMany({
    where: {
      drink_name: drink.drink_name,
    },
    select: {
      available: true,
    },
  });

  if (cur_num.length > 0) {
    let available = drink.available + cur_num[0].available;
    if (available > 0) {
      try {
        const update = await prisma.drinks.update({
          where: {
            drink_name: drink.drink_name,
          },
          data: {
            available,
          },
        });
        return res.status(200).json({ success: "Updated database", error: "" });
      } catch (e) {
        return res.json({ succes: "", error: e });
      }
    } else if (available < 0)
      return res.status(400).json({
        succes: "",
        error: "Cant update due to negative available number.",
      });
  }

  for (key in drink) {
    if (drink[key] === "" || Number.isNaN(drink[key]) || drink[key] === 0)
      return res.json({ succes: "", error: "Please fill out all fields." });
  }
  prisma.drinks
    .create({
      data: drink,
    })

    .then((data) => {
      return res.status(200).json({
        success: "Drink added to database.",
        error: "",
      });
    })
    .catch((err) => {
      res.status(422).json(err)
      if (err.code === "P2002")
        res.json({
          success: "",
          error: "Drink already exists in database.",
        });
      else {
        res.status(422).json(err);
      }
    });
};
