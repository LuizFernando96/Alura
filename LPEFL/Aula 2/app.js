let numeroSecreto = gerarNumeroAleatorio();
alert('Bem-vindo ao jogo do número secreto');
//Utilizando conceitos como document.querySelector para buscar um parametro dentro do html.
//Utilizando conteitos como .innerHTML para mandar uma informação para um lugar específico do html.
//Utilizando uma função para evitar repetição no código

//Função recebe a tag que precisa ser chamada no html e o texto que precisa ser exibido em tela e retorna o texto que precisa ser exibido em tela

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1) ;
}