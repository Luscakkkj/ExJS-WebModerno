function somarNumeros(array) {
    return array.reduce((acumulador, valores) => {
        return acumulador + valores
    })
}

console.log(somarNumeros([1, 10]));