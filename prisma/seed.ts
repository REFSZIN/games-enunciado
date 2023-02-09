import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.console.findFirst();
  let event2 = await prisma.game.findFirst();
  if (!event) {
    event = await prisma.console.create({
      data: {
        id: 1,
        name: "XBOX",
      },
    });
    event2 = await prisma.game.create({
      data: {
        id: 1,
        title: "Joguinhu",
        consoleId: 1
      },
    });
  }
  console.log({ event, event2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
