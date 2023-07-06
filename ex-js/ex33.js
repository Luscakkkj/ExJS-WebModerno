let inteiro = [1, 4, 6, 7]
let string = ["Olá", "Oi", "Eae", "Show"]
let double = [1.90, 2.45, 3.66, 4.56]

console.log(inteiro.concat(string, double))

for (int in inteiro){
	let concat = inteiro.concat(string+" ").concat(double)
	console.log(concat)
}
