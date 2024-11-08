-- CreateTable
CREATE TABLE "Candidate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "booking" BOOLEAN NOT NULL DEFAULT false,
    "picUrl" TEXT,
    "position" TEXT NOT NULL,
    "age" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'available'
);
