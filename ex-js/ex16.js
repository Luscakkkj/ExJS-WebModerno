function operacao(num1, num2, operador) {
	switch(operador){
		case "+":
			return num1 + num2
		case "-":
			return num1 - num2
		case "*":
			return num1 * num2
		case "/":
			return num1 / num2
		default:
			return "Operação Invalida"
	}
}


console.log(operacao(1,2, "+"))