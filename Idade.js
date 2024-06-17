var nascimento, anoAtual

nascimento = Number(prompt('Digite o ano de seu nascimento no formato (YYYY):'))
anoAtual = Number(prompt('Digite o ano atual no formato (YYYY):'))

alert('Sua idade é ' + (anoAtual-nascimento) + ' anos, contendo ' + ((anoAtual-nascimento)*12) + ' meses, sendo ' + ((anoAtual-nascimento)*52) + ' semanas, assim, ' + ((anoAtual-nascimento)*365)+ ' dias. ' )