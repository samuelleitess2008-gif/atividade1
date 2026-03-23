function calcularValor() {

var inValor = document.getElementById("inValor")
var inTempo = document.getElementById("inTempo")
var outValor = document.getElementById("outValor")

var valor = Number(inValor.value)
var tempo = Number(inTempo.value)

var calcular = Math.ceil(tempo / 15)
var tudo = calcular * valor

outValor.textContent = "Valor a Pagar R$: " + tudo.toFixed(2)
}

var mostrar = document.getElementById("mostrar")
mostrar.addEventListener("click", calcularValor)

alert("ola")