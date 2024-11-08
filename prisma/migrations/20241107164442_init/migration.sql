/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Profile";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Pro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TEXT,
    "location" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "imgAddress" TEXT,
    "booking" BOOLEAN NOT NULL DEFAULT false,
    "age" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'Available',
    "createAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Pro_mobile_key" ON "Pro"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Pro_email_key" ON "Pro"("email");
