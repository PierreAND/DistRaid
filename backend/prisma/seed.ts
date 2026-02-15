import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Début du seed...');


  const marrowgar = await prisma.boss.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Lord Marrowgar (Gargamoelle)',
    },
  });
 



 
 

  const loots25H = [
    { name: "Bague du colosse d'os", url: 'https://www.wowhead.com/wotlk/fr/item=50604' },
    { name: "Amulette de la sentinelle d'ossements", url: 'https://www.wowhead.com/wotlk/fr/item=50609' },
    { name: 'Jonc de labyrinthe sans fin', url: 'https://www.wowhead.com/wotlk/fr/item=50614' },
    { name: 'Oeil glacial de Gargamoelle', url: 'https://www.wowhead.com/wotlk/fr/item=50610' },
    { name: "Ceinture d'âmefroide broyeuse", url: 'https://www.wowhead.com/wotlk/fr/item=50613' },
    { name: 'Bottes en fourrure gelées', url: 'https://www.wowhead.com/wotlk/fr/item=50607' },
    { name: "Garde-mains de répit de l'hiver", url: 'https://www.wowhead.com/wotlk/fr/item=50615' },
    { name: 'Heaume de serpent des neiges en mailles', url: 'https://www.wowhead.com/wotlk/fr/item=50605' },
    { name: 'Brassards de sombre rétorsion', url: 'https://www.wowhead.com/wotlk/fr/item=50611' },
    { name: 'Cuirasse de gendarme', url: 'https://www.wowhead.com/wotlk/fr/item=50606' },
    { name: "Garde-jambes de l'espoir perdu", url: 'https://www.wowhead.com/wotlk/fr/item=50612' },
    { name: "Espauliers de pics d'os rouillés", url: 'https://www.wowhead.com/wotlk/fr/item=50617' },
    { name: "Rempart d'acier fumant", url: 'https://www.wowhead.com/wotlk/fr/item=50616' },
    { name: 'Arête en os glacée', url: 'https://www.wowhead.com/wotlk/fr/item=50608' },
    { name: "Bryntroll, le médiateur d'ossements", url: 'https://www.wowhead.com/wotlk/fr/item=50709' },
  ];

  const allLoots = [...loots25H];

  for (const loot of allLoots) {
    await prisma.loot.upsert({
      where: {
        name_bossId: {
          name: loot.name,
          bossId: marrowgar.id,
        },
      },
      update: { url: loot.url },
      create: {
        name: loot.name,
        url: loot.url,
        bossId: marrowgar.id,
      },
    });
  }

  console.log(`✅ ${allLoots.length} loots créés pour ${marrowgar.name}`);
  console.log('🌱 Seed terminé !');
}

main()
  .catch((e) => {
    console.error('❌ Erreur seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });