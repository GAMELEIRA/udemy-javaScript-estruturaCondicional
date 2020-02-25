/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:10:34
 * FINALIDADE DO PROGRAMA: TRABALHAR COM POSSIVEIS ERROS DE CODIFICACAO COM A ESTRUTURA IF
 */

Number.prototype.entre = function (inicio, fim) {

    return this >= inicio && this <= fim;

}

const imprimirResultado = function (nota) {

    if (nota.entre(9, 10))

        console.log(`EXCELENTE!`);

    else if (nota.entre(7, 8.99)) {

        console.log(`MUITO BEM!`);

    } else if (nota.entre(4, 6.99)) {

        console.log(`RECUPERAÇÃO!`);

    } else if (nota.entre(0, 3.99)) {

        console.log(`REPROVADO!`);

    } else if (nota.entre(`A`)) {

        console.log("DEU MERDA");
    }

    else {

        console.log(`NOTA INVÁLIDA!`);

    }

    console.log(`FIM!`);

}

imprimirResultado(10);

imprimirResultado(8.9);

imprimirResultado(6.55);

imprimirResultado(2.3);

imprimirResultado(-1);

imprimirResultado(11);

