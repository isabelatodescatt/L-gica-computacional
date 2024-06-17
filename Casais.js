var qtdCasais, areaCasais, qtdFemeasSolteiras, qtdMaachosSolteiros, areaSolitarios, areaTotalDominada

qtdCasais = Number(prompt("Digite a quantidade de casais de leões baios:"));

// Calcula a área dominada pelos casais
areaCasais = qtdCasais * 400;

// Calcula a área dominada pelos indivíduos solteiros
qtdFemeasSolteiras = 9 - 2 * qtdCasais;
qtdMaachosSolteiros = 5 - 2 * qtdCasais;
areaSolitarios = (qtdFemeasSolteiras * 320) + (qtdMaachosSolteiros * 320);

// Calcula a área total dominada
areaTotalDominada = areaCasais + areaSolitarios;

// Exibe o resultado
alert(`A área total dominada pelos leões baios é de ${areaTotalDominada}km².`);