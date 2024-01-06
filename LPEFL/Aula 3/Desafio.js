//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, 
//que serão recebidos como parâmetro.
let altura = 1.72;
let peso = 92;
function calculandoIMC(altura, peso) {
    let imc = (parseFloat(peso / (altura * altura))).toFixed(2);
}
calculandoIMC(altura, peso);

//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numero = 10;
let resultado = 0;
function calculandoFatorial(numero)
{
	resultado = numero;
	let fator = (numero - 1);
	while (fator > 1){ 
	resultado = resultado * fator;
	fator--;
	}
}
calculandoFatorial(numero);

//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar 
//igual a R$4,80.
let valor = 10.52; 
let cotacao = 4.8;
function converteDolar(valor) {
    return (parseFloat(valor * cotacao)).toFixed(2);
}
converteDolar(valor);

//4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let altura = 10.5;
let largura = 2.6;
function calculandoMedidas(altura, largura) {
    let perimetro = parseFloat((altura * 2 ) + (largura * 2 ));
    let area = (parseFloat( altura * largura)).toFixed(2);
    alert(`Perímetro = ${perimetro} e área igual a ${area}`)
}
calculandoMedidas(altura, largura);

//5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = 2;
let pi = 3.14;
function calculandoMedidasCirculares(raio) {
    let perimetro = parseFloat(pi * 2 * raio);
    let area = parseFloat( pi * raio * raio);
    alert(`Perímetro = ${perimetro} e área igual a ${area}`)
}
calculandoMedidasCirculares(raio);

//6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let numero = 3;
function tabuada(numero)
{
	let resultado = numero;
    let maximo = 10
	let fator = 1;
	while (fator <= maximo){
	resultado = numero * fator;
	alert(`${numero} * ${fator} = ${resultado}`);
    fator++;
	} 
}
tabuada(numero);
