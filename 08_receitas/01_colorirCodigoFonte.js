//metodo para aplicar a cor recebe(texto, regex e cor) cada texto capiturado vai receber uma span, span esta dentro de um grupo pois estamos usando um retroviso $1
const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i //pegando so o texto que esta dentro da tag code
let codigo = texto.match(codeRegex)[0]

// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178') //aprovado e reprovado

// palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf') //palavras reservadas da linguaguem

// tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2') // pega os tipos

// comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703') //comentarios de multiplas linhas

// comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703') //comentario de unica linha

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)