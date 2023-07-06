function multiplicacao(a, b) {
    if (a >= 0 && b >= 0) {
        let resultado = 0;

        for (let i = 0; i < b; i++) { resultado += a;}
            
        return resultado;
    } 
    
    else{
        console.log("Os números devem ser inteiros não negativos.");
    }
}


  