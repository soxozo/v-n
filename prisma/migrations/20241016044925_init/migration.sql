/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Product` table. All the data in the column will be lost.
  - Added the required column `item` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "Id",
DROP COLUMN "email",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "item" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
