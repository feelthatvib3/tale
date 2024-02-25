import { PrismaClient } from '@prisma/client';

export default async function deleteGuild(guildId: string): Promise<void> {
	const prisma = new PrismaClient();

	try {
		await prisma.guild.delete({ where: { guildId } });
	} catch (error) {
		console.error(error);
	} finally {
		await prisma.$disconnect();
	}
}
