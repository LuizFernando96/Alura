alert('Boas vindas ao jogo do número secreto');
//Criando variáveis para definir o ranger
let numeroMaior = 100;
let numeroMenor = 1;

//Criando variável com número random
let numeroSecreto = parseInt(Math.random() * numeroMaior + numeroMenor);

//Criando variável que receberá a o número que o usuário chutou
let chute;

//Criando variável que receberá o número de tentativas feitas pelo usuário
let tentativas = 0;

//Criando um loop que enquanto o usuário não acertar qual é o número misterioso o jogo e loop não acabam
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${numeroMenor} e ${numeroMaior}`);
    tentativas++;

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`Erooooou, o número secreto é menor que ${chute}`);
        } else {
            alert(`Erooooou,O número secreto é maior que ${chute}`);
        }
    }
}

//Exibindo mensagem de acordo com o número de chutes
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
