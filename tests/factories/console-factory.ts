import { prisma } from "@/config";

export async function createConsole(userId: number, roomId: number) {
  return await prisma.console.create({
    data: {
      userId,
      roomId,
    }
  });
}
