var salarioBruto, salarioLiquido, impostos=20, desconto

salarioBruto = Number(prompt('Digite seu salário bruto:'))

// Calcular a média de litros bebidos por pessoa
desconto = (salarioBruto*impostos) / 100
salarioLiquido = salarioBruto - desconto
// Exibir o resultado
alert('O salario líquido é de: ' + (salarioLiquido.toFixed(2)) + 'reais.');