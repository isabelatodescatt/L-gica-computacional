var notaAtividadeIndividual, pesoAtividadeIndividual, notaSeminarioEmEquipe, pesoSeminarioEmEquipe, notaProjetoFinal, pesoProjetoFinal, mediaPonderada

notaAtividadeIndividual = Number(prompt("Digite a nota da Atividade Individual:"));
pesoAtividadeIndividual = Number(prompt("Digite o peso da Atividade Individual:"));

notaSeminarioEmEquipe = Number(prompt("Digite a nota do Seminário em Equipe:"));
pesoSeminarioEmEquipe = Number(prompt("Digite o peso do Seminário em Equipe:"));

notaProjetoFinal = Number(prompt("Digite a nota do Projeto Final:"));
pesoProjetoFinal = Number(prompt("Digite o peso do Projeto Final:"));

// Calcula a média ponderada
mediaPonderada = ((notaAtividadeIndividual * pesoAtividadeIndividual) + (notaSeminarioEmEquipe * pesoSeminarioEmEquipe) + (notaProjetoFinal * pesoProjetoFinal)) / (pesoAtividadeIndividual + pesoSeminarioEmEquipe + pesoProjetoFinal);

// Exibe o resultado
alert(`Sua média ponderada é: ${mediaPonderada.toFixed(2)}`);