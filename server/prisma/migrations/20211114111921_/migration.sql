/*
  Warnings:

  - You are about to drop the column `drink_name` on the `drinks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[drinkName]` on the table `drinks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `drinkName` to the `drinks` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "drinks_drink_name_key";

-- AlterTable
ALTER TABLE "drinks" DROP COLUMN "drink_name",
ADD COLUMN     "drinkName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "drinks_drinkName_key" ON "drinks"("drinkName");
