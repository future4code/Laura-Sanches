/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

RESPOSTAS:
a. false
b. false
c. true
e. boolean
*/
/*
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

RESPOSTAS:
a. undefined
b. null
c. 11
d. 3
e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/


//EXERCÍCIO 1
idade = prompt ("Quantos anos você tem?")
idadeDoMelhorAmigo = prompt ("Quantos anos seu melhor amigo tem?")

console.log(typeof(idade));

let perguntaSobreIdade = ["Sua idade é maior que a do seu melhor amigo?"]
let respostaSobreIdade = ["True", "False"]

console.log(perguntaSobreIdade[0], respostaSobreIdade[0])

let diferenca = Number (idade) - Number (idadeDoMelhorAmigo)

console.log("A diferença das idades é: ", diferenca)

//EXERCÍCIO 2
pedindoNumeroPar = prompt ("Insira um número par")

console.log(pedindoNumeroPar%2)

//Notei um padrão, pois qualquer número par dividido por 2 resulta em 0.

//Quando eu divido um número impar por 2 o resultado sempre vai ser 1.

//EXERCÍCIO 3
let listaDeTarefas = []

let primeiraTarefa = prompt ("Diga uma tarefa que você precisa realizar depois do café da manhã.")
let segundaTarefa = prompt ("Diga uma tarefa que você precisa realizar depois do almoço.")
let terceiraTarefa = prompt ("Diga uma tarefa que você precisa realizar depois da janta.")

listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTarefa)

console.log(listaDeTarefas)

let tarefasRealizadas = prompt ("Diga a tarefa que você já realizou. Você tem as opções: 0, 1 ou 2.")

console.log(tarefasRealizadas)

listaDeTarefas.splice(Number(tarefasRealizadas), 1)

console.log(listaDeTarefas)

//EXERCÍCIO 4
nome = prompt ("Qual é o seu nome?")
email = prompt ("Qual é o seu e-mail?")

console.log(typeof (nome, email))

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)


//DESAFIO
//EXERCÍCIO 1
//a.
const k1 = (- 32)*5/9 + 273.15;
const f1 = 77;
const resultado =  (f1 - 32)*5/9 + 273.15;
console.log(resultado);
//b.
const f2 = (0)*9/5+32;
const c2=80;
const resultado2=(c2)*9/5+32;
console.log(resultado2);
//c.
let f3 = (0)*9/5+32;
let c3=30;
let resultado3=(c3)*9/5+32;
console.log(resultado3+"F");

let k3=(-32)*5/9+273.15;
let resultado4=(c3-32)*5/9+32;
console.log(resultado4+"k");

//d.
let valor=prompt("Valor em Celsius");
valor=Number(valor);
f3=(valor)*9/5+32;
console.log(f3+"F");

k3=(valor-32)*5/9+273.15
console.log(k3+"K");


