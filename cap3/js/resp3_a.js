function calcularNumero(){
    // cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    // Recebe os número
    var numero = inNumero.value;

    

    if (numero == 0 || isNaN(numero)) {
        // exibe mensagem de advertência
        alert("Informe um número válido");
        // posiciona no campo de edição inNumero
        inNumero.focus();
        return;
      }

    if (numero % 2 == 0){
        outResposta.textContent = "O número é Par";
    } else {
        outResposta.textContent = "O número é Impar";
    }

}

var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularNumero);
