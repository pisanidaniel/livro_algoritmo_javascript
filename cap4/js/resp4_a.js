function repetirFruta() {
    // cria referência aos elementos html manipulados pela function
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var fruta = inFruta.value;
    var num = Number(inNumero.value); // obtém conteúdo do campo inNumero

    if (fruta == "" || num == 0 || isNaN(num)) {
        alert("Informe corretamente os dados");
        inFruta.focus();
        return;
      }

    var resposta = "";

    for (var i = 1; i < num; i++) {

        resposta = resposta + fruta + " * ";

    }
    // isola a última fruta, para não exibir * no final
    resposta = resposta + fruta;

outResposta.textContent = resposta;


}

var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);

