var plastico, papel, metal

plastico = Number(prompt('Digite a quantidade de plástico em quilogramas (kg):'))
papel = Number(prompt('Digite a quantidade de papel em quilogramas (kg):'))
metal = Number(prompt('Digite a quantidade de metal em quilogramas (kg):'))

var rendaPlastico  = plastico / 10 * 2;
var rendaPlastico  = papel / 30 * 3;
var rendaMetal  = metal / 50 * 5;

var totalRecebido = rendaPlastico + rendaPapel + rendaMetal;

alert(`O total a ser recebido é: R$ ${totalRecebido.toFixed(2)}`);