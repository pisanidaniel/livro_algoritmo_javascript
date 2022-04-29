function calcularChinchilas() {
    // cria referência aos elementos da página
    var inChinchilas = document.getElementById("inChinchilas");
    var inAnos = document.getElementById("inAnos");
    var outResposta = document.getElementById("outResposta");

    // converte o conteúdo do campo inAnos
    var chinchilas = Number(inChinchilas.value);
    var anos = Number(inAnos.value);


    // valida o número
    if (chinchilas <= 1 || isNaN(chinchilas)) {
        alert("Informe um número válido de chinchilas");
        inChinchilas.focus();
        return;
    }

    if (anos == 0 || isNaN(anos)) {
        alert("Informe um número válido de anos");
        inChinchilas.focus();
        return;
    }

    var resultado = "";

    for (var i = 1; i <= anos; i++) {

        resultado = resultado + i + 'º' + ' ano' + '\n';

    }
       
    outResposta.textContent = resultado;
}

// cria referência ao botão e após associa function ao evento click
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularChinchilas);