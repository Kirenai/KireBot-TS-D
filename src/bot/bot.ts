import { Client, Message } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

import Events from '../controller/bot.controller';  

//Clase que declara los eventos
class Bot {
    private events: Events;
    constructor(private cliente: Client) {
        this.events = new Events();
    }

    //Metedo que declara los eventos
    public run(): void {
        this.cliente.on("ready", () => this.events.ready(this.cliente));

        this.cliente.on("message", (message: Message) => this.events.message(message));

        this.cliente.login(process.env.token ? process.env.token : 'error');
    }
}

export default Bot;


