function calcularPromocao() {
    let inMedicamento = document.getElementById("inMedicamento")
    let inPreco = document.getElementById("inPreco")
    let outMedicamento = document.getElementById("outMedicamento")
    let outPromocao = document.getElementById("outPromocao")

let medicamento = inMedicamento.value
let preco = Number(inPreco.value)

let multiplicacaoValor = preco*2
let promocao = multiplicacaoValor % 1
let valorFinal = multiplicacaoValor-promocao

outMedicamento.textContent = "Promoção de" + medicamento
outPromocao.textContent = "Leve 2 por apenas R$ " + valorFinal.toFixed(2)
}

let btMostrar = document.getElementById("mostrar")
btMostrar.addEventListener("click", calcularPromocao)
alert('oolaaaaaa')
