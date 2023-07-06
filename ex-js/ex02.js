function triangulo (lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero";
  }
  
  else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles";
  } 

  else {
    return "Escaleno";
  }
}

console.log(triangulo(5,2,1))