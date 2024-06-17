var eleitores, votosX, votosY, votoBrancos, votosNulos  

eleitores = Number(prompt('Digite o total de eleitores:'))
votosX = Number(prompt('Digite o total de votos em X:'))
votosY = Number(prompt('Digite o total de votos em Y:'))
votoBrancos = Number(prompt('Digite o total de votos em branco:'))
votosNulos = Number(prompt('Digite o total de votos em X:'))

alert('A porcentagem de votos para X é de:' + (votosX/eleitores*100) + '%; votos de Y: ' + (votosY/eleitores*100) + '% ; votos em branco: ' + (votoBrancos/eleitores*100) + '% ; votos nulos: ' + (votosNulos/eleitores*100) + '%')