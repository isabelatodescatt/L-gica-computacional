var distanciaPercorrida, tempoDuracao, velocidadeMedia

distanciaPercorrida = Number(prompt("Digite a distância percorrida na trilha (em km):"));
tempoDuracao = Number(prompt("Digite o tempo de duração da trilha (em horas):"));

// Calcula a velocidade média
velocidadeMedia = distanciaPercorrida / tempoDuracao;

// Exibe o resultado
alert(`Sua média de velocidade durante essa trilha foi de ${velocidadeMedia.toFixed(2)} km/h.`);