function calcularnota(codigo, nota1, nota2, nota3){
	let mediapond = (nota1 * 4 + nota2* 3 + nota3 * 3) / (4+3+nota3)
	return `ALUNO ${codigo}º Sua média é ${mediapond.toFixed(2)}`
}

console.log(calcularnota(200, 10, 7, 9))