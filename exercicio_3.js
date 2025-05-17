// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let grade = Number.parseFloat(prompt("Digite a nota do aluno: "));

if (grade < 0 || grade > 10) {
    console.log("Nota inválida, coloque uma nota dentro do intervalo de 0 a 10");
} else if (grade >= 7) {
    console.log("Aprovado");
} else if (grade < 7 && grade >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

