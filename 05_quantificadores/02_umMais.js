const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais 
const regex = /fogo+/gi //o + é colcoado atras do caracter, deve ter um 0 ou mais   (um ou mais )
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os numeros: 0123456789.'

console.log(texto3.match(/[0-9]/g)) // pega todos os numeros e rotorna em um array cada numero separado
console.log(texto3.match(/[0-9]+/g))// pega todos os numeros porem colcoa todos os numeros em um unico indice do array


//Outra maneira
console.log(texto3.match(/\d/g)) // pega todos os numeros e rotorna em um array cada numero separado
console.log(texto3.match(/\d+/g))// pega todos os numeros porem colcoa todos os numeros em um unico indice do array