import { prisma } from "@/config";

export async function createGame(userId: number, roomId: number) {
  return await prisma.game.create({
    data: {
      userId,
      roomId,
    }
  });
}
