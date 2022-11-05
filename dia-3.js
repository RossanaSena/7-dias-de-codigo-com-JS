// Desafio: Criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo Sim para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

const nome = prompt("Qual é o seu nome?");
alert(`Olá ${nome}! Bem-vindo/a ao jogo da programação, nesse jogo você decide o destino de seu personagem dev!`);

const area = prompt("Vamos começar! Seu dev está no início da trilha dos estudos sobre programação. Qual área irá se aprofundar, Front-End ou Back-End?");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Muito Bem, você está estudando sobre Front-End até que você se depara com duas tecnologias React ou Vue, qual escolher?");
}
else if (area === "Back-End"){
    linguagem = prompt("Se identificou com Back-End, agora escolha C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' em caso positivo.");
while (msg === "Sim"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' em caso positivo.");
}