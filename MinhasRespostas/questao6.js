function jurosSimples(CapitalInicial, taxaDeJuros, tempo){
    j = CapitalInicial +(CapitalInicial*taxaDeJuros*tempo)

    return j
}

function jurosCompostos(CapitalInicial, taxaDeJuros, tempo){
    jc = CapitalInicial* (1 + taxaDeJuros) ** tempo
    return jc
}

console.log(jurosSimples(100,10/100,2))
console.log(jurosCompostos(100,10/100,2))