function inicioefim(inicio = 0, fim = 100){
	if (inicio>fim) {
		return "O primeiro parâmetro está maior que o segundo"
	}
	
	else{
		for(let i= inicio; i < fim; i++){
			if (inicio % 2 != 0) {
				return inicio
			}
		}
	}
}

console.log(inicioefim())