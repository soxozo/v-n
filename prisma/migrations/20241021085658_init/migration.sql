/*
  Warnings:

  - You are about to drop the column `Level` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Information` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Information" DROP CONSTRAINT "Information_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_bookingBy_fkey";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "Level",
DROP COLUMN "password";

-- DropTable
DROP TABLE "Education";

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "Information";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "roomnumber" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "booking" BOOLEAN NOT NULL DEFAULT false,
    "memberId" INTEGER,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roomdetail" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,
    "breakfast_include" BOOLEAN NOT NULL DEFAULT false,
    "dinner_include" BOOLEAN NOT NULL DEFAULT false,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "Roomdetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roombenefit" (
    "id" SERIAL NOT NULL,
    "wifi" BOOLEAN NOT NULL DEFAULT true,
    "parking" BOOLEAN NOT NULL DEFAULT true,
    "additionaluser" BOOLEAN NOT NULL DEFAULT true,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "Roombenefit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomnumber_key" ON "Room"("roomnumber");

-- CreateIndex
CREATE UNIQUE INDEX "Roomdetail_roomId_key" ON "Roomdetail"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "Roombenefit_roomId_key" ON "Roombenefit"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_name_key" ON "Member"("name");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Roomdetail" ADD CONSTRAINT "Roomdetail_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Roombenefit" ADD CONSTRAINT "Roombenefit_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
