function frutas(fruta){
	fruta = fruta.toLowerCase()
	
	switch(fruta){
		case "maça":
			return "Não vendemos essa fruta"
		case "kiwi":
			return "Estamos com escassez de kiwis"
		case "melancia":
			return "Aqui está, 3 reais o quilo"
		default:
			console.log("Erro, Fruta não identificada")
	}
}

console.log(frutas("Kiwi"))