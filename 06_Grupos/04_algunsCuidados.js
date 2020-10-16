const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi)) // não é um grupo, não existe grupo dentro de um conjunto
console.log(texto.match(/([abc])/gi)) // isso sim é um grupo
console.log(texto.match(/(abc)+/gi)) // tambem é uma grupo