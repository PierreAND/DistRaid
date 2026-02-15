/*
  Warnings:

  - A unique constraint covering the columns `[name,bossId]` on the table `Loot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Loot_name_bossId_key" ON "Loot"("name", "bossId");
