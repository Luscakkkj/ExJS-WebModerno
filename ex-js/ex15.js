function carros(carro) {
	carro =  carro.toLowerCase()

	switch(carro){
		case "hatch":
			return "Compra efetuada com sucesso"
		case "caminhonete" || "moto" || "sedan" :
			return "Tem certeza que não prefere este modelo?"
		default:
			return "Não trabalhamos com este tipo de automóvel aqui"
	}
}

console.log(carros("honda"))