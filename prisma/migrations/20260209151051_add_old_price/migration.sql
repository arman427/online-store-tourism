/*
  Warnings:

  - Added the required column `oldPrice` to the `Tours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tours" ADD COLUMN     "oldPrice" INTEGER NOT NULL;
