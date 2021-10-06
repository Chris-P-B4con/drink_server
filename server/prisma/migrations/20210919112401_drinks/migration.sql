/*
  Warnings:

  - You are about to drop the `Drinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Drinks";

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
