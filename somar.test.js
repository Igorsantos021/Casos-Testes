





const somar = require("./somar")

test ('somar 1 + 2 é igual a 3', ()=>{
    expect(somar(1,2)).toBe(3)
})

test ('soma de dois numeros inteiros positivos, 3 + 5 = 8', ()=>{
    expect(somar(3,5)).toBe(8)
})

test ('Soma de dois números negativos, (-3) + (-5) = -8', ()=>{
    expect(somar(-3,-5)).toBe(-8)
})

test ('Soma de um número positivo e um número negativo, 7 + -2 = 5', ()=>{
    expect(somar(7,-2)).toBe(5)
})

test ('Soma de zero com outro número, 0 + 9 = 9', ()=>{
    expect(somar(0,9)).toBe(9)
})

test ('Soma de dois números decimais, 2.5 + 3.1 = 5.6', ()=>{
    expect(somar(2.5,3.1)).toBe(5.6)
})

test('Soma de um número inteiro e um número decimal, 4 + 2.5 = 6.5', ()=>{
    expect(somar(4,2.5)).toBe(6.5)
})

test('Entrada invalida, favor reconferir dados inseridos',()=>{
    expect(somar("a",3)).toBe('Caractere invalido')
})

test('Soma de dois grandes numeros, somar 999999999 + 999999999 = 1999999998',()=>{
    expect(somar(999999999,999999999)).toBe(1999999998)
})