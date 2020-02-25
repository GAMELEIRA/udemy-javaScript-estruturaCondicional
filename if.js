/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:24/02/2020
 * HORA:22:55
 * FINALIDADE DO PROGRAMA:TRABALHAR COM IF'S
 */

function soBoaNoticia(nota) {

    if (nota >= 7) {

        console.log(`Passou com a nota: ${nota}.`);

    }

}


soBoaNoticia(8.1);

soBoaNoticia(6.1);

function seForVerdade(valor){

    if(valor){

        console.log(`É verdade! ${valor}`);
    }

}

seForVerdade();

seForVerdade(null);

seForVerdade(undefined);

seForVerdade(NaN);

seForVerdade('');

seForVerdade(0);

seForVerdade(-1);

seForVerdade(" ");

seForVerdade("GABRIEL GAMELEIRA DOS SANTOS");

seForVerdade([]);

seForVerdade([1,2]);

seForVerdade({});