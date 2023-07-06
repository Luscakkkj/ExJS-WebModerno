function estaentre(numero, minimo, maximo, inclusivo=false) {
    if (inclusivo == true) {
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && numero < maximo
    }
}


console.log(estaentre(10, 10, 100, false));