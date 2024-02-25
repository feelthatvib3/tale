import type { CommandKit } from 'commandkit';
import type { Client, Collection, Guild, GuildMember } from 'discord.js';

import setupGuild from '@lib/setupGuild';

export default async function (
	guild: Guild,
	client: Client<true>,
	handler: CommandKit,
): Promise<void> {
	try {
		await guild.members.fetch();

		const guildId: string = guild.id;

		const allGuildMembers: Collection<string, GuildMember> =
			guild.members.cache;

		const adminGuildMembers: Collection<string, GuildMember> =
			allGuildMembers.filter(
				(member: GuildMember) =>
					member.permissions.has('Administrator') && !member.user.bot,
			);

		const eventmakers: string[] = adminGuildMembers.map(
			(member: GuildMember) => member.id,
		);

		await setupGuild(guildId, eventmakers);
	} catch (error) {
		console.error(error);
	}
}
