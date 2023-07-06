function calcularMedia(array) {
    
    const soma = array.reduce((initial, value) => {
        return (initial + value)
    })

    return soma / array.length
}

console.log(calcularMedia([1,2,3,4,5]));