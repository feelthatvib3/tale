import type { CommandOptions, SlashCommandProps } from 'commandkit';
import type { Message } from 'discord.js';
import { EmbedBuilder, SlashCommandBuilder, bold } from 'discord.js';

import { DEFAULT_EMBED_COLOR, ERROR_EMBED_COLOR } from '@constants/colors';

export const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Check my pulse for a second time')
	.setDMPermission(false);

export async function run({
	interaction,
	client,
	handler,
}: SlashCommandProps): Promise<void> {
	try {
		await interaction.deferReply();

		const embed: EmbedBuilder = new EmbedBuilder()
			.setColor(DEFAULT_EMBED_COLOR)
			.setDescription('⌛️ Measuring latency, hold tight.');
		const message: Message = await interaction.editReply({ embeds: [embed] });

		const messageCreationTimestamp: number = message.createdTimestamp;
		const clientLatency: number = Date.now() - messageCreationTimestamp;
		const APILatency: number = client.ws.ping;

		embed.setDescription(
			`📡 Client latency is ${bold(`${clientLatency}ms`)}, API latency is ${bold(`${APILatency}ms`)}.`,
		);

		await message.edit({ embeds: [embed] });
	} catch (error) {
		console.error(error);

		const embed: EmbedBuilder = new EmbedBuilder()
			.setColor(ERROR_EMBED_COLOR)
			.setDescription('Something went wrong.');

		interaction.replied
			? await interaction.followUp({ embeds: [embed] })
			: await interaction.editReply({ embeds: [embed] });
	}
}

export const options: CommandOptions = {
	devOnly: false,
	userPermissions: [],
	botPermissions: [],
	deleted: false,
};
