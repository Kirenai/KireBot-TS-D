import { Message } from "discord.js";

export const cuadrado = (args: string[], message: Message): void => {
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
