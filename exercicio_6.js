// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

function triangleValidator(side1, side2, side3) {
    let firstSide = side1 < (side2 + side3)
    let secondSide = side2 < (side1 + side3)
    let thirdSide = side3 < (side1 + side2)

    if (firstSide && secondSide && thirdSide) {
        return true
    } else {
        console.log("Não é um triângulo válido");
    }
}

let prompt = require("prompt-sync")()

let aSide = Number.parseInt(prompt("Digite o valor do primeiro lado de um triângulo: "))
let bSide = Number.parseInt(prompt("Digite o valor do segundo lado de um triângulo: "))
let cSide = Number.parseInt(prompt("Digite o valor do terceiro lado de um triângulo: "))

if (triangleValidator(aSide, bSide, cSide)) {
    if (aSide === bSide && aSide === cSide) {
        console.log("É um triângulo equilátero")
    } else if (aSide === bSide || aSide === cSide || bSide === cSide) {
        console.log("É um triângulo isósceles")
    } else {
        console.log("É um triângulo escaleno")
    }
}
