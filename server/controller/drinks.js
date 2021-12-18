const { PrismaClient, Prisma } = require("@prisma/client");
const sharp = require("sharp");
const prisma = new PrismaClient();

exports.getDrinks = (req, res, next) => {
  prisma.drinks
    .findMany()
    .then((data) => res.json(data))
    .catch((err) => res.json([]));
};

exports.addDrink = async (req, res, next) => {
  try {
    if (!req.file) {
      return res
        .status(422)
        .json({ error: "Attached file is not an image.", success: "" });
    }
    let drink = {
      drinkName: req.body.drinkName,
      volume: Number(req.body.volume),
      available: parseInt(req.body.available, 10),
      price: Number(req.body.price),
      image: req.file.path,
    };
    const newFileName =
      drink.image.slice(0, drink.image.length - 4) +
      "_small" +
      drink.image.slice(drink.image.length - 4, drink.image.length);
    sharp(drink.image)
      .resize({ height: 150, width: 150 })
      .toFile(newFileName)
      .then(function (newFileInfo) {
        drink.image = newFileName;
      })
      .catch(function (err) {
        console.log(err);
      });
    const cur_num = await prisma.drinks.findMany({
      where: {
        drinkName: drink.drinkName,
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
              drinkName: drink.drinkName,
            },
            data: {
              available,
            },
          });
          return res
            .status(200)
            .json({ success: "Updated database", error: "" });
        } catch (err) {
          return res.json({ succes: "", error: err });
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
        res.status(422).json(err);
        if (err.code === "P2002")
          res.json({
            success: "",
            error: "Drink already exists in database.",
          });
        else {
          res.status(422).json(err);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

exports.bookDrink = (req, res) => {
  const drink = req.body.drink;
  const user = req.session.user.id;
  if (!drink) {
    res.status(422).json({ error: "Invalid drink given.", success: "" });
  } else {
    prisma.drinks
      .findMany({ where: { drinkName: drink }, select: { id: true } })
      .then((foundDrink) => {
        if (foundDrink[0]) {
          prisma.userDrinks
            .create({
              data: {
                drink: {
                  connect: {
                    id: Number(foundDrink[0].id),
                  },
                },
                user: {
                  connect: {
                    id: Number(user),
                  },
                },
              },
            })
            .then((answer) => {
              prisma.drinks
                .update({
                  where: { drinkName: drink },
                  data: { available: { decrement: 1 } },
                })
                .then((response) => {
                  return res.status(200).json({ success: "Prost", error: "" });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.updateDrink = async (req, res, next) => {
  // TODO: Update drinks
};

exports.deleteDrink = async (req, res, next) => {
  const drinkId = Number(req.params.drinkId);
  // First try to find if there are unpaid drinks for this drink

  prisma.userDrinks
    .findMany({
      where: { drinkId: drinkId, paid: false },
      select: { drink: true, orderedAt: true },
    })
    .then((data) => {
      if (data[0]) {
        return res.status(422).json({
          error: "There are useres who havent paid for this drink.",
          succes: "",
        });
      } else {
        prisma.userDrinks
          .deleteMany({
            where: { drinkId: drinkId },
          })
          .then((data) => {
            prisma.drinks
              .deleteMany({
                where: { id: drinkId },
              })
              .then((data) => {   
                return res
                  .status(200)
                  .json({ success: "Successfully deleted drink.", error: "" });
              });
          });
      }
    })

    .catch((err) => {
      console.log(err);
    });
};
