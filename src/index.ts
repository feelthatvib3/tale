import { CommandKit } from 'commandkit';
import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
import path from 'path';

import { DEV_GUILD_IDS, DEV_USER_IDS } from '@constants/general';

const { TOKEN } = process.env;

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

new CommandKit({
	client,
	commandsPath: path.join(__dirname, 'commands'),
	eventsPath: path.join(__dirname, 'events'),
	devGuildIds: DEV_GUILD_IDS,
	devUserIds: DEV_USER_IDS,
	skipBuiltInValidations: false,
	bulkRegister: true,
});

(async function () {
	try {
		await client.login(TOKEN);
	} catch (error) {
		console.error(error);
	}
})();
