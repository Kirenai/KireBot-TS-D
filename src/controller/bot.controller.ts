import { Client, Message, MessageEmbed } from 'discord.js';

const PREFIX = "$";
const commands = ['$love @user @user', '$cuadrado <number>'];
const COLORS = [
    0xe73efa, 0xa032a8, 0xbd1a94, 0xbd1a45,
    0x2759b8, 0x27b83f, 0xe61919, 0xe66119,
    0xe6b319, 0x9be619, 0x25c225, 0x25c276,
    0x25c2ba, 0x257bc2, 0x253dc2, 0x2310b0,
    0x5510b0, 0x9d10b0,
];

//Clase que crea la lógica de los eventos.
class Events {
    //Metodos con la lógica de los eventos
    public ready(client: Client): void {
        this.readyContent(client);
    }

    private readyContent(client: Client) {
        console.log(`Logged in as ${client.user?.tag}`);
        client.user?.setStatus('online');
        client.user?.setActivity('Ver todos los comandos con: $com');
    }

    public message(message: Message): void {
        this.messageContent(message);
    }

    private messageContent(message: Message) {
        if (message.author.bot) return;
        if (message.content.startsWith("$")) {
            let commandBody: string = message.content.slice(PREFIX.length);
            if (!commandBody) return;
            let args: string[] = commandBody.split(' ').filter((value) => value !== '');
            let command: string | undefined = args.shift()?.toLowerCase();
            let random: number = Math.floor(Math.random() * 100);
            //Comando para mostrar los comandos existentes. agregar commandos en la linea 4
            if (command?.includes('com')) {
                let colorNumberRandom: number = Math.floor(Math.random() * COLORS.length);
                if (args.length >= 1) {
                    message.channel.send(
                        `<@${message.author.id}> sólo escriba el commando por favor.`
                    );
                } else {
                    const command: MessageEmbed = new MessageEmbed()
                        .addField('Commands', commands)
                        .setColor(COLORS[colorNumberRandom]);
                    message.channel.send(command);
                }
            }
            //Comando para emparejzar con una persona o emparejar a dos personas, falta validar algunas cosas.
            if (command?.includes("love")) {
                let colorNumberRandom: number = Math.floor(Math.random() * COLORS.length);
                const messageEmbed: MessageEmbed = new MessageEmbed()
                    .setTimestamp()
                    .setTitle("Love Random")
                    .setColor(COLORS[colorNumberRandom])
                    .setFooter("Rosquetes o UnRosquetes", message.author.displayAvatarURL());
                if (args.length === 2) {
                    if (args[0].startsWith('<') && args[0].endsWith('>') &&
                        args[1].startsWith('<') && args[1].endsWith('>')) {
                        messageEmbed.setDescription(
                            `[${args[0]} & ${args[1]}] se quieren en un ${random}%.`
                        );
                    } else {
                        message.channel.send('Por favor, sólo nombre a usuarios');
                        return;
                    }
                } else if (args.length > 2) {
                    let validaUsuarios: string[] = args.filter( arg => !(arg.startsWith('<') && arg.endsWith('>')));
                    if (validaUsuarios && validaUsuarios.length !== 0) {
                        message.channel.send('Por favor, sólo nombre a usuarios');
                        return;
                    }
                    message.channel.send(
                        `<@${message.author.id}> por favor, sólo mencione a dos usuario`
                    );
                    return;
                } else if (args.length === 1) {
                    if (args[0].startsWith('<') && args[0].endsWith('>')) {
                        messageEmbed.setDescription(
                            `[<@${message.author.id}> & ${args}] se quieren en un ${random}%.`
                        );
                    } else {
                        message.channel.send('Por favor, sólo nombre a usuarios');
                        return;
                    }
                } else {
                    message.channel.send(
                        'Por favor, añadir uno o dos usuarios con el comando. Ejemplo: $love @user @user'
                    );
                    return;
                }
                message.channel.send(messageEmbed);
            }
            //Comando para generar un cuadrado de puro *
            if (command?.includes('cuadrado')) {
                if (args.length === 0) {
                    message.channel.send(
                        'Ingrese el comando con un parámetro por favor, Ejemplo: $cuadrado <number>'
                    );
                    return;
                } else if (args.length === 1) {
                    let argNumber: number = parseInt(args[0]);
                    if (argNumber >= 4 && argNumber <= 15) {
                        let cuadrado = '>';
                        for (let i = 1; i <= argNumber; i++) {
                            for (let j = 1; j <= argNumber; j++) {
                                if (i >= 2 && j === 1) {
                                    cuadrado += '> *  ';
                                } else {
                                    if (i === 1 && j === 1) cuadrado += ' *  ';
                                    else cuadrado += '  *  ';
                                }
                            }
                            cuadrado += '\n';
                        }
                        message.channel.send(cuadrado);
                    } else
                        message.channel.send(
                            'Ingrese un parámetro numérico entre <4 y 15>,por favor'
                        );
                } else {
                    message.channel.send('Solo ingrese un parámetro por favor');
                }
            }
        } else {
            return;
        }
    }
}

export default Events;
