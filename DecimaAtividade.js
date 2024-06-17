var idadeMaxima 
var ciclosReprodutivos = Math.floor(idadeMaxima / 4);
var totalFilhotes = ciclosReprodutivos;
var mediaFilhotesPorDecada = totalFilhotes / (idadeMaxima / 10);

idadeMaxima = Number(prompt("Digite a idade máxima da baleia em anos: "));


alert("Uma baleia-da-Groenlândia de " + idadeMaxima + " anos pode ter um total de " + totalFilhotes + " filhotes.");
alert("A média de filhotes por década é de " + mediaFilhotesPorDecada.toFixed(2) + ".");
