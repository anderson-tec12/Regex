const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÃO gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g)) //por padrão pega todo oconteudo, ou seja as duas  divs
console.log(texto.match(/<div>.*<\/div>/g)) //por padrão pega todo oconteudo, ou seja as duas  divs
console.log(texto.match(/<div>.{0,100}<\/div>/g)) //por padrão pega todo oconteudo, ou seja as duas  divs

// quantificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g)) // ? apos o quantificados faz ele trabalhar em modo lazy ou seja não guloso
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))