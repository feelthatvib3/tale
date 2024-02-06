import { Client, GatewayIntentBits } from 'discord.js';
import { CommandKit } from 'commandkit';
import path from 'path';
import 'dotenv/config';

const { TOKEN } = process.env;

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

new CommandKit({
	client,
	commandsPath: path.join(__dirname, 'commands'),
	eventsPath: path.join(__dirname, 'events'),
	devGuildIds: ['1202649097698287667'],
	devUserIds: ['1028751824670433364'],
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
