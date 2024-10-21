/*
  Warnings:

  - You are about to drop the column `memberId` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `Experience` table. All the data in the column will be lost.
  - You are about to alter the column `salary` on the `Experience` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `bookingby` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobile]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_memberId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_memberId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_memberId_fkey";

-- DropIndex
DROP INDEX "Profile_memberId_key";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "memberId",
ADD COLUMN     "profileId" INTEGER NOT NULL,
ALTER COLUMN "degree" DROP NOT NULL,
ALTER COLUMN "university" DROP NOT NULL,
ALTER COLUMN "major" DROP NOT NULL,
ALTER COLUMN "gpa" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "duration",
DROP COLUMN "memberId",
ADD COLUMN     "profileId" INTEGER NOT NULL,
ADD COLUMN     "workend" TIMESTAMP(3),
ADD COLUMN     "workform" TIMESTAMP(3),
ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "position" DROP NOT NULL,
ALTER COLUMN "salary" DROP NOT NULL,
ALTER COLUMN "salary" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "Level" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "booking" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "bookingby",
DROP COLUMN "createdAt",
DROP COLUMN "gender",
DROP COLUMN "memberId",
DROP COLUMN "updatedAt",
ADD COLUMN     "bookingBy" INTEGER,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- CreateTable
CREATE TABLE "Information" (
    "id" SERIAL NOT NULL,
    "height" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "age" INTEGER,
    "nation" TEXT,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "Information_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Information_profileId_key" ON "Information"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Education_profileId_key" ON "Education"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_profileId_key" ON "Experience"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_mobile_key" ON "Profile"("mobile");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_bookingBy_fkey" FOREIGN KEY ("bookingBy") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Information" ADD CONSTRAINT "Information_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
