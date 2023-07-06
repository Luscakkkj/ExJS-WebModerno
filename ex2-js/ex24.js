function contarCaractere(carac, string) {
    let contador = 0;
  
    for (let i in string) {
      if (string.charAt(i) === carac) {
        contador++;
      }
    }
  
    return contador;
}

console.log(contarCaractere("r", "O rato roeu a roupa do rei de roma"));