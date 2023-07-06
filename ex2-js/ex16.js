function checaranobissexto(ano) {
    if (ano % 4 == 0  && ano % 100 != 0 && ano % 400 == 0) {
        return true, "É um ano Bissexto"
    }
    
    else{
        return false, "Não é um ano bissexto"
    }
}

console.log(checaranobissexto(2100));