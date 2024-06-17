var totalChopp, choppDesperdicado, choppSobrou, choppConsumido, pessoasConvidadas, mediaLitrosBebidos

totalChopp = Number(prompt('Digite a quantidade total de chopp (em litros):'));
choppDesperdicado = Number(prompt('Digite a quantidade de chopp desperdiçado (em litros):'));
choppSobrou = Number(prompt('Digite a quantidade de chopp que sobrou (em litros):'));

// Calcular a quantidade de chopp efetivamente consumido
choppConsumido = totalChopp - choppDesperdicado - choppSobrou;

// Calcular a média de litros bebidos por pessoa
pessoasConvidadas = 45;
mediaLitrosBebidos = choppConsumido / pessoasConvidadas;

// Exibir o resultado
alert(`A média de litros bebidos por pessoa na festa foi de ${mediaLitrosBebidos.toFixed(2)} litros.`);