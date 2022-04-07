function verificarMulta() {
    // cria uma referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outSituacao");

    // obtém conteúdo do campo de entrada
    var valor = Number(inValor.value);

    // se não preencheu ou Not-a-Number (NaN)
    if (inValor.value == 0 || isNaN(valor)) {
        // exibe mensagem de advertência
        alert("Informe um valor válido de moedas");
        // posiciona no campo de edição inVelPermitida
        inValor.focus();
        return;
    }

    // caso valor insuficiente
    if (valor < 1.00) {
        alert("Valor Insuficiente (no mínimo, R$ 1.00)");
        inValor.focus();
        return;
    }

    // declara variáveis
    var tempo;
    var troco;

    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 30;
        troco = valor - 1.00;
    }

    outTempo.textContent = "Tempo: " + tempo + "min";
    if (troco > 0) {
        ouTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }
}

var btnConfirmar = document.getElementById("btnConfirmar");
btnConfirmar.addEventListener("click", verificarMulta);
