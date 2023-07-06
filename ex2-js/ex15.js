function recebeParesdeIndicesPares(array) {
    return array.filter((values, index) => {
        return values % 2 == 0 && index % 2 == 0
    })
}

console.log(recebeParesdeIndicesPares([10, 70, 22, 43]));