// g - Global "Quando não passado ele procura a primeira letra e para mas quando passado ele pegar todas as letras que foram passadas"
// i - ignore case "Ignora maiusculas ou minusculas"
//  | significa ou 

const msg = "Anderson assinou o  abaixo-assinado"

console.log(msg.match(/A|ab/)) // procura A ou ab, retorna apenas um ou outro
console.log(msg.match(/A|ab/g)) // acha ambas pois tem a flag global
console.log(msg.match(/AB|a/gi)) // acha ambas pois tem a flag global e ignore case
