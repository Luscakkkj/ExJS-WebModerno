function funcaoDaSorte(numero) {
    let random = Math.floor(Math.random() * 11)
    
    if (numero == random) {
        return `Parabéns, o número sorteado foi ${numero}`
    }
    else{
        return `Que pena! O número sorteado foi ${random} `
    }
}

console.log(funcaoDaSorte(10));