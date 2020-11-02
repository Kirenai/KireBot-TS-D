import { Client, Message } from 'discord.js';
import * as botALG from './logic/BotLogic'

//Clase que crea la lógica de los eventos.
class Events {
    //Metodos que realizan un metodo con el algoritmo
    public ready(client: Client): void {
        botALG.readyALG(client);
    }

    public message(message: Message): void {
        botALG.messageALG(message);
    }
}

export default Events;
