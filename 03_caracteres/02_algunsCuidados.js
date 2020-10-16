const textoEmUmaLinha = '.....' // aspas simples ou duplas
const textoMultiLInha = ` 
    linha1
    linha2
` // usamos a crazi

//Cuidado com o tab

console.log(''.match(/\s/g)) //string vazia
console.log('   '.match(/\s/g)) //string com tab retorna 3 espaços
