-- CreateTable
CREATE TABLE "Profile" (
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
    "createAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_mobile_key" ON "Profile"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");
