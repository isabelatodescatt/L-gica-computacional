var pessoasPasseio
var tempoPasseio

var metrosCubicosGas = tempoPasseio / 5;
var custoGas = metrosCubicosGas * 15;
var custoTotalPorPessoa = custoGas / pessoasPasseio + 20;
var custoTotalPasseio = custoTotalPorPessoa * pessoasPasseio;


pessoasPasseio = Number(prompt('Digite a quantidade de pessoas irão no passeio: '))
tempoPasseio = Number(prompt('Digite o tempo de passeio: '))

alert("O custo total do passeio para " + pessoasPasseio + " pessoas e " + tempoPasseio + " minutos de voo é de R$" + custoTotalPasseio.toFixed(2));



