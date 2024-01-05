alert('Bem-vindo ao jogo do número secreto');

//Criando a variável que chama dentro do html o título da página
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Número Secreto';

//Criando a variável que chama dentro do html o parágrafo abaixo do título
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'

//Utilizando conceitos como document.querySelector para buscar um parametro dentro do html.
//Utilizando conteitos como .innerHTML para mandar uma informação para um lugar específico do html.

function verificarChute(){
    console.log('Botão acionado');
}