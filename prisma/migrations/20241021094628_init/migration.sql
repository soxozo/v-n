/*
  Warnings:

  - You are about to drop the column `booking` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `available` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the `Roombenefit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roomdetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Roombenefit" DROP CONSTRAINT "Roombenefit_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Roomdetail" DROP CONSTRAINT "Roomdetail_roomId_fkey";

-- DropIndex
DROP INDEX "Member_email_key";

-- DropIndex
DROP INDEX "Room_roomnumber_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "booking",
DROP COLUMN "email",
ADD COLUMN     "bookingnow" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "available",
DROP COLUMN "price",
ALTER COLUMN "roomnumber" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Roombenefit";

-- DropTable
DROP TABLE "Roomdetail";
