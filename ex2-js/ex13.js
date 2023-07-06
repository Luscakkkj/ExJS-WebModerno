function filtrarnumeros(array) {
   return array.filter((values) => {
        return typeof values == "number"
    })
}


const valores = ["olá", 12, 13, "lucas"]
console.log(filtrarnumeros(valores));