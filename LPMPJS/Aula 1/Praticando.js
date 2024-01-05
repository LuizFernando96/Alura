//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
MensagemFinalSemana = 'Bom fim de semana!';
MensagemSemana = 'Boa semana!';
DiaSemana = prompt('Qual o dia da semana?');
if(DiaSemana == 'Sábado'){
    alert(MensagemFinalSemana);
}else{
    if(DiaSemana == 'Domingo'){
        alert(MensagemFinalSemana);
    }else{
    alert(MensagemSemana);
    }
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Digite um número');
if(numero > 0){
    alert('POSITIVO');
}else{
    if(numero < 0){
        alert('NEGATIVO');
    }else{
        alert('Informação inválida');
    }
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = 100;

if(pontuacao >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
saldo = 0;

alert(`O seu saldo é R$${saldo} reias`)

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nome = prompt('Informe o seu nome');
alert(`Bem-vindo ${nome}!`);