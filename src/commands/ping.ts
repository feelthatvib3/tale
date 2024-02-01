import type { SlashCommandProps, CommandOptions } from 'commandkit';
import type { InteractionResponse } from 'discord.js';
import { SlashCommandBuilder, inlineCode } from 'discord.js';
import getRandomEmoji from '@utils/getRandomEmoji';

export const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Check my pulse for a second time');

export function run({ interaction, client, handler }: SlashCommandProps) {
	const startTime = Date.now();

	interaction
		.reply({ content: inlineCode(getRandomEmoji()), ephemeral: true })
		.then((interactionResponse: InteractionResponse) => {
			const endTime = Date.now();
			const latency = endTime - startTime;
			interactionResponse.edit(`Hello, friend. Latency is ${latency}ms.`);
		});
}

export const options: CommandOptions = {
	devOnly: false,
	userPermissions: [],
	botPermissions: [],
	deleted: false,
};
