function manipulacoesMatematicas(a,b){

    this.soma = function(a,b){
        c = a + b
        return c
    }

    this.subtracao = function(primeiroNumero,segundoNumero){
        resultadoSubtracao = primeiroNumero - segundoNumero
        return resultadoSubtracao
    }

}

const notas = new manipulacoesMatematicas

console.log(notas.soma(10,20))
console.log(notas.subtracao(30,15))

function manipuladosDiretamente(num1, num2){
    soma = num1 + num2
    subtracao = num1 - num2
    multiplicacao = num1 * num2
    divisao = num1/num2

    return console.log(`Soma: ${soma} Subtração: ${subtracao} Multiplicação: ${multiplicacao} Divisão: ${divisao}`)

}

manipuladosDiretamente(10,20)
