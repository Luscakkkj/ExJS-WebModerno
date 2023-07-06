function aumentosalario (salarioatual, plano){
	plano = plano.toLowerCase()
	switch(plano){
		case "a":
			return salarioatual + (salarioatual * 10/100)
		case "b":
			return salarioatual + (salarioatual * 15/100)
		case "c":
			return salarioatual + (salarioatual * 20/100)
	}
}


console.log("Novo Salário: R$"+aumentosalario(3000, 'c'))