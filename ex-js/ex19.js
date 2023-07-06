function cardapio(codigo, quantidade){
	switch(codigo){
		case 100:
			return 3.00 * quantidade
		case 200:
			return 4.00 * quantidade
		case 300:
			return 5.50 * quantidade
		case 400:
			return 7.500 * quantidade
		case 500:
			return 3.50 * quantidade
		case 600:
			return 2.80 * quantidade
		default:
			return "Produto não existente no cardápio"
	}
}

console.log("Valor total: R$"+cardapio(200, 5))