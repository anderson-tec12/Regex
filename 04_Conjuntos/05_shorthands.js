// Atalhos para usar nos intervalos
const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

console.log(texto.match(/\d/g)) //tras somente os numeros [0-9]
console.log(texto.match(/\D/g)) //pega os não numeros [^0-9]

console.log(texto.match(/\w/g)) //pega os caracteres  correspondente ao [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) //pega os não caracteres  correspondente ao [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) //pega os espaços embranco [ \t\n\r\f] 

console.log(texto.match(/\S/g)) // pega os não espaço [^ \t\n\r\f]  