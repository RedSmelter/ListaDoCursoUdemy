function classificarTriangulos(lado1, lado2, lado3){
    if(lado1 === lado2 && lado1 == lado3){
        console.log("Triangulo equilátero")
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log('Triangulo isóceles')
    }else{
        console.log('Triangulo escaleno')
    }
}

classificarTriangulos(17,21,322)
classificarTriangulos(3,3,3)
classificarTriangulos(3,1,3)
classificarTriangulos(1,2,3)