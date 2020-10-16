const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: OGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional)
const regex = /f?ogo?/gi //o ? é colcoado atras do caracter que pode ser opciomal  (zero ou um )
console.log(texto1.match(regex))
console.log(texto2.match(regex))