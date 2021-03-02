// exercicio 1
//a. O que vai ser impresso no console? Resposta 10,50
//b. b. O que aconteceria se retirasse os dois `console.log` 
//e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
//O que apareceria no console?
// resposta: Nada


//Exercicio 2
// a. Explicite quais são as saídas impressas no console
//Resposta: Darvas e Caio, foram essas a saida porque no codigo do loop pede para começar no 0 e o i < 2, no caso
//[2]João não vai aparecer
//b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
//Resposta: amanda e Caio, pois o loop sempre só pede dois


//Exercicio 3
//


//Exercicio 4

/*function sobreMim() {
    console.log("Eu sou Lucas, tenho 30 anos, moro em São Paulo e sou estudante")
}

sobreMim()*/


//b.

/*function sobreMim1(nome, idade, endereco, estudante) { 
    
    console.log("eu sou", nome, "tenho", idade, "anos", "moro na rua", endereco, "e", estudante,"estudante")
    idade = Number

    estudante = true

    if (estudante) {
      
        console.log("sou")
    } else {
       console.log("nao sou")
    }
}


sobreMim1("lucas", 30, "aracaju", "false" );*/

// Exercicio 5 
//a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele


function soma(numero1, numero2) {
    return numero1 + numero2
    
}

console.log(soma(21, 13))

//b

/*function par(num1, num2) {
    let resultado = num1 + num2
    let pares = resultado % 2
    if (pares === 0) {
        return console.log("é par")
    }else{
        return console.log("é impar")
    }
}*/

/*
function doisNumeros(num1, num2) {
    
    return num1 > num2

}

console.log(doisNumeros(7, 9))
*/

//c. 

function imprime(mensagem) {
    
 
    for(let i = 0; i < 10; i++) {
        console.log(mensagem)
    }
}

imprime("ola lucas")


//exercicio 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


//a
function tamanhoDaArray(numero1) {
   return numero1.length  // no meu exerrcico estava fazendo exatamente assim mas no final eu não colocava o console.log e si somente a função e não funcionava, acho que meu problema está mas em conceito do que outra coisa
}

console.log(tamanhoDaArray(array))

//b

function epar(n) {
    let modulo = n% 2
    if (modulo === 0) {
        return true
    } else{
        return false
    }
}

console.log("o numero é par?", epar(9))

//c

let conjuntoNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function calculaPar(arrayDeNumeros) {
    let numerosPares = [];
    for(const numero of arrayDeNumeros){
        if(numero % 2 ===0){
            numerosPares.push(numero)
        }
    }
    return numerosPares.length
}

console.log(calculaPar(conjuntoNumeros))