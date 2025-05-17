// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let prompt = require("prompt-sync")()

let appleCount = Number.parseInt(prompt("Quantas maçãs quer comprar? "))
let unitPrice = appleCount < 12 ? 0.30 : 0.25;
let totalCost = appleCount * unitPrice;

console.log(`Total da compra: R$ ${totalCost.toFixed(2)}`);