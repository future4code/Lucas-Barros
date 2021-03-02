/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


alert("Bem vindo ao jogo de Blackjack")

console.log("bem vindo ao jogo")

let novoJogo = confirm("quer iniciar uma nova jogada?")

if (novoJogo) {
   
   let usuario = comprarCarta ()
   let usuario1 = comprarCarta ()
   let computador = comprarCarta ()
   let computador1 = comprarCarta ()

   let maoUsuarioPontos = usuario.valor + usuario1.valor
   
   let maoComputadorPontos = computador.valor + computador1.valor
   

   console.log('Usuario:',usuario.texto + " " +usuario1.texto, - maoUsuarioPontos)
   console.log('Computador:',computador.texto + " " +computador1.texto, - maoComputadorPontos)

   if (maoUsuarioPontos > maoComputadorPontos) {
      console.log("Parabens Voce ganhou!")
  } else if (maoComputadorPontos > maoUsuarioPontos) {
      console.log("Infelizmente Você perdeu!")
  } else if (maoUsuarioPontos === maoComputadorPontos) {
      console.log("Empatou, tente novamente")
  }

} else {
   console.log("o jogo acabou")
}