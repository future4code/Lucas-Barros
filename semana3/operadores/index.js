//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

//a. false (operador E:&& -> true + false = false)

//b. false (operador E:&& -> true + false + true = false)

//c. true (operador Não/negação !resultado= true + true || true = true)

//e. como resultado da anterior é é true o resultado do .log é boolean


//2. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa
// null
// null
// 11
// 3
// não sei
// não sei

let idade = prompt ("Qaul a sua idade?")
console.log(idade, typeof Number(idade))

let idadeAmigo = prompt ("Qual a idade do seu melhor amigo(a)")
console.log(idadeAmigo, typeof Number(idadeAmigo))

let primeiraComparacao = idade > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", primeiraComparacao)

let diferencaIdade = idade % idadeAmigo
console.log(diferencaIdade)

let par = prompt ("Digite um numero Par")
console.log(par, typeof Number(par))

let restoDivisao = par % 2
console.log(restoDivisao)*/

// o padrão do codigo é que sempre termina com 0
// se colocar um numero impar o resto é sempre 1

/*let listaDeTarefas = []

let perguntas = prompt ("o que fazer hoje?")
listaDeTarefas.push(perguntas)


let pergunta1 = prompt ("o que fazer hoje")
listaDeTarefas.push(pergunta1)


let pergunta2 = prompt ("o que fazer hoje")
listaDeTarefas.push(pergunta2)
console.log(listaDeTarefas)


let indice = prompt ("qual item você realizou?")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)*/

/*let nomeDoUsuario = prompt ("Qual o seu nome?")
let emailDoUsuario = prompt ("Qual o seu email?")

console.log("O e-mail", emailDoUsuario , "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeDoUsuario)*/

//a.

let temperatura = prompt ("Digite a temperatura em Fahrenheit")
console.log(temperatura, typeof Number(temperatura))
let formula = (temperatura - 32) * (5/9) + (273.15)
console.log(formula, "k", typeof Number(formula), )

//b.

