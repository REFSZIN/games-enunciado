import { prisma } from "@/config";

export async function cleanDb() {
  await prisma.console.deleteMany({});
  await prisma.game.deleteMany({});
}


