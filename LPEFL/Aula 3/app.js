
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;
    limparCampo();
    if ( chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraVezes = tentativas > 1 ? 'vezes' : 'vez' ;
        let mensagemTela = `Número secreto é ${numeroSecreto}. Você chutou ${tentativas} ${palavraVezes}`;
        exibirTextoNaTela('p', mensagemTela);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if ( chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Erooooou!');
            let mensagemTela2 = `Número secreto é menor que ${chute}`;
            exibirTextoNaTela('p', mensagemTela2);
        } else {
            exibirTextoNaTela('h1', 'Erooooou!'); 
            let mensagemTela3 = `Número secreto é maior que ${chute}`
            exibirTextoNaTela('p', mensagemTela3);  
        }
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    document. getElementById('reiniciar').setAttribute('disabled', true) 
}
