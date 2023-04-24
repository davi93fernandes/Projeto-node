//IMPORTANDO


const { soma, multiplicacao, divisao, subtracao } = require("./calculadora")

const numero01 = 5
const numero02 = 2


const retSoma = soma(numero01,numero02)
const retSubtracao = subtracao(numero01,numero02)
const retMultiplicacao = multiplicacao(numero01,numero02)
const retDivisao = divisao(numero01,numero02)


console.log(`RESULTADO SOMA: ${retSoma}`)
console.log(`RESULTADO SUBTRAÇÃO: ${retSubtracao}`)
console.log(`RESULTADO MULTIPLICACAO: ${retMultiplicacao}`)
console.log(`RESULTADO DIVISÃO: ${retDivisao}`)
