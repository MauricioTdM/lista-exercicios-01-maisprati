// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")()

let value1 = Number.parseFloat(prompt("Digite um número: "))
let value2 = 0

do {
    value2 = Number.parseFloat(prompt("Digite outro número: "))
} while (value2 === value1);

let orderedNumbers = value1 > value2 ? `${value2}; ${value1}` : `${value1}; ${value2}`

console.log(`Ordem crescente: ${orderedNumbers}`)

