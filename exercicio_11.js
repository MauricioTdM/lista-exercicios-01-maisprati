// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")();

let soma = 0;

for(let i = 1; i <= 5; i++) {
    let userNumber = Number.parseFloat(prompt(`Digite o ${i}° número: `));
    soma += userNumber;
}

console.log(soma);
