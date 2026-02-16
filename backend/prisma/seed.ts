import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

interface LootData {
  name: string;
  url: string;
}

async function seedBoss(name: string, loots: LootData[]) {
  const boss = await prisma.boss.upsert({
    where: { id: undefined as any },
    update: {},
    create: { name },
  });

  // Use findFirst since we don't have unique on name
  const existing = await prisma.boss.findFirst({ where: { name } });
  const bossRecord = existing ?? boss;

  for (const loot of loots) {
    await prisma.loot.upsert({
      where: {
        name_bossId: {
          name: loot.name,
          bossId: bossRecord.id,
        },
      },
      update: { url: loot.url },
      create: {
        name: loot.name,
        url: loot.url,
        bossId: bossRecord.id,
      },
    });
  }

  console.log(`✅ ${loots.length} loots créés pour ${bossRecord.name}`);
}

async function main() {
  console.log('🌱 Début du seed...');

  // ==============================
  // 1. Lord Marrowgar (Gargamoelle)
  // ==============================
  const marrowgar = await prisma.boss.upsert({
    where: { id: 1 },
    update: {},
    create: { name: 'Lord Marrowgar (Gargamoelle)' },
  });

  const marrowgarLoots: LootData[] = [
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

  for (const loot of marrowgarLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: marrowgar.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: marrowgar.id },
    });
  }
  console.log(`✅ ${marrowgarLoots.length} loots créés pour ${marrowgar.name}`);

  // ==============================
  // 2. Lady Deathwhisper (Dame Murmemort)
  // ==============================
  const deathwhisper = await prisma.boss.upsert({
    where: { id: 2 },
    update: {},
    create: { name: 'Lady Deathwhisper (Dame Murmemort)' },
  });

  const deathwhisperLoots: LootData[] = [
    { name: "Pectoral en onyx ahn'kahar", url: 'https://www.wowhead.com/wotlk/fr/item=50647' },
    { name: 'Bague de mastodonte', url: 'https://www.wowhead.com/wotlk/fr/item=50642' },
    { name: 'Anneau de murmures exaspérants', url: 'https://www.wowhead.com/wotlk/fr/item=50644' },
    { name: "Epaulières d'euthanasie", url: 'https://www.wowhead.com/wotlk/fr/item=50643' },
    { name: 'Brassards fragiles de la dame', url: 'https://www.wowhead.com/wotlk/fr/item=50651' },
    { name: 'Spallières de sectateur imprégnées de sang', url: 'https://www.wowhead.com/wotlk/fr/item=50646' },
    { name: 'Grande tenue de Murmemort', url: 'https://www.wowhead.com/wotlk/fr/item=50649' },
    { name: 'Jambières des aurores boréales', url: 'https://www.wowhead.com/wotlk/fr/item=50645' },
    { name: 'Grèves nécrophotiques', url: 'https://www.wowhead.com/wotlk/fr/item=50652' },
    { name: 'Croquenots imprégnés de sang en saronite', url: 'https://www.wowhead.com/wotlk/fr/item=50639' },
    { name: 'Casque de crâne de bélier brisé', url: 'https://www.wowhead.com/wotlk/fr/item=50640' },
    { name: 'Garde-mains de seigneur déchu', url: 'https://www.wowhead.com/wotlk/fr/item=50650' },
    { name: 'Percecœur', url: 'https://www.wowhead.com/wotlk/fr/item=50641' },
    { name: 'Arc long à répétition de Zod', url: 'https://www.wowhead.com/wotlk/fr/item=50638' },
    { name: 'Nibelung', url: 'https://www.wowhead.com/wotlk/fr/item=50648' },
  ];

  for (const loot of deathwhisperLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: deathwhisper.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: deathwhisper.id },
    });
  }
  console.log(`✅ ${deathwhisperLoots.length} loots créés pour ${deathwhisper.name}`);

  // ==============================
  // 3. Gunship Battle (Canonnière)
  // ==============================
  const gunship = await prisma.boss.upsert({
    where: { id: 3 },
    update: {},
    create: { name: 'Gunship Battle (Canonnière)' },
  });

  const gunshipLoots: LootData[] = [
    { name: "Amulette de l'oraison silencieuse", url: 'https://www.wowhead.com/wotlk/fr/item=50658' },
    { name: "Anneau d'ascension rapide", url: 'https://www.wowhead.com/wotlk/fr/item=50664' },
    { name: 'Cercle de seigneur squelette', url: 'https://www.wowhead.com/wotlk/fr/item=50657' },
    { name: 'Cape de tueur du caveau des Ombres', url: 'https://www.wowhead.com/wotlk/fr/item=50653' },
    { name: "Couronne de cérémonie de Corp'rethar", url: 'https://www.wowhead.com/wotlk/fr/item=50661' },
    { name: 'Mitaines de capitaine de la canonnière', url: 'https://www.wowhead.com/wotlk/fr/item=50663' },
    { name: 'Bottes de croissance anormale', url: 'https://www.wowhead.com/wotlk/fr/item=50665' },
    { name: "Sac de merveilles d'Ikfirus", url: 'https://www.wowhead.com/wotlk/fr/item=50656' },
    { name: 'Protège-bras de chasseur du Fléau', url: 'https://www.wowhead.com/wotlk/fr/item=50655' },
    { name: "Espauliers de commandant de la garde d'os", url: 'https://www.wowhead.com/wotlk/fr/item=50660' },
    { name: "Brassards en griffe d'ours polaire", url: 'https://www.wowhead.com/wotlk/fr/item=50659' },
    { name: 'Baudrier de la fureur vertueuse', url: 'https://www.wowhead.com/wotlk/fr/item=50667' },
    { name: "Boulier d'Althor", url: 'https://www.wowhead.com/wotlk/fr/item=50366' },
    { name: 'Pièce du passeur', url: 'https://www.wowhead.com/wotlk/fr/item=50349' },
    { name: 'Hache de guerre fléauvenante', url: 'https://www.wowhead.com/wotlk/fr/item=50654' },
  ];

  for (const loot of gunshipLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: gunship.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: gunship.id },
    });
  }
  console.log(`✅ ${gunshipLoots.length} loots créés pour ${gunship.name}`);

  // ==============================
  // 4. Deathbringer Saurfang (Porte-mort Saurcroc)
  // ==============================
  const saurfang = await prisma.boss.upsert({
    where: { id: 4 },
    update: {},
    create: { name: 'Deathbringer Saurfang (Porte-mort Saurcroc)' },
  });

  const saurfangLoots: LootData[] = [
    { name: 'Grande cape du champion retourné', url: 'https://www.wowhead.com/wotlk/fr/item=50668' },
    { name: 'Garde-poignets maximisés de Toskk', url: 'https://www.wowhead.com/wotlk/fr/item=50670' },
    { name: 'Ceinture de la nova de sang', url: 'https://www.wowhead.com/wotlk/fr/item=50671' },
    { name: 'Volonté de porte-mort', url: 'https://www.wowhead.com/wotlk/fr/item=50363' },
    { name: 'Lame de la Vénéneuse', url: 'https://www.wowhead.com/wotlk/fr/item=50672' },
  ];

  for (const loot of saurfangLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: saurfang.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: saurfang.id },
    });
  }
  console.log(`✅ ${saurfangLoots.length} loots créés pour ${saurfang.name}`);

  // ==============================
  // 5. Festergut (Pulentraille)
  // ==============================
  const festergut = await prisma.boss.upsert({
    where: { id: 5 },
    update: {},
    create: { name: 'Festergut (Pulentraille)' },
  });

  const festergutLoots: LootData[] = [
    { name: 'Grâce du jour saint', url: 'https://www.wowhead.com/wotlk/fr/item=50700' },
    { name: 'Puissance de chancre', url: 'https://www.wowhead.com/wotlk/fr/item=50693' },
    { name: 'Maladie persistante', url: 'https://www.wowhead.com/wotlk/fr/item=50702' },
    { name: 'Bottes de scientifique de la peste', url: 'https://www.wowhead.com/wotlk/fr/item=50699' },
    { name: 'Pantalon taché de porte-peste', url: 'https://www.wowhead.com/wotlk/fr/item=50694' },
    { name: 'Jambières gangrenées', url: 'https://www.wowhead.com/wotlk/fr/item=50697' },
    { name: 'Cuir de morceaux de Fléau cousus', url: 'https://www.wowhead.com/wotlk/fr/item=50696' },
    { name: 'Carapace des rois oubliés', url: 'https://www.wowhead.com/wotlk/fr/item=50689' },
    { name: 'Epaulettes de chair horrifiantes', url: 'https://www.wowhead.com/wotlk/fr/item=50698' },
    { name: "Corde de traqueur nerub'ar", url: 'https://www.wowhead.com/wotlk/fr/item=50688' },
    { name: 'Gants chirurgicaux sales', url: 'https://www.wowhead.com/wotlk/fr/item=50703' },
    { name: 'Ceinture des os brisés', url: 'https://www.wowhead.com/wotlk/fr/item=50691' },
    { name: "Mézail de l'oublié", url: 'https://www.wowhead.com/wotlk/fr/item=50701' },
    { name: 'Gantelets tranche-chair', url: 'https://www.wowhead.com/wotlk/fr/item=50690' },
    { name: 'Meurtrissure noire', url: 'https://www.wowhead.com/wotlk/fr/item=50692' },
    { name: 'Terre lointaine', url: 'https://www.wowhead.com/wotlk/fr/item=50695' },
  ];

  for (const loot of festergutLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: festergut.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: festergut.id },
    });
  }
  console.log(`✅ ${festergutLoots.length} loots créés pour ${festergut.name}`);

  // ==============================
  // 6. Rotface (Trognepus)
  // ==============================
  const rotface = await prisma.boss.upsert({
    where: { id: 6 },
    update: {},
    create: { name: 'Rotface (Trognepus)' },
  });

  const rotfaceLoots: LootData[] = [
    { name: 'Médaillon incrusté de bile', url: 'https://www.wowhead.com/wotlk/fr/item=50682' },
    { name: 'Sceau des bouches nombreuses', url: 'https://www.wowhead.com/wotlk/fr/item=50678' },
    { name: 'Linceul', url: 'https://www.wowhead.com/wotlk/fr/item=50677' },
    { name: 'Manches de nécrochirurgien', url: 'https://www.wowhead.com/wotlk/fr/item=50686' },
    { name: "Gants du secret d'Aldriana", url: 'https://www.wowhead.com/wotlk/fr/item=50675' },
    { name: 'Heaume de la lune ancienne', url: 'https://www.wowhead.com/wotlk/fr/item=50679' },
    { name: 'Brassards scinde-sang', url: 'https://www.wowhead.com/wotlk/fr/item=50687' },
    { name: 'Espauliers à double lame', url: 'https://www.wowhead.com/wotlk/fr/item=50673' },
    { name: 'Harnois de guerre de chancre-né', url: 'https://www.wowhead.com/wotlk/fr/item=50681' },
    { name: 'Plaques d\'épaule de béhémoth déchaîné', url: 'https://www.wowhead.com/wotlk/fr/item=50674' },
    { name: 'Cuirasse résistante à la pourriture', url: 'https://www.wowhead.com/wotlk/fr/item=50680' },
    { name: 'Objet étranger déplacé', url: 'https://www.wowhead.com/wotlk/fr/item=50348' },
    { name: 'Trauma', url: 'https://www.wowhead.com/wotlk/fr/item=50685' },
    { name: 'Ecarte-côtes', url: 'https://www.wowhead.com/wotlk/fr/item=50676' },
    { name: 'Pointe empale-cadavre', url: 'https://www.wowhead.com/wotlk/fr/item=50684' },
  ];

  for (const loot of rotfaceLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: rotface.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: rotface.id },
    });
  }
  console.log(`✅ ${rotfaceLoots.length} loots créés pour ${rotface.name}`);

  // ==============================
  // 7. Professor Putricide (Professeur Putricide)
  // ==============================
  const putricide = await prisma.boss.upsert({
    where: { id: 7 },
    update: {},
    create: { name: 'Professor Putricide (Professeur Putricide)' },
  });

  const putricideLoots: LootData[] = [
    { name: "Cordelière suturée d'Astrylian", url: 'https://www.wowhead.com/wotlk/fr/item=50707' },
    { name: 'Blouse ensanglantée de professeur', url: 'https://www.wowhead.com/wotlk/fr/item=50705' },
    { name: 'Petite abomination en bouteille', url: 'https://www.wowhead.com/wotlk/fr/item=50706' },
    { name: 'Rigormortis', url: 'https://www.wowhead.com/wotlk/fr/item=50704' },
    { name: 'Le dernier mot', url: 'https://www.wowhead.com/wotlk/fr/item=50708' },
  ];

  for (const loot of putricideLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: putricide.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: putricide.id },
    });
  }
  console.log(`✅ ${putricideLoots.length} loots créés pour ${putricide.name}`);

  // ==============================
  // 8. Blood Prince Council (Conseil des princes de sang)
  // ==============================
  const princes = await prisma.boss.upsert({
    where: { id: 8 },
    update: {},
    create: { name: 'Blood Prince Council (Conseil des princes de sang)' },
  });

  const princesLoots: LootData[] = [
    { name: 'Bague de guérison incarnadine', url: 'https://www.wowhead.com/wotlk/fr/item=50720' },
    { name: 'Cape royale cramoisie', url: 'https://www.wowhead.com/wotlk/fr/item=50718' },
    { name: 'Autre chevalière de Valanar', url: 'https://www.wowhead.com/wotlk/fr/item=50714' },
    { name: 'Robe en soie sanguine', url: 'https://www.wowhead.com/wotlk/fr/item=50717' },
    { name: "Gants de ritualiste san'layn", url: 'https://www.wowhead.com/wotlk/fr/item=50722' },
    { name: 'Sac de punition de seigneur geist', url: 'https://www.wowhead.com/wotlk/fr/item=50713' },
    { name: "Epaulières d'épines à pointes givrées", url: 'https://www.wowhead.com/wotlk/fr/item=50715' },
    { name: 'Cotte de mailles de pièces cramoisies', url: 'https://www.wowhead.com/wotlk/fr/item=50723' },
    { name: 'Bottines de la terre déserte', url: 'https://www.wowhead.com/wotlk/fr/item=50711' },
    { name: 'Brassards de gardien des cryptes', url: 'https://www.wowhead.com/wotlk/fr/item=50721' },
    { name: "Grand heaume cornu d'Âmeterre", url: 'https://www.wowhead.com/wotlk/fr/item=50712' },
    { name: 'Poings de Taldaram en plaques', url: 'https://www.wowhead.com/wotlk/fr/item=50716' },
    { name: 'Tombeuse de Keleseth', url: 'https://www.wowhead.com/wotlk/fr/item=50710' },
    { name: 'Fuseau à soie des ténèbres', url: 'https://www.wowhead.com/wotlk/fr/item=50719' },
    { name: 'Creuse-crypte', url: 'https://www.wowhead.com/wotlk/fr/item=50603' },
  ];

  for (const loot of princesLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: princes.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: princes.id },
    });
  }
  console.log(`✅ ${princesLoots.length} loots créés pour ${princes.name}`);

  // ==============================
  // 9. Blood-Queen Lana'thel (Reine de sang Lana'thel)
  // ==============================
  const lanathel = await prisma.boss.upsert({
    where: { id: 9 },
    update: {},
    create: { name: "Blood-Queen Lana'thel (Reine de sang Lana'thel)" },
  });

  const lanathelLoots: LootData[] = [
    { name: 'Sautoir cramoisi de la reine de sang', url: 'https://www.wowhead.com/wotlk/fr/item=50724' },
    { name: "Chaîne de flagellation de Lana'thel", url: 'https://www.wowhead.com/wotlk/fr/item=50728' },
    { name: 'Mur glaciaire de la Couronne de glace', url: 'https://www.wowhead.com/wotlk/fr/item=50729' },
    { name: 'Verroterie du sang véritable', url: 'https://www.wowhead.com/wotlk/fr/item=50726' },
    { name: 'Cascade-de-sang', url: 'https://www.wowhead.com/wotlk/fr/item=50727' },
    { name: 'Déclin du jour', url: 'https://www.wowhead.com/wotlk/fr/item=50725' },
  ];

  for (const loot of lanathelLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: lanathel.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: lanathel.id },
    });
  }
  console.log(`✅ ${lanathelLoots.length} loots créés pour ${lanathel.name}`);

  // ==============================
  // 10. Valithria Dreamwalker (Valithria Marcherêve)
  // ==============================
  const valithria = await prisma.boss.upsert({
    where: { id: 10 },
    update: {},
    create: { name: 'Valithria Dreamwalker (Valithria Marcherêve)' },
  });

  const valithriaLoots: LootData[] = [
    { name: 'Anneau éternellement froid de Devium', url: 'https://www.wowhead.com/wotlk/fr/item=50622' },
    { name: 'Cape de lieur-de-givre déchiquetée', url: 'https://www.wowhead.com/wotlk/fr/item=50628' },
    { name: 'Anneau en saphir couvegivre', url: 'https://www.wowhead.com/wotlk/fr/item=50618' },
    { name: 'Collet de malachite', url: 'https://www.wowhead.com/wotlk/fr/item=50627' },
    { name: 'Robe du cauchemar éveillé', url: 'https://www.wowhead.com/wotlk/fr/item=50629' },
    { name: 'Brassards des rêves éternels', url: 'https://www.wowhead.com/wotlk/fr/item=50630' },
    { name: "Gants de traqueur anub'ar", url: 'https://www.wowhead.com/wotlk/fr/item=50619' },
    { name: 'Heaume de la tempête de neige', url: 'https://www.wowhead.com/wotlk/fr/item=50626' },
    { name: 'Bottes de la marche funéraire', url: 'https://www.wowhead.com/wotlk/fr/item=50632' },
    { name: "Chaînons d'âmefroide", url: 'https://www.wowhead.com/wotlk/fr/item=50620' },
    { name: 'Grandes bottes du crâne ricaneur', url: 'https://www.wowhead.com/wotlk/fr/item=50625' },
    { name: 'Jambières de bougies mourantes', url: 'https://www.wowhead.com/wotlk/fr/item=50623' },
    { name: 'Cuissards de saccageur du Fléau', url: 'https://www.wowhead.com/wotlk/fr/item=50624' },
    { name: 'Perce-poumon', url: 'https://www.wowhead.com/wotlk/fr/item=50621' },
    { name: 'Fin du cauchemar', url: 'https://www.wowhead.com/wotlk/fr/item=50631' },
  ];

  for (const loot of valithriaLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: valithria.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: valithria.id },
    });
  }
  console.log(`✅ ${valithriaLoots.length} loots créés pour ${valithria.name}`);

  // ==============================
  // 11. Sindragosa
  // ==============================
  const sindragosa = await prisma.boss.upsert({
    where: { id: 11 },
    update: {},
    create: { name: 'Sindragosa' },
  });

  const sindragosaLoots: LootData[] = [
    { name: 'Mémoire de Malygos', url: 'https://www.wowhead.com/wotlk/fr/item=50636' },
    { name: 'Griffe cruelle de Sindragosa', url: 'https://www.wowhead.com/wotlk/fr/item=50633' },
    { name: 'Phylactère de la liche sans nom', url: 'https://www.wowhead.com/wotlk/fr/item=50365' },
    { name: 'Croc parfait de Sindragosa', url: 'https://www.wowhead.com/wotlk/fr/item=50364' },
    { name: 'Cadran solaire de pénombre éternelle', url: 'https://www.wowhead.com/wotlk/fr/item=50635' },
  ];

  for (const loot of sindragosaLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: sindragosa.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: sindragosa.id },
    });
  }
  console.log(`✅ ${sindragosaLoots.length} loots créés pour ${sindragosa.name}`);

  // ==============================
  // 12. The Lich King (Le Roi-Liche)
  // ==============================
  const lichKing = await prisma.boss.upsert({
    where: { id: 12 },
    update: {},
    create: { name: 'The Lich King (Le Roi-Liche)' },
  });

  const lichKingLoots: LootData[] = [
    { name: "Coup-de-sang, la lame d'agonie de Kel'Thuzad", url: 'https://www.wowhead.com/wotlk/fr/item=50732' },
    { name: 'Sceptre royal de Terenas II', url: 'https://www.wowhead.com/wotlk/fr/item=50734' },
    { name: 'Appel-au-carnage, lame des rois de Lordaeron', url: 'https://www.wowhead.com/wotlk/fr/item=50737' },
    { name: 'Chute-des-cieux, kriss des mille mensonges', url: 'https://www.wowhead.com/wotlk/fr/item=50736' },
    { name: 'Mithrios, héritage de Barbe-de-bronze', url: 'https://www.wowhead.com/wotlk/fr/item=50738' },
    { name: "Fal'inrush, défenseur de Quel'thalas", url: 'https://www.wowhead.com/wotlk/fr/item=50733' },
    { name: "Archus, grand bâton d'Antonidas", url: 'https://www.wowhead.com/wotlk/fr/item=50731' },
    { name: "Glorenzelg, haute-lame de la Main d'argent", url: 'https://www.wowhead.com/wotlk/fr/item=50730' },
    { name: 'Ordalie, devoir du général des Forestiers', url: 'https://www.wowhead.com/wotlk/fr/item=50735' },
  ];

  for (const loot of lichKingLoots) {
    await prisma.loot.upsert({
      where: { name_bossId: { name: loot.name, bossId: lichKing.id } },
      update: { url: loot.url },
      create: { name: loot.name, url: loot.url, bossId: lichKing.id },
    });
  }
  console.log(`✅ ${lichKingLoots.length} loots créés pour ${lichKing.name}`);

  console.log('🌱 Seed terminé ! 12 boss avec tous leurs loots.');
}

main()
  .catch((e) => {
    console.error('❌ Erreur seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });