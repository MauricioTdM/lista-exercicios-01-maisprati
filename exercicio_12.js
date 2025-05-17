// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require("prompt-sync")();

function tabuada(userInput) {
    console.log(`Tabuada do número: ${userInput}`);
    
    for(let i = 1; i <= 10; i++) {
        console.log(`${userInput} x ${i} = ${userInput * i}`);
    }
}

let userNumber = Number.parseFloat(prompt("Digite um número: "));

tabuada(userNumber);
