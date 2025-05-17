// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fibo1 = 0;
let fibo2 = 1;
let aux = null;

for (let i = 1; i <= 10; i++) {
    aux = fibo1 + fibo2;
    
    console.log(fibo1);
    
    [fibo1, fibo2] = [fibo2, aux];
}