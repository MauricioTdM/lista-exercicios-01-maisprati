// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let userInput = null;
let sumOfNumbers = 0;
let counter = 0;

while(userInput !== 0) {
    userInput = Number.parseFloat(prompt("Digite um número: "));

    sumOfNumbers += userInput;

    counter++;
}

let average = sumOfNumbers / (counter - 1);

console.log(average);
