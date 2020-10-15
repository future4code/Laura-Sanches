//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS
//1
/*
function conversorDeMoeda(valorEmDolar){ //aqui ele criou uma função com uma variável para atribuir um parâmetro.
    const cotacao = Number(prompt("Informe o valor da cotação do Dólar")); //aqui ele criou uma variável para fazer uma pergunta ao usuário.

    return "R$" + (valorEmDolar * cotacao); //aqui diz para retornar lá no console o valor em dólar vezes a cotação que o usuário colocou.
}

const meuDinheiro = conversorDeMoeda(100);//aqui ele criou uma variável e disse que é igual à variável que criou lá em cima, o intuito é para converter o dinheiro dele em real para dólar, nesse caso, ele quer converter 100R$.

console.log(meuDinheiro); //aqui ele imprime no console o resultado de cima, que é o dinheiro dele já convertido.
*/

//2
/*
function investeDinheiro(tipoDeInvestimento, valor){ //aqui ele cria uma função com uma variável e 2 parâmetros.
    let valorAposInvestimento;//aqui ele cria uma variável para usar logo abaixo.

    switch(tipoDeInvestimento){//aqui ele cria uma switch com a variável que criamos em cima.
        case "Poupança"://aqui diz que se o tipo de investimento vai ser em poupança..
            valorAposInvestimento = valor* 1.03;//o valor de investimento será o valor dele vezes 1.03
            break;//essa tag serve para parar por aqui se o investimento dele for poupança, se não for, ele continua rodando.
        case "Renda Fixa"://diz se o tipo de investimento vai ser Renda Fixa..
            valorAposInvestimento = valor * 1.05;//o valor será o valor que ele colocar vezes 1.05
            break;//essa tag serve para parar por aqui se o investimento dele for renda fixa, se não for, ele continua rodando.
        case"CDB"://diz se o tipo de investimento vai ser CDB..
            valorAposInvestimento = valor * 1.6;//o valor será o valor que ele colocar vezes 1.06
            break;//essa tag serve para parar por aqui se o investimento dele for renda fixa, se não for, ele continua rodando.
        case "Ações"://diz se o tipo de investimento vai ser Ações..
            valorAposInvestimento = valor * 1.1;//o valor será o valor que ele colocar vezes 1.1
            break;//essa tag serve para parar por aqui se o investimento dele for renda fixa, se não for, ele continua rodando.
    }

    return valorAposInvestimento;//aqui ele retorna o valor depois do investimento, que foi o valor do usuário * o número de cada investimento.

}

const novoMontante = investeDinheiro("Ações", 150);//aqui ele cria uma variável e coloca nos parâmetros que ações é igual tipoDeInvestimento e 150 é igual à valor.
const segundoMontante = investeDinheiro("Tesouro Direto", 200);//aqui ele cria uma variável e coloca nos parâmetros que Tesouro Direto é igual à tipoDeInvestimento e que 200 é igual valor.

console.log(novoMontante);//aqui ele pede para imprimir no console o resultado da primeira variável de cima, ou seja, vai ser impresso 1.1 * 150, que será impresso 165.
console.log(segundoMontante);//aqui ele pede para imprimir no console o resultado da segunda variável de cima, no console vai aparecer undefined, pois a variável Tesouro Direto não existe.
*/

//3
/*
const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283];//aqui ele criou uma variável e dentro dela, um monte de números.
const array1 = [];//aqui ele criou uma variável de array vazia
const array2 = [];//aqui ele criou outra variável de array vazia.

for(let numero of numeros){//nesse for let, ele está dando uma condição, que é: se o número da array de números for par, todos os números pares vão ser adicionados para a array1 e se o número for ímpar, os números ímpares vão ser adicionados para o array2.
    if(numero % 2 === 0){
        array1.push(numero);
    }else{
        array2.push(numero);
    }
}

console.log("Quantidade total de números", numeros.length)
console.log(array1.length)
console.log(array2.length)
//no primeiro console, ele está pedindo para imprimir uma frase qualquer, logo em seguida, ele imprime a quantidade de números total da rray de números.
//no segundo e terceiro console, ele está pedindo para imprimir no console o total de números pares no array1, e no segundo, o total de números ímpares no array2.
*/

//4
/*
const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1,1.1, -10, 25, 1590];//aqui ele cria uma variável com números dentro.

let  numero1 = Infinity;//ele declara essa variável com um valor infinito, ou seja, a variável número 1 sempre vai ter o maior número.
let numero2 = 0;

for(let numero of numeros){
    if(numero < numero1){
        numero1 = numero;
    }

    if(numero > numero2){
        numero2 = numero;
    }
}
//no primeiro if, ele dá uma condição de que se o número for menor que o número1, eles serão iguais. No segundo if, ele diz que se o número for maior que o número2, eles serão iguais.

console.log(numero1);
console.log(numero2);

//nos 2 consoles eles pedem para imprimir os resultados do número 1 e 2, no resultado 1, será 1590, pois é o maior número. No 2 ele imprimirá o -10, pois é o menor número.
*/

//-------------------------------------------------------------------------

//EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

//1
/*As 3 maneiras de percorrer uma lista são: while, for e for..of..
exemplo de while:
let i = 0

while (i < 10){

    console.log(i)

    i++
}
*/

//2
/*
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 //true
const booleano4 = !booleano3//false

a) true && false && false = false
b) (true && false) || false = false
c)(false || true) && (false || true) = true
d)(true && false) || (false && false) = true
e)false && true || (true && true && true) = true
*/

//3
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const quantidadeDeNumerosPares = [];

let i = 0

while(i <= quantidadeDeNumerosPares){
    console.log(i * 2 + 1)

    i++
}
*/

//4
/*
function triangulo (a, b, c){
    if ((a === b) && (b === c) && (a === c)){
        return "O triângulo é equilátero!"
    }else if ((a === b && b !== c) || (a !== b && b === c) || (a !== c && c === b)){
        return "O triângulo é isosceles!"
    }else{
        return "O triângulo é escaleno!"
    }
}
console.log(triangulo(1, 2, 3))
*/

//5
/*
let doisNumeros = function (a, b){
    if ((a > b)){
        console.log(`O maior é ${a}`)
    }else{
        console.log(`O maior número é ${b}`)
    }

    if ((a % b === 0)){
        console.log(`${a} é divisível por ${b}`)
    }else{
        console.log(`${a} não é divisível por ${b}`)
    }
    
    if ((b % a === 0)){
        console.log(`${b} é divisível por ${a}`)
    }else{
        console.log(`${b} não é divisível por ${b}`)
    }

    if ((a > b)){
        let diferencaNumeros = a - b
        console.log(`A diferença entre os números é ${diferencaNumeros}`)
    }else if((b > a)){
        diferencaNumeros = b - a
        console.log(`A diferença entre os números é ${diferencaNumeros}`)
    }else{
        console.log("Eles são iguais!")
    }
}
doisNumeros(5, 10)
*/

//--------------------------------------------------------------------------------
//EXERCICIOS DE FUNÇÕES
//1
//2
/*
let chamandoLabenu = function(){
    alert ("Hello future4!");
}
const chamando = chamandoLabenu();
*/

//-----------------------------------------------------------------------------------
