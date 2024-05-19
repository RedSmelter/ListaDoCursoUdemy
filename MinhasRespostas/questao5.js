function formatarValor(soma){
    valorEmReais = console.log(`R$ ${soma.toFixed(2).toString().replace('.',',')}`)
    return valorEmReais
}

formatarValor(0.1+0.2)
