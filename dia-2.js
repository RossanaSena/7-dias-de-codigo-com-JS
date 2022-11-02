const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

const sim = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
if (sim == 1){
    console.log ("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (nao == 2){
    console.log ("Ahh que pena... Já tentou aprender outras linguagens?");
}

/*node dia-2.js*/
