/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    let carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-vindo ao jogo de Blackjack!");
   let bemVindo = confirm("Quer iniciar uma nova partida?");
   
let carta1Usuario = comprarCarta();
let carta2Usuario = comprarCarta();

let carta1Computador = comprarCarta();
let carta2Computador = comprarCarta();

let somaDasCartasUsuario = 0;
let somaDoComputador = 0;

   if(bemVindo){
      somaDasCartasUsuario = carta1Usuario.valor + carta2Usuario.valor;
      somaDoComputador = carta1Computador.valor + carta2Computador.valor;
         console.log("Usuário - cartas: " + carta1Usuario.texto + " " + carta2Usuario.texto + "- pontuação " + somaDasCartasUsuario);
         console.log("Computador - cartas: " + carta1Computador.texto + " " + carta2Computador.texto + "- pontuação " + somaDoComputador);
      }else{
         console.log("O jogo acabou.");
         }

   if (somaDoComputador===somaDasCartasUsuario){
      console.log("Empate!");
   }else if(somaDoComputador > somaDasCartasUsuario){
      console.log("Computador ganhou!");
   
   }else{
      console.log("Usuário ganhou!");
   }
   
