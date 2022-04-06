function confirmaDeposito() {
    // cria uma referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outSituacao = document.getElementById("outSituacao");

    // 
    var valor = Number(inValor.value);

    // se não preencheu ou Not-a-Number (NaN)
    if (inValor.value == "" || isNaN(valor) ||
        inValor.value == "" || isNaN(valor)) {
        // exibe mensagem de advertência
        alert("Informe as velocidades corretamente...");
        // posiciona no campo de edição inVelPermitida
        inValor.focus();
        return;
    }
    
    // cria as condições para verificar situação do condutor
    if (inValor == 1.00)





}