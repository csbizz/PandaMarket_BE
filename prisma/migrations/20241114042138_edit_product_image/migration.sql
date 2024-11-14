/*
  Warnings:

  - You are about to drop the column `image` on the `ProductImage` table. All the data in the column will be lost.
  - Added the required column `fileName` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalName` to the `ProductImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductImage" DROP COLUMN "image",
ADD COLUMN     "fileName" TEXT NOT NULL,
ADD COLUMN     "originalName" TEXT NOT NULL;
