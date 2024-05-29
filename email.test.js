/* foo.bar@gmail.com         true
foo.bar@gmail.com.br      true
foo.bar@gmail.com.br.br   false
foo.bar@gmail.            false
foo.bar@gmailcom          false
foo.bargmail.com          false
@gmail.com                  false */

const ValidarEmail = require("./email")

//12
test('Validação de email foo.bar@gmail.com', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com")).toBe(true)
})

//13
test('Validação de email foo.bar@gmail.com.br', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br")).toBe(true)
})

//14
test('Validação de email ffoo.bar@gmail.com.br.br', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br.br")).toBe(false)
})

//15
test('Validação de email foo.bar@gmail.', ()=>{
    expect(ValidarEmail("foo.bar@gmail.")).toBe(false)
})

//16
test('Validação de email foo.bar@gmailcom ', ()=>{
    expect(ValidarEmail("foo.bar@gmailcom")).toBe(false)
})

//17
test('Validação de email foo.bargmail.com', ()=>{
    expect(ValidarEmail("foo.bargmail.com")).toBe(false)
})


//18
test('Validação de email @gmail.com', ()=>{
    expect(ValidarEmail("@gmail.com")).toBe(false)
})