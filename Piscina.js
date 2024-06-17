var largura, comprimento, valorTotal, valorCaixaAzulejo, valorTotal, qtdAzulejos, areaPiscina

largura = Number(prompt("Digite a largura da piscina (em metros):"));
comprimento = Number(prompt("Digite o comprimento da piscina (em metros):"));

// Calcula a área da piscina
areaPiscina = largura * comprimento;

// Calcula a quantidade de azulejos necessários
qtdAzulejos = Math.ceil(areaPiscina * 120);

// Calcula o valor total a ser pago
valorCaixaAzulejo = 45.50;
qtdCaixasAzulejo = Math.ceil(qtdAzulejos / 60);
valorTotal = qtdCaixasAzulejo * valorCaixaAzulejo;

// Exibe os resultados
alert(`Tamanho da piscina: ${largura} x ${comprimento} metros\n` + `Área da piscina: ${areaPiscina.toFixed(2)} m²\n` + `Quantidade de azulejos necessários: ${qtdAzulejos}\n` + `Quantidade de caixas de azulejo a serem compradas: ${qtdCaixasAzulejo}\n` + `Valor total a ser pago: R$ ${valorTotal.toFixed(2)}`);