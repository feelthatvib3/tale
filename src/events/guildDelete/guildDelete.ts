import type { CommandKit } from 'commandkit';
import type { Client, Guild } from 'discord.js';

import deleteGuild from '@lib/deleteGuild';

export default async function (
	guild: Guild,
	client: Client<true>,
	handler: CommandKit,
): Promise<void> {
	try {
		const guildId = guild.id;
		await deleteGuild(guildId);
	} catch (error) {
		console.error(error);
	}
}
