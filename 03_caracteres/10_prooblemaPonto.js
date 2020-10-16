const texto = "bom\ndia" // /n é uma quebra de linha
console.log(texto.match(/./gi)) //tras as letras mas o /n não veio ]
console.log(texto.match(/..../gi)) //na~ovai trazer nada pq o . não resolve o /n 