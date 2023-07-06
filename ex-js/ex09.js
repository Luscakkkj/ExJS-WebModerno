function classificarNota(nota) {
  if (nota < 38) {
    return "Reprovado";
  }

  let proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
  let diferenca = proximoMultiploDe5 - nota;

  if (diferenca < 3) {
    return proximoMultiploDe5;
  } 

  else {
    return nota;
  }
}

console.log(classificarNota(84))