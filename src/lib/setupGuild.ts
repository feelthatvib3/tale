import { PrismaClient } from '@prisma/client';

export default async function setupGuild(
	guildId: string,
	eventmakers: string[],
): Promise<void> {
	const prisma = new PrismaClient();

	try {
		await prisma.guild.create({ data: { guildId, eventmakers } });
	} catch (error) {
		console.error(error);
	} finally {
		await prisma.$disconnect();
	}
}
