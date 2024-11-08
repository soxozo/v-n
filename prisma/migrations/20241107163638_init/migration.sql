/*
  Warnings:

  - You are about to drop the column `birthdate` on the `Profile` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
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
INSERT INTO "new_Profile" ("age", "booking", "createAt", "email", "firstname", "gender", "id", "imgAddress", "lastname", "location", "mobile", "position", "status") SELECT "age", "booking", "createAt", "email", "firstname", "gender", "id", "imgAddress", "lastname", "location", "mobile", "position", "status" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_mobile_key" ON "Profile"("mobile");
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
