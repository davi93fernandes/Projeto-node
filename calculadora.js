//FUNÇÕES

function soma(num1,num2){
    const resultadoSoma = num1 + num2
    return resultadoSoma
}



function subtracao(num1, num2){
    const resultadoSubtracao = num1 - num2
    return resultadoSubtracao
}



function multiplicacao(num1, num2){
    const resultadoMultiplicacao = num1 * num2
    return resultadoMultiplicacao
}



function divisao(num1, num2){
    const resultadoDivisao = num1 / num2
    return resultadoDivisao
}


module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}
console.log("TESTE")