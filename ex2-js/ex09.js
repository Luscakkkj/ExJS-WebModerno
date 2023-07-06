function repetir(valor, numdevezes) {
    let array = []
    for (let i = 0; i<=numdevezes-1; i++) {
        array.push(valor)
    }

    return array
}

console.log(repetir(2, 7));