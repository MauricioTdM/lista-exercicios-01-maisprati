// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")()

let userWeight = Number.parseFloat(prompt("Qual o seu peso atual em kilogramas? "))
let userHeight = Number.parseFloat(prompt("Qual a sua altura em metros? "))

let imc = (userWeight / Math.pow(userHeight, 2)).toFixed(2)

if (imc <= 18.5) {
    console.log(`O seu IMC é ${imc} e está classificado na categoria de baixo peso`);
} else if (imc > 18.5 && imc <= 24.9) {
    console.log(`O seu IMC é ${imc} e está classificado na categoria de peso normal`);
} else if (imc > 25 && imc <= 29.9) {
    console.log(`O seu IMC é ${imc} e está classificado na categoria de sobrepeso`);
} else {
    console.log(`O seu IMC é ${imc} e está classificado na categoria de obesidade`);
}

