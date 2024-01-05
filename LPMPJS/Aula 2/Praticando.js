//Willian está iniciando no mundo da programação e recentemente descobriu que existe uma maneira de executar um bloco
// de comandos repetidamente enquanto uma condição pré-estabelecida não for satisfeita.
//Animado com as possibilidades, ele decidiu treinar a utilização da estrutura while() em um projeto pessoal, de cálculo
// de médias aritméticas. No entanto, acabou se deparando com um loop infinito, e não conseguiu descobrir o por quê.
//Sabendo que você também está estudando lógica de programação, Willian pediu sua ajuda para localizar onde está o erro
// em seu código:
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    //Adicionando contador--; para que a cada novo número informado pelo usuário o contador diminua 1 número até contador não ser maior que 0
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);

//Desafios
//1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador =1;

while(contador <= 10){
    console(contador);
    alert(contador);
    contador++;
}

//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador =10;

while(contador >= 0){
    console.log(contador);
    alert(contador);
    contador--;
}

//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador = prompt("Informe um número");

while(contador >= 0){
    console.log(contador);
    alert(contador);
    contador--;
}

//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador = 0
let numero = prompt("Informe um número");

while(contador <= numero){
    console.log(contador);
    alert(contador);
    contador++;
}