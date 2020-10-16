const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir uma quantificador usa {}
console.log(texto.match(/\d{1,2}/g)) //pega todos  os numeros, com 1 digito, 2 digito 

console.log(texto.match(/[0-9]{2}/g)) //pega todos  os numeros, com 2 digitos 
console.log(texto.match(/\d{1,}/g))//pega todos  os numeros, com 1 digito ou mais 

console.log(texto.match(/\w{7}/g)) //pega grupos de caracteres com 7 digitos, não pega milhões por causa do acento
console.log(texto.match(/[\wõã]{7,}/g)) //pegando milhoes, 7 digitos ou mais

// no futuro...
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))