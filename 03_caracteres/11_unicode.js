//inicio    
//Um byte (8 bits) - 256 caracteres 
//Simbolos, pontuação, A-Z, a-z, 0-9

//dois bytes (16 bits) - 65500 + caracteres
// +Simbolos, +Pontuação, A-Z, a-z, 0-9 

// UNICODE
// Quantidade de Bytes Variavel - Expansivel
// Suporta mais de 1 milhão de caracteres
// Atualmente tem mais de  100.000 carcteres atribuidos

/** 
 * Tabela Unicode 
 * https://unicode-table.com/pt
*/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))