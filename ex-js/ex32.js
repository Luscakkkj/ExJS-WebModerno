function mediavetor(vetor) {
	let soma = 0
	for(let i = 0; i < vetor.length; i++){
		soma+=vetor[i]
	}

	let media = soma / vetor.length 

	console.log("Média = "+ media)
}

const vetor = [10, 10, 10, 9]

mediavetor(vetor)