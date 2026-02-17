-- CreateTable
CREATE TABLE "RaidPoints" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "raidId" INTEGER NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "RaidPoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishlistItem" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "lootId" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WishlistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LootHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "lootId" INTEGER NOT NULL,
    "raidId" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL,
    "pointsCost" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LootHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaidAttendance" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "raidId" INTEGER NOT NULL,
    "pointsGiven" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RaidAttendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RaidPoints_userId_key" ON "RaidPoints"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "RaidPoints_userId_raidId_key" ON "RaidPoints"("userId", "raidId");

-- CreateIndex
CREATE UNIQUE INDEX "WishlistItem_userId_lootId_key" ON "WishlistItem"("userId", "lootId");

-- AddForeignKey
ALTER TABLE "RaidPoints" ADD CONSTRAINT "RaidPoints_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidPoints" ADD CONSTRAINT "RaidPoints_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_lootId_fkey" FOREIGN KEY ("lootId") REFERENCES "Loot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LootHistory" ADD CONSTRAINT "LootHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LootHistory" ADD CONSTRAINT "LootHistory_lootId_fkey" FOREIGN KEY ("lootId") REFERENCES "Loot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LootHistory" ADD CONSTRAINT "LootHistory_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidAttendance" ADD CONSTRAINT "RaidAttendance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaidAttendance" ADD CONSTRAINT "RaidAttendance_raidId_fkey" FOREIGN KEY ("raidId") REFERENCES "Raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
