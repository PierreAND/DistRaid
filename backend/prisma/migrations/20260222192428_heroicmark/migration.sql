/*
  Warnings:

  - Added the required column `description` to the `LootHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LootHistory" DROP CONSTRAINT "LootHistory_lootId_fkey";

-- AlterTable
ALTER TABLE "LootHistory" ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "lootId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "HeroicMarkRequest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "received" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeroicMarkRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HeroicMarkRequest_userId_key" ON "HeroicMarkRequest"("userId");

-- AddForeignKey
ALTER TABLE "LootHistory" ADD CONSTRAINT "LootHistory_lootId_fkey" FOREIGN KEY ("lootId") REFERENCES "Loot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroicMarkRequest" ADD CONSTRAINT "HeroicMarkRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
