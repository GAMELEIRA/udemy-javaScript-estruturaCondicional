/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:11:58
 * FINALIDADE DO PROGRAMA: TRABALHAR COM POSSIVEIS ERROS DE CODIFICACAO COM A ESTRUTURA IF
 */

const imprimirResultado = function (nota) {

    switch (Math.floor(nota)) {

        case 10:
        case 9:
            console.log(`EXCELENTE!`);
            break;

        case 8:
            case7:
            console.log(`MUITO BEM!`);
            break;

        case 6:
        case 5:
        case 4:
            console.log(`RECUPERACAO!`)
            break;

        case 3:
        case 2:
        case 1:
        case 0:
            console.log(`REPROVADO!`);
            break;

        default:
            console.log(`NOTA INVALIDA!`);

    }


}


imprimirResultado(10);

imprimirResultado(8.9);

imprimirResultado(6.55);

imprimirResultado(2.3);

imprimirResultado(-1);

imprimirResultado(11);

