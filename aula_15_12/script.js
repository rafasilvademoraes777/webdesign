/*
  EXERCÍCIO 1: CLASSIFICADOR DE NÚMEROS (IF/ELSE)
  Instruções: Peça ao usuário para digitar um número (use a função 'prompt' se estiver no navegador).
  O código deve:
  1. Verificar se o número é maior que zero (Positivo).
  2. Verificar se o número é menor que zero (Negativo).
  3. Verificar se o número é igual a zero.
  4. Para números Positivos, verificar se são pares ou ímpares.
  5. Imprimir a classificação completa no console.
*/

// let numeroUsuario = +prompt('digite um número')

// if( numeroUsuario > 0) {
//     alert('positivo');
// }

// if( numeroUsuario < 0) {
//     alert('negativo');
// }

// else{
//     alert('é igual');
    
// }

//     if ( indice % 2 == 0) {
//         alert('par', indice)
//     }

//     else{
//         alert('impar', indice)
//     }


/*
  EXERCÍCIO 2: CONTADOR REGRESSIVO SIMPLES (WHILE)
  Instruções: Defina uma variável 'contador' com o valor 10.
  O código deve:
  1. Usar um loop 'while' para executar o código enquanto 'contador' for maior ou igual a 0.
  2. Imprimir o valor atual de 'contador' em cada iteração.
  3. Diminuir o valor de 'contador' em 1 a cada volta.
  4. Adicionar uma mensagem especial ("FOGO!") quando o contador chegar a 0.
*/

// let contador = 10

// while (contador >= 0) {
//     if (contador === 0) {
//         console.log("FOGO!");
//     }
 
//     else{
//         console.log(contador);
        
//     }
//     contador--;
// }

/*
  EXERCÍCIO 3: JOGO DE ADIVINHAÇÃO (DO...WHILE)
  Instruções: Defina um 'numeroSecreto'. Simule os 'palpites' do usuário em uma variável.
  O código deve:
  1. Definir o 'numeroSecreto' (ex: 7) e um 'palpite' (ex: 0).
  2. Usar um loop 'do...while' que continue enquanto 'palpite' for diferente de 'numeroSecreto'.
  3. Dentro do loop, simular um novo palpite. (Para o exercício, o aluno pode alterar manualmente 
     o valor de 'palpite' em cada teste, ou usar 'prompt' se for o caso).
  4. Usar 'if/else' dentro do loop para dar dicas ("Muito alto", "Muito baixo").
  5. Quando o loop terminar, imprimir uma mensagem de sucesso.
*/



/*
  EXERCÍCIO 4: TABUADA DE MULTIPLICAÇÃO (FOR)
  Instruções: Defina uma variável 'numeroTabuada' (ex: 5).
  O código deve:
  1. Usar um loop 'for' para iterar de 1 a 10.
  2. Dentro do loop, calcular o produto de 'numeroTabuada' pelo índice atual do loop (i).
  3. Imprimir o resultado no formato: "5 x 3 = 15".
*/