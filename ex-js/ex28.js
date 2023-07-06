function ParesEImpares(vetor) {
  let pares = 0;
  let impares = 0;  

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
      pares++;
    } 

    else {
      impares++;
    }
  }

  console.log(`Quantidade de números pares: ${pares}`);
  console.log(`Quantidade de números ímpares: ${impares}`);
}