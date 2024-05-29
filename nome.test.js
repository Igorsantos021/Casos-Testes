// require do arquivo

const ValidarNome = require("./nome")


// criar o caso de teste 

test('Validação de nome com letras', ()=>{
    expect(ValidarNome("João")).toBe(true)
})


test('Validação de nome com Numero', ()=>{
    expect(ValidarNome("João1")).toBe(false)
})