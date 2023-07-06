function anuidade(mes, valoranuidade) {
	let total = valoranuidade * Math.pow(1 + (5 / 100), mes)
	return `O total a ser pago do mês é R$ ${total.toFixed(2)}`
}

console.log(anuidade(5, 200))