function receberPrimeiroeUltimoElemento(array) {
    return [array[0], array[array.length-1]]
}

const array =  [1,2,6,7,34,763,2,8,23]

console.log(receberPrimeiroeUltimoElemento(array));