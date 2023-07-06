function inteirosENegativos(vetor) {
	let positivo = 0;
	let negativo = 0;

	for(let i= 0; i < vetor.length; i++){
		if (vetor[i] < 0) {
			negativo++
		}
		else{
			positivo++
		}
	}

	console.log("QUANTIDADE DE VALORES POSITIVOS "+ positivo)
	console.log("QUANTIDADE DE VALORES NEGATIVO "+ negativo)

}

const numeros = [5, 9, -3, 1, 7, 2];
inteirosENegativos(numeros)