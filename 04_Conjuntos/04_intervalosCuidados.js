const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // nao define um range
console.log(texto.match(/[A-z]/g)) // intervalos usam a ordem da tabela UNICODE, por isso veio os "[", "]"

//tem que respeitas a ordem da tabela unicode, a tabela começa de letras grandes para as pequenas, sempre veja a ordem da tabela

//teste invertendo a ordem
console.log(texto.match(/[a-Z]/g)) //vai da erro