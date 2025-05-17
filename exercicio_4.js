// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

console.log("Bem vindo ao banco Master! O que deseja fazer? Escolha entre as opções:")
console.log("1 - Sacar\n2 - Depositar \n3 - Extrato")

let userChoice = Number.parseInt(prompt("Opção: "));
let balance = 3579

switch (userChoice) {
    case 1:
        let withdrawAmount = Number.parseFloat(prompt("Quanto quer sacar? "));
        balance -= withdrawAmount;
        console.log(`Seu saldo atual é: ${balance}`);
        break;

    case 2:
        let depositAmount = Number.parseFloat(prompt("Quanto quer depositar? "));
        balance += depositAmount;
        console.log(`Seu saldo atual é: ${balance}`);
        break

    case 3:
        console.log(`\nSeu saldo atual é: ${balance}`);
        console.log("\nNo mês de Maio você gastou: \nR$189.90 no Mercado Master \nR$497.97 na Livraria Master");
        break
}
