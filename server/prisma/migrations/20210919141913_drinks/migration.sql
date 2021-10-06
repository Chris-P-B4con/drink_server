-- CreateTable
CREATE TABLE "drinks" (
    "id" SERIAL NOT NULL,
    "drink_name" TEXT NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "drinks.drink_name_unique" ON "drinks"("drink_name");
