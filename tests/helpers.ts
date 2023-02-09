import { prisma } from "@/config";

export async function cleanDb() {
  await prisma.game.deleteMany({});
  await prisma.console.deleteMany({});
}


