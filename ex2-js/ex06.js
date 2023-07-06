function inverso(dado) {
    if (typeof dado == 'boolean') {
        return !dado
    }
    else if(typeof dado == 'number'){
        return -dado
    }
    else{
        return "Número ou booleano esperado, mas o dado é do tipo string"
    }
}

console.log(inverso(true))