const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9') //função do javascript para cria uma regex
console.log('Metodos da RegExp...')
console.log(regexNove.test(texto)) // metodo test returno true ou false
console.log(regexNove.exec(texto)) // executa a expressão e retorna o valor procurado 


const regexLetras = /[a-f]/g
console.log('Metodos da String...')
console.log(texto.match(regexLetras)) // retorna somente as letras 
console.log(texto.search(regexLetras)) //retorna o valor do indice em que encontrou a primeira letra
console.log(texto.replace(regexLetras, 'Achei')) // substitui o valor achado peor um novo valor
console.log(texto.split(regexLetras)) //faz corte de acordo com a regez

