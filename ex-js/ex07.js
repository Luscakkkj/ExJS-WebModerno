function bhaskara(a, b ,c) {
	const delta =  Math.pow(b, 2) - 4 * a * c
	
	if (delta < 0) {
		return "Delta é negativo";
	}

	else{
		let x1 = (-b + Math.sqrt(delta)) / (2 * a)
		let x2 = (-b - Math.sqrt(delta)) / (2 * a)
		return [x1, x2]
	}	
}

console.log(bhaskara(2, 12, -14))