function contarNumerosIntervalo(vetor) {
  let dentroIntervalo = 0;
  let foraIntervalo = 0;

  for (let i = 0; i < vetor.length; i++) {
    const numero = vetor[i];
    if (numero >= 10 && numero <= 20) {
      dentroIntervalo++;
    } else {
      foraIntervalo++;
    }
  }

  console.log("Números dentro do intervalo entre [10, 20]:", dentroIntervalo);
  console.log("Números fora do intervalo entre [10, 20]:", foraIntervalo);
}
