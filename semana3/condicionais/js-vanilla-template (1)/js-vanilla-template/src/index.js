// EXERCÍCIO 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar") --> Este código faz uma pergunta para o usuário.
const numero = Number(respostaDoUsuario) --> Este código diz que a resposta do usuário tem que ser um número.

if(numero % 2 === 0) { --> Este código está dando uma condição, se o número que o usuário colocou dá um resto de 0 ele passará no teste.
  console.log("Passou no teste.")
} else { --> Este código está dizendo que se a resposta do usuário NÃO tem a cindição falada à cima, ele não passará no teste.
  console.log("Não passou no teste.")
}
*/
//EXERCÍCIO 2
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. O código acima serve para simplificar o código e ficar mais fácil de entender.

b. A mensagem impressa será: "O preço da fruta, Maçã, é 2.25R$"

c. Se não tivesse o break, o código ia ficar rodando, e por fim ia rodar o default.
*/

//EXERCÍCIO 3
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a. A primeira linha está fazendo uma pergunta para o usuário e já especificando que na resposta do usuário, a resposta vai ser um número.

b. Se o usuário digitar 10, ele vai passar no teste. Se ele digitar -10, a mensagem vai ser secreta e ele não vai ver.

c. 
*/

//EXERCÍCIO 4
/*
const respostaDoUsuario = (prompt ("Quantos anos você tem?"))
const numero = Number(respostaDoUsuario)

if(numero >= 18){
    console.log("Você pode dirigir!")

} else {
    console.log("Você não pode dirigir!")
}
*/

//EXERCÍCIO 5
/*
const horaQueEstuda = prompt ("Que turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase
    console.log(horaQueEstuda)

if(horaQueEstuda === "M"){
    console.log("Bom dia!")
}else if(horaQueEstuda === "V"){
    console.log("Boa Tarde!")
}else{
    console.log("Boa noite!")
}
*/

//EXERCÍCIO 6
/*
const horaQueElxEstuda = prompt ("Qual turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
    console.log(horaQueElxEstuda)
switch (horaQueElxEstuda){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}
*/

//EXERCÍCIO 7 
/*
const generoFilme = prompt ("Qual gênero de filme vocês vão assistir?") .toLocaleLowerCase()
const qualPreço = Number(prompt("Quantos reais vocês vão pagar?"))

if (generoFilme === "fantasia" && qualPreço <= 15){
    console.log("Bom filme!")
}else {
    console.log("Esolha outro filme! :(")
}
*/

//Desafio 1
/*
let generoFilme = prompt ("Qual gênero de filme vocês vão assistir?") .toLocaleLowerCase()
let qualPreço = Number(prompt("Quantos reais vocês vão pagar?"))

if (generoFilme === "fantasia" && qualPreço <= 15){
let comer = prompt ("Qual snack você vai comprar?")
    console.log(`Bom filme com ${comer}`);
}else {
    console.log("Esolha outro filme! :(");
}
*/

//DESAFIO 2

