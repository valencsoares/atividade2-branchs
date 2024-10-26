const Somar = function () {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let saida = document.getElementById("saida")

    let soma = num1 + num2
    saida.innerHTML = soma
}