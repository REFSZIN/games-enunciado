import { prisma } from "@/config";

export async function createGame(id: number, title: string, consoleId: number) {
  return await prisma.game.create({
    data: {
      id,
      title,
      consoleId
    }
  });
}
