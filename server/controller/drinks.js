const { PrismaClient, Prisma } = require("@prisma/client");
const fs = require("fs");
const sharp = require("sharp");
const { checkObjects } = require("../lib/helperFunctions");
const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 5;



exports.getAllDrinks = (req, res, next) => {
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

    //Validity check to see if nothing is empty
    for (key in drink) {
      if (drink[key] === "" || Number.isNaN(drink[key]) || drink[key] === 0)
        return res.json({ succes: "", error: "Please fill out all fields." });
    }

    //Resize image to 300x300 pixels and save to new variable
    const newFileName =
      drink.image.slice(0, 7) +
      "cropped_" +
      drink.image.slice(7, drink.image.length);
    sharp(drink.image)
      .resize({ height: 300, width: 300 })
      .toFile(newFileName)
      .then(function (newFileInfo) {
        fs.unlinkSync(req.file.path);
      })
      .catch(function (err) {
        console.log("Error in sharp:" + err);
      });
    drink.image = newFileName;

    //Catch if the drink already exists in database
    const cur_num = await prisma.drinks.findMany({
      where: {
        drinkName: drink.drinkName,
      },
      select: {
        available: true,
      },
    });
    if (cur_num.length > 0) {
      return res
        .status(422)
        .json({ error: "This drink already exists.", sucess: "" });
    }

    // Add to database
    prisma.drinks
      .create({
        data: drink,
      })
      .then((data) => {
        return res.status(200).json({
          success: "Drink added to database.",
          error: "",
        });
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
      .findMany({
        where: { drinkName: drink },
        select: { id: true, available: true },
      })
      .then((foundDrink) => {
        if (foundDrink[0] && foundDrink[0].available > 0) {
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
        } else {
          res
            .status(422)
            .json({ error: "This drink is not available.", success: "" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.updateDrink = async (req, res, next) => {
  // TODO: Update drinks
  try {
    let drink = {
      id: Number(req.body.id),
      drinkName: req.body.drinkName,
      volume: Number(req.body.volume),
      available: parseInt(req.body.available, 10),
      price: Number(req.body.price),
    };
    if (req.file) {
      const newFileName =
        req.file.path.slice(0, 7) +
        "cropped_" +
        req.file.path.slice(7, req.file.path.length);
      drink.image = newFileName;
      sharp(req.file.path)
        .resize({ height: 300, width: 300 })
        .toFile(newFileName)
        .then(function (newFileInfo) {
          fs.unlinkSync(req.file.path);
          //Validity check to see if nothing is empty
          for (key in drink) {
            if (drink[key] === "" || Number.isNaN(drink[key]))
              return res.json({
                succes: "",
                error: "Please fill out all fields.",
              });
          }
          prisma.drinks
            .findMany({ where: { id: drink.id }, select: { image: true } })
            .then((data) => {
              if (
                fs.existsSync(data[0].image) &&
                req.file &&
                drink.image !== data[0].image
              )
                fs.unlinkSync(data[0].image);
              prisma.drinks
                .update({
                  where: { id: drink.id },
                  data: {
                    drinkName: drink.drinkName,
                    volume: drink.volume,
                    available: drink.available,
                    price: drink.price,
                    image: drink.image,
                  },
                })
                .then((response) => {
                  return res.status(200).json({
                    success: "Successfully updated drink.",
                    error: "",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        })
        .catch(function (err) {
          console.log("Error in sharp:" + err);
        });
    } else {
      prisma.drinks
        .update({
          where: { id: drink.id },
          data: {
            drinkName: drink.drinkName,
            volume: drink.volume,
            available: drink.available,
            price: drink.price,
          },
        })
        .then((response) => {
          return res.status(200).json({
            success: "Successfully updated drink.",
            error: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (err) {
    console.log(err);
  }
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
        (async () => {
          try {
            const image = await prisma.drinks.findMany({
              where: { id: drinkId },
              select: { image: true },
            });
            fs.unlinkSync(image[0].image);
          } catch (err) {
            console.log(err);
          }
        })();
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

exports.deleteBooking = (req, res, next) => {
  const bookingId = Number(req.params.id);
  prisma.userDrinks
    .findMany({
      where: { id: bookingId },
      select: { user: true, drink: true },
    })
    .then((user) => {
      if (checkObjects(user[0].user, req.session.user)) {
        prisma.userDrinks
          .delete({ where: { id: bookingId } })
          .then((booking) => {
            prisma.drinks
              .update({
                where: { id: user[0].drink.id },
                data: { available: { increment: 1 } },
              })
              .then((update) => {
                res
                  .status(200)
                  .json({ success: "Deleted booking.", error: "" });
              });
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
