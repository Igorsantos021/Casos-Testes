function salario(horas, valor) {

    horas = horas.replace(",", ".");
    valor = valor.replace(".", "");

    valor = valor.replace(",", ".");
    valor = valor.replace("R$ ", "");
    
    resultado = horas * valor

    if(valor > 1000){
        alert("O valor máximo é 1000")
        document.getElementById("valor").value = 1000
        return
    }

    if(horas > 1000){
        alert("A quantidade de horas máxima é 1000")
        document.getElementById("horas").value = 1000
        return
    }

    document.querySelector("#resultado").innerHTML = resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

let bt = document.getElementById("botao")
bt.addEventListener("click", function () {
    salario(document.getElementById("horas").value, document.getElementById("valor").value)
})

$(document).ready(function () {
    $("#valor").maskMoney({
        prefix: "R$ ",
        decimal: ",",
        thousands: "."
    });
});

$(function () {
    $(document).tooltip();
});