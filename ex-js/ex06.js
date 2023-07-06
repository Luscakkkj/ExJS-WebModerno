function montantesimples(capital, taxa, tempo){
	let juros =  (capital * taxa * tempo ) / 100
	let montante =  capital + juros
	return montante
}

function montantecomposto(capitalInicial, taxaJuros, tempo) {
  let montante = capitalInicial * Math.pow(1 + (taxaJuros / 100), tempo);
  return montante;
}

console.log(montantesimples(1000, 1, 12).toFixed(2))
console.log(montantecomposto(1000, 5, 2).toFixed(2))