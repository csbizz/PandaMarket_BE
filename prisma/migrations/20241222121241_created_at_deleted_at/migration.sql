/*
  Warnings:

  - Added the required column `updatedAt` to the `ArticleImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProductTag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArticleImage" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ProductImage" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ProductTag" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
