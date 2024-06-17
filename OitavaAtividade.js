var qntdPessoas
var cafe
var diaria

qntdPessoas = Number(prompt('Digite a quantidade de pessoas: '))
diaria = Number(prompt('Digite quantos dias será a estadia: '))
cafe = Number(prompt('Digite a quantidade de pessoas que optou por café diário: '))

alert('O total de pessoas é: ' + qntdPessoas + ' , o número de diárias é: ' + diaria + ' e ' + cafe + ' irão querer café.' + 'Totalizando: ' + ((diaria*280)+cafe*15) + 'reais')
