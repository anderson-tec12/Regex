 const texto = '.$+*?-'

 console.log(texto.match(/[+.?*$]/g)) // Dentro de um conjunto os metacaracteres se torna caracteres simples "literais"
 console.log(texto.match(/[+.?*$]./g))
 

 console.log(texto.match(/[$-?]/g)) // o - vai ser uma meta caractere, vai pegar de tanto a tanto, ísso  é um intervalo "range"

//  não é um intervalor os exemplos com - abaixo
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

//caracteres que podem preisar de um scape dentro de um conjunto: - [] ^