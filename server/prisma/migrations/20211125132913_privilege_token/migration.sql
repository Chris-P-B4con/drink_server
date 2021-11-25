/*
  Warnings:

  - The `privileges` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PrivilegeType" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "user" DROP COLUMN "privileges",
ADD COLUMN     "privileges" "PrivilegeType" NOT NULL DEFAULT E'USER';

-- AlterTable
ALTER TABLE "userdrinks" ALTER COLUMN "paidAt" DROP NOT NULL;
