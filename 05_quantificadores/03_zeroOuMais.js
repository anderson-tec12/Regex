const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais 
const regex = /fogo*/gi // o * é colcoado atras do caracter, 0 ou mais   
console.log(texto1.match(regex))
console.log(texto2.match(regex))