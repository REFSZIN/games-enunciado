import { prisma } from "@/config";

export async function createConsole(id: number, name: string ) {
  return await prisma.console.create({
    data: {
      id,
      name,
    }
  });
}
