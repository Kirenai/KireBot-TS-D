import { Client, Message } from "discord.js";
import * as bridgeBotLogic from './BotBridge'

const PREFIX = "$";
const commands = ['$love @user @user', '$cuadrado <number>',
    '$k <number>', '$c <number>', '$f <number>', '$r <number>'];

const COLORS = [
    0xe73efa, 0xa032a8, 0xbd1a94, 0xbd1a45,
    0x2759b8, 0x27b83f, 0xe61919, 0xe66119,
    0xe6b319, 0x9be619, 0x25c225, 0x25c276,
    0x25c2ba, 0x257bc2, 0x253dc2, 0x2310b0,
    0x5510b0, 0x9d10b0,
];

export const readyALG = (client: Client): void => {
    console.log(`Logged in as ${client.user?.tag}`);
    client.user?.setStatus('online');
    client.user?.setActivity('Ver todos los comandos con: $com');
}

export const messageALG = (message: Message): void => {
    if (message.author.bot) return;
    if (message.content.startsWith("$")) {
        let commandBody: string = message.content.slice(PREFIX.length);
        if (!commandBody) return;
        let args: string[] = commandBody.split(' ').filter((value) => value !== '');
        let command: string | undefined = args.shift()?.toLowerCase();
        let random: number = Math.floor(Math.random() * 100);
        let colorNumberRandom: number = Math.floor(Math.random() * COLORS.length);

        //Comando para mostrar los comandos existentes. agregar commandos en la linea 4
        if (command?.includes('com')) {
            bridgeBotLogic.com(args, message, commands, COLORS, colorNumberRandom);

        }

        //Comando para emparejzar con una persona o emparejar a dos personas, falta validar algunas cosas.
        else if (command?.includes("love")) {
            bridgeBotLogic.love(args, message, random, COLORS, colorNumberRandom);
        }

        //Comando para generar un cuadrado de puro *
        else if (command?.includes('cuadrado')) {
            bridgeBotLogic.cuadrado(args, message);
        }

        //Comando para calcular temperaturas
        else if (command?.includes('k')) {
            bridgeBotLogic.kelvin(args, message, COLORS, colorNumberRandom);
        }
        else if (command?.includes('c')) {
            bridgeBotLogic.celsius(args, message, COLORS, colorNumberRandom);
        }
        else if (command?.includes('f')) {
            bridgeBotLogic.fahrenheit(args, message, COLORS, colorNumberRandom);
        }
    } else {
        return;
    }
}