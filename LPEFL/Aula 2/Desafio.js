//Criar uma função que exibe "Olá, mundo!" no console.
function exibirTextoNaTela(){
    console.log('Olar mundo');
}
exibirTextoNaTela();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirTextoNaTela2(nome){
    console.log(`Olá, ${nome}!`);
}
exibirTextoNaTela2('Luiz');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibindoDobro(numero) {
    return (numero * 2);    
}
exibindoDobro(2);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function exibindoMedia(numeroUm, numeroDois, numeroTres) {
    return ((numeroUm + numeroDois + numeroTres) / 3);    
}
exibindoMedia(1, 2, 3);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numeroUm, numeroDois){
    if(numeroUm > numeroDois){
        return (numeroUm);
    } else{
        return (numeroDois);
    }
}
maiorNumero(1, 2);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return (numero * numero);
}
quadrado(2);