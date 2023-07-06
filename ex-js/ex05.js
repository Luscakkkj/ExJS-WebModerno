function formatavalor(valor){
	let novo_valor = valor.toString().replace(".", ",").substring(0,4)
	return "R$"+novo_valor
}

console.log(formatavalor(0.30000000000000004))