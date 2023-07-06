function multiVetor(vetor, numero) {
	let vetormult = []
	
	for(let i = 0; i < vetor.length; i++){
		vetormult.push(vetor[i] * numero) 
	}
	return vetormult
}


function multVetorMaiorQueCinco(vetor, numero){
	let vetormult = []
	
	for(let i =0; i <= vetor.length; i++){
		
		if (vetor[i] > 5) {
			vetormult.push(vetor[i] * numero) 
		}

		else{
			vetormult.push(vetor[i])
		}
	}

	return vetormult
}

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(multiVetor(vetor, 2))
