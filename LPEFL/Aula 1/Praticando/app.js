//Criando um título para página
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//Ao clicar no botão console uma mensagem é exibida no console
function botaoClicado(){
    console.log('O botão foi clicado');
}

//Ao clicar no botão alert uma mensagem é exibida em tela
function alerta(){
    alert('Eu amo JS');
}

//Ao clicar no botão prompt é perguntado em para o usuário um nome de cidade e logo após usuário informar é exibido uma mensagem em tela
function cidadeBrasil(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil')
    alert(`Estive em ${cidade} e lembrei de você`);
}

//Ao clicar no botão soma é perguntado 2 números e exibido em tela a soma dos dois números.
function somando(){
    let numeroUm = parseInt(prompt('Digite o primeiro número'));
    let numeroDois = parseInt(prompt('Digite o segundo número'));
    let soma = (numeroUm + numeroDois);
    alert(`A soma é ${soma}`);
}