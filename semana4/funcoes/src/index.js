//EXERCÍCIOS DO DIA!!!!!!!!!!!!!!!!
//EXERCÍCIO 1
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/

//a. Vai ser impresso no console os números multiplicados por 5, que será 10 e 50.
//b. Não apareceria nada.

//EXERCÍCIO 2
/*
let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)
*/

//a. As saídas serão Darvas e Caio, pois ele dá uma condição de imprimir no console apenas os 2 primeiros nomes.
//b. Apareceria no console Amanda e Caio, pois seriam apenas 2 nomes.

//EXERCÍCIO 3
/*
const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
  
    return arrayFinal;
  }
*/

//EXERCÍCIO 4
//A.
/*
let sobreMim = function(){
    console.log("Eu sou Laura, tenho 19 anos, moro em Araraquara e sou estudante")
}

sobreMim()
*/

//B.
/*
const dados = (nome, idade, cidade, estudante) => {
    if (estudante){
        estudante = "sou estudante"
    }else{
     estudante = "Não sou estudante"
    }

    console.log(" Eu sou " + nome + " , tenho " + idade + " anos, moro em " + cidade + " e " + estudante)

}

dados("Laura", 19, "Araraquara", "true")
*/

//EXERCÍCIO 5
//A.
/*
const resultado = somaDosNumeros (4, 6)
    console.log(resultado)

function somaDosNumeros (numero1, numero2){
    const soma = numero1 + numero2
        return soma
}
*/

//B.
/*
function numeros (x, y){
    if (x >= y){
        console.log("São iguais");
    }else{
        console.log("são diferentes");
    }
}

numeros(8, 8);
*/

//C
/*
let mandarMensagem = (mensagem) =>{
    for (let i = 0; i < 10; i++){
        console.log(mensagem)
    }
}

mandarMensagem ("A labenu é sensacional!")
*/

//EXERCÍCIO 6
//A.
/*
const tamanhoArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function verificaArray (){

        return tamanhoArray.length
}
console.log(verificaArray())
*/

//B.
/*
const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    if(arrayNumeros % 2 === 0){
        console.log("Este número é par");
    }else{
        console.log("Este número é ímpar");
    }
*/

//C.
/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    let tamanhoArray = (array) =>{
        let arrayPar=[10, 78, 90, 52, 35, 67, 84, 22]
        for(let i = 0; i < array.length; i++);
            if (array % 2 === 0){
                arrayPar.push(array[i])
            }
    }
    return arrayPar.length
*/