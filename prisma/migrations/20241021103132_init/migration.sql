/*
  Warnings:

  - You are about to drop the column `bookingnow` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `roomnumber` on the `Room` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_memberId_fkey";

-- DropIndex
DROP INDEX "Member_name_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "bookingnow",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "totalBooking" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "memberId",
DROP COLUMN "roomnumber",
ADD COLUMN     "bookingBy" INTEGER,
ADD COLUMN     "roomNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_bookingBy_fkey" FOREIGN KEY ("bookingBy") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
