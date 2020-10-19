import { Client } from 'discord.js';
import Bot from './bot/bot';

//Metodo principal
const main = () => {
    const client = new Client();
    const bot = new Bot(client);
    bot.run();
}

main();