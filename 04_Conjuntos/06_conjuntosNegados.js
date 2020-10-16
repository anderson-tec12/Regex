const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g)) //pegando os não numeros
console.log(texto.match(/[^0-9]/g)) //pegando os não numeros
console.log(texto.match(/[^\d!\?\[\s,\.]/g))//tras as letras

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g)) //retorna somente os numeros