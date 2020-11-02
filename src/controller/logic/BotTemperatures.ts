import { Message, MessageEmbed } from "discord.js";

export const kelvin = (args: string[], message: Message, COLORS: number[], colorNumberRandom: number) => {
    let kelvin: number;
    if (args.length === 1) {
        kelvin = parseInt(args[0]);
        if (isNaN(kelvin)) {
            message.channel.send('Por favor, sólo números enteros o con punto decimal');
            return;
        }
        const messageEmbed = new MessageEmbed()
            .setColor(COLORS[colorNumberRandom])
            .setTitle('Conversión de Temperaturas')
            .setDescription(
                `@Celsius => ${kelvin - 273.15} => fun(K – 273.15) = °C.
                @Fahrenheit => ${(9 / 5 * kelvin) - 459.67} => fun(( 9/5 K ) – 459.67) = °F.
                @Kelvin => ${kelvin} = K`
            )
            .setTimestamp()
            .setFooter('Bot Científico 👩‍🔬', message.author.displayAvatarURL());
        message.channel.send(messageEmbed);
    } else {
        message.channel.send('Por favor, sólo ingrese un parámetro => $k <param>')
    }
}

export const celsius = (args: string[], message: Message, COLORS: number[], colorNumberRandom: number) => {
    let celsius: number;
    if (args.length === 1) {
        celsius = parseInt(args[0]);
        if (isNaN(celsius)) {
            message.channel.send('Por favor, sólo números enteros o con punto decimal');
            return;
        }
        const messageEmbed = new MessageEmbed()
            .setColor(COLORS[colorNumberRandom])
            .setTitle('Conversión de Temperaturas')
            .setDescription(
                `@Celsius => ${celsius} => °C.
                @Fahrenheit => ${(9 / 5 * celsius) + 32} => fun(( 9/5 . °C ) + 32) = °F.
                @Kelvin => ${celsius + 273.15} => fun(°C + 273.15) = K`
            )
            .setTimestamp()
            .setFooter('Bot Científico 👩‍🔬', message.author.displayAvatarURL());
        message.channel.send(messageEmbed);
    } else {
        message.channel.send('Por favor, sólo ingrese un parámetro => $c <param>')
    }
}

export const fahrenheit = (args: string[], message: Message, COLORS: number[], colorNumberRandom: number) => {
    let fahrenheit: number;
    if (args.length === 1) {
        fahrenheit = parseInt(args[0]);
        if (isNaN(fahrenheit)) {
            message.channel.send('Por favor, sólo números enteros o con punto decimal');
            return;
        }
        const messageEmbed = new MessageEmbed()
            .setColor(COLORS[colorNumberRandom])
            .setTitle('Conversión de Temperaturas')
            .setDescription(
                `@Celsius => ${5 / 9 * (fahrenheit - 32)} => fun(5/9 ( °F – 32)) = °C.
                @Fahrenheit => ${fahrenheit} => °F.
                @Kelvin => ${5 / 9 * (fahrenheit + 459.67)} => fun(5/9 ( °F + 459.67 )) = K`
            )
            .setTimestamp()
            .setFooter('Bot Científico 👩‍🔬', message.author.displayAvatarURL());
        message.channel.send(messageEmbed);
    } else {
        message.channel.send('Por favor, sólo ingrese un parámetro => $f <param>')
    }
}

