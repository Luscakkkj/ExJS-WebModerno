function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter((palavra) => {palavra.includes(inicio)})
}