import { Message, MessageEmbed } from "discord.js";

export const com = (args: string[], message: Message, commands: string[], COLORS: number[], colorNumberRandom: number): void => {
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