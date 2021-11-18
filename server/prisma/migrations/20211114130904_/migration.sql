/*
  Warnings:

  - Made the column `paidAt` on table `userdrinks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "userdrinks" ALTER COLUMN "paidAt" SET NOT NULL;
