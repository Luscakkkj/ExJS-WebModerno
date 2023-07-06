function planodesaude(idade) {
	if (idade < 10){
		return `Valor do convênio R$${100+80}`
	}

	else if( idade >= 10 && idade <= 30){
		return `Valor do convênio R$${100+50}`
	}

	else if (idade > 30 && idade <=60){
		return `Valor do convênio R$${100+95}`
	}

	else{
		return `Valor do convênio R$${100+130}`
	}
}


console.log(planodesaude(6))