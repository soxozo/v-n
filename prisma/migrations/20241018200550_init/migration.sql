/*
  Warnings:

  - You are about to drop the column `achieve` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `booking` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `client` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `send` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `success` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the `Candidate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Member_email_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "achieve",
DROP COLUMN "booking",
DROP COLUMN "client",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "level",
DROP COLUMN "mobile",
DROP COLUMN "password",
DROP COLUMN "send",
DROP COLUMN "success",
DROP COLUMN "surname",
ALTER COLUMN "name" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Candidate";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "status" TEXT DEFAULT 'Available',
    "booking" BOOLEAN NOT NULL DEFAULT false,
    "bookingby" TEXT DEFAULT 'so',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "degree" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "gpa" DOUBLE PRECISION NOT NULL,
    "year" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_memberId_key" ON "Profile"("memberId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
