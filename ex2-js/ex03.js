function calcularSalarios(horastrabalhadas, salarioporhora) {
    let salariomensal =  salarioporhora * horastrabalhadas
    return "Salário igual a R$"+salariomensal
}

console.log(calcularSalarios(150, 40.5));