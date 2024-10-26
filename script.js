const Somar = function () {
    let num1 = document.getElementById("sum1").value
    let num2 = document.getElementById("sum2").value
    let saida = document.getElementById("saida")

    let soma = parseFloat(num1) + parseFloat(num2)
    saida.innerHTML = soma
}