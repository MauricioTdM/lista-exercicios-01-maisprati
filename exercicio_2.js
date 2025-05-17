// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();

let userAgeInput = Number.parseInt(prompt("Digite uma idade: "));

if (userAgeInput <= 12) {
    console.log("Com base na idade forncecida, você é: criança");
} else if (userAgeInput >= 13 && userAgeInput <= 17) {
    console.log("Com base na idade forncecida, você é: adolescente");
} else if (userAgeInput >= 18 && userAgeInput <= 59) {
    console.log("Com base na idade forncecida, você é: adulto");
} else {
    console.log("Com base na idade forncecida, você é: idoso");
}