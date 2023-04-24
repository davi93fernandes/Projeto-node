const { soma, multiplicacao, divisao, subtracao } = require("./calculadora")

it("Deve receber 10 e 10  e retornar o resultado de soma", () => {

    //Given - Dado que(Configuração)
const num01 = 10
const num02 = 10
    //When - Quando (o que tu quer testar)
const result = soma(num01,num02) 
    // Then / Então acontecerá isto
expect(result).toBe(20)
})

it("Deve receber 10 e 5  e retornar o resultado da subtração", () => {

    //Given - Dado que(Configuração)
const num01 = 10
const num02 = 5
    //When - Quando (o que tu quer testar)
const result = subtracao(num01,num02) 
    // Then / Então acontecerá isto
expect(result).toBe(5)
})

it("Deve receber 10 e 10  e retornar o resultado de multiplicacao", () => {

    //Given - Dado que(Configuração)
const num01 = 10
const num02 = 10
    //When - Quando (o que tu quer testar)
const result = multiplicacao(num01,num02) 
    // Then / Então acontecerá isto
expect(result).toBe(100)
})

it("Deve receber 8 e 4  e retornar o resultado de divisao", () => {

    //Given - Dado que(Configuração)
const num01 = 8
const num02 = 4
    //When - Quando (o que tu quer testar)
const result = divisao(num01,num02) 
    // Then / Então acontecerá isto
expect(result).toBe(2)
})

