// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();

let userNumberInput = Number.parseInt(prompt("Digite um número: "));

if ((userNumberInput % 2) === 0) {
    console.log(`O número ${userNumberInput} é par`);
} else {
    console.log(`O número ${userNumberInput} é ímpar`);
}