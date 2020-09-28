//Exercício 1

let nome
console.log (typeof nome);

let idade
console.log (typeof idade);

//esse tipo de código foi impresso porque não atribui nenhum valor.

nome = prompt ("Qual é o seu nome?")
idade = prompt ("Qual é a sua idade?")

console.log (typeof (nome, idade));

//notei que ele mandou uma string, pois ambas possuem texto.

console.log (`Olá ${nome}, você tem ${idade} anos`)

//Exercício 2

let endereço
endereço = prompt ("Qual o seu endereço?")
console.log(`Resposta: ${endereço}`)

let cor
cor = prompt ("Qual sua cor favorita?")
console.log(`Resposta: ${cor}`)

let lugar
lugar = prompt ("Qual o seu lugar preferido?")
console.log(`Resposta: ${lugar}`)

let comida
comida = prompt ("Qual a sua comida favorita?")
console.log (`Resposta: ${comida}`)

let marca
marca = prompt ("Qual a sua marca favorita?")
console.log (`Resposta: ${marca}`)

//Exercício 3

let arrayComidasPreferidas = ['japonesa', 'lasanha', 'estrogonofe', 'picanha', 'saladas']
console.log(arrayComidasPreferidas)
console.log("Essas são as minhas comidas preferidas")
console.log("japonesa")
console.log(`${comida}`)
console.log("estrogonofe")
console.log("picanha")
console.log("saladas")

//Exercício 4

let perguntasBooleanas = ["Você está usando uma roupa preta hoje?", "Você está bem?", "Você gosta de lasanha?"]
let respostasBooleanas = ["True", "False"]
console.log(perguntasBooleanas [0], respostasBooleanas [0])
console.log(perguntasBooleanas [1], respostasBooleanas [0])
console.log(perguntasBooleanas [2], respostasBooleanas [1])