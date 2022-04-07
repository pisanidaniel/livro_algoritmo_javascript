function verificarLados() {
    // cria referência aos elementos da página
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");

    // obtém conteúdo dos campos de entrada
    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    // verifica se o valor é nulo
    if (inladoA.value == "" || isNaN(ladoA) ||
        inladoB.value == "" || isNaN(ladoB) ||
        inladoC.value == "" || isNaN(ladoC)) {
        // exibe mensagem de advertência
        alert("Informe um valor válido!");
        // posiciona no campo de edição inLadoA
        inladoA.focus();
        return;
    }

    if 





}
