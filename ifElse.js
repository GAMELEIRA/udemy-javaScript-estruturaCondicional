/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:25/02/2020 
 * HORA:10:34
 * FINALIDADE DO PROGRAMA: TRABALHAR COM POSSIVEIS ERROS DE CODIFICACAO COM A ESTRUTURA IF
 */

const imprimirResultado = function (nota) {

    if (nota >= 7)
        console.log(`Aprovado!`);
    else
        console.log(`Reprovado!`);
}

imprimirResultado(10);

imprimirResultado(4);

imprimirResultado(`Epa!`);

