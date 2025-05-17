// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

function factorial(userInput) {
    let factorial = 1

    while(userInput >= 1) {
        factorial *= userInput

        userInput--
    }

    return factorial
}

let userNumber = Number.parseInt(prompt("Digite um número: "));

userNumber === 0 ? console.log(1) : console.log(factorial(userNumber))
