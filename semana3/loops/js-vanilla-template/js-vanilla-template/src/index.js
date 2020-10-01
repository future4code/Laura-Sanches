//EXERCÍCIO 1
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

RESPOSTA: Vai ser impresso no console o valor 10.
*/

//EXERCÍCIO 2
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

RESPOSTA:
a. Vai ser impresso no console : 19, 21, 23, 25, 27 e 30

b. 
*/

//EXERCÍCIO 3
//a.
/*
const arrayOriginal = [10, 20, 25, 37, 30, 40]

for(let numero of arrayOriginal) {
    console.log(numero)
}
*/

//b.
/*
const arrayOriginal = [10, 20, 25, 37, 30, 40]

for(let numero of arrayOriginal) {
    if(numero >= 10)
    numero = numero / 10
    console.log(numero)
}
*/

//c.
/*
const arrayOriginal = [10, 20, 25, 37, 30, 40]
const numeroPar=[]

for(let numero of arrayOriginal) {
    if(numero%2===0) {
        numeroPar.push(numero)
    }
}
console.log(numeroPar)
*/

//d.
/*
const arrayOriginal = [10, 20, 25, 37, 30, 40]

let contador = 0;

//for (let i; i < arrayOriginal.length; i++){

//}


for (let numero of arrayOriginal){
    console.log("O elemento do índex é " + contador + " é " + numero)
    contador ++
}
*/

//e.
/*
let arrayOriginal = [10, 20, 25, 37, 30, 40]

let maiorValor = arrayOriginal [0]

for (let i = 0; i<arrayOriginal.length; i++){

    let elemento = arrayOriginal[i]

    if (maiorValor < elemento) {

        maiorValor = elemento
    }
}
console.log(maiorValor)
*/

let arrayOriginal = [10, 20, 25, 37, 30, 40]

let menorValor = arrayOriginal [0]

for (let i = 0; i > arrayOriginal.length; i--){

    let elemento = arrayOriginal[i]

    if (menorValor > elemento) {

        menorValor = elemento
    }
}
console.log(menorValor)