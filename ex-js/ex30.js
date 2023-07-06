function encontrarMaiorMenor(vetor) {
  if (vetor.length === 0) {
    console.log("O vetor está vazio.");
    return;
  }

  let maior = vetor[0];
  let menor = vetor[0];

  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
    }
    
    if (vetor[i] < menor) {
      menor = vetor[i];
    }
  }

  console.log("Maior valor: " + maior);
  console.log("Menor valor: " + menor);
}

// Exemplo de uso:
const numeros = [5, 9, 3, 1, 7, 2];
encontrarMaiorMenor(numeros);
