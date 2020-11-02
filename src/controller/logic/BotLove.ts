import { Message, MessageEmbed } from 'discord.js'

export const love = (args: string[], message: Message, random: number, COLORS: number[], colorNumberRandom: number): void => {
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
                let validaUsuarios: string[] = args.filter(arg => !(arg.startsWith('<') && arg.endsWith('>')));
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