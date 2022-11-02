/*Comparação de valores e tipos*/

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
    //console.log ('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else { 
    //console.log ('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

if (numeroTrinta === stringTrinta) {
    //console.log ('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
    //console.log ('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}
  
if (numeroDez == stringDez) {
    //console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
    //console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}

/*node dia-1.js*/

const idade = 2
const nome = "Lara"
const sobrenome = "Ayumi"
const bacharel = false
const dezAnosDepois = "12"
const nomeCompleto = nome + sobrenome
const resultado = idade + dezAnosDepois

//console.log (nomeCompleto)
//console.log (resultado)
//console.log (bacharel == 1)

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

//console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

const forma = "quadrado";
const altura = 5;
const comprimento =7;
let area;

if (forma === "triângulo") {
    area = (altura * comprimento);
} else { 
    area = (altura * comprimento) / 2;
}

console.log(area)
