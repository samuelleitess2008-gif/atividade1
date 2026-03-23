
function calcularPromocao(){
    let inProduto = document.getElementById("inProduto")
    let inPreco = document.getElementById("inPreco")
    let outProduto = document.getElementById("outProduto")
    let outPromocao = document.getElementById("outPromocao")

    let produto = inProduto.value
    let preco = Number(inPreco.value)

    let desconto = preco / 2
    let total = preco * 2 + desconto

    outProduto.textContent = produto + " - Promoção: Leve 3 por R$"
    outPromocao.textContent = "O 3º produto apenas R$ " + desconto.toFixed(2)
}

let btMostrar = document.getElementById("mostrar")
btMostrar.addEventListener("click", calcularPromocao)