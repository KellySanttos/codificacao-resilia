
var escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
    evento.preventDefault();

    var chave = document.getElementById("offset");

    if (evento.target.value == "2") {
        chave.style.display = "flex";

    } else {
        chave.style.display = "none";
    }
});



let codificar = document.querySelector("#cifrar");

codificar.addEventListener("click", function (evento) {
    evento.preventDefault();

    let texto = document.querySelector("#texto");
    let seleciona = document.querySelector("#cifras");
    let numeroIncremento = document.querySelector("#offset");
    let mensagemFinal = "";

    if (seleciona.value == "2") {
        mensagemFinal = cesar(texto.value, numeroIncremento.value);
    } else {
        mensagemFinal = btoa(texto.value);
    }

    let resultadoTexto = document.getElementById("final");
    resultadoTexto.innerHTML = `${mensagemFinal}`;
});


let decodificar = document.querySelector("#decifrar");

decodificar.addEventListener("click", function (evento) {
    evento.preventDefault();

    let texto = document.querySelector("#texto");
    let seleciona = document.querySelector("#escolha");
    let numeroIncremento = document.querySelector("#offset");
    let mensagemFinal = "";

    if (seleciona.value == "CifraDeCesar") {
        mensagemFinal = cesar(texto.value, numeroIncremento.value);
    } else {
        mensagemFinal = base64(texto.value);
    }

    let resultadoTexto = document.getElementById("final");
    resultadoTexto.innerHTML = `${mensagemFinal}`;
});


//Cifra de César//
function cesar(texto, numeroIncremento) {
    numeroIncremento = Number(numeroIncremento);

    var mensagemFinal = "";

    for (var i = 0; i < texto.length; i++) {
        var recebeAscii = texto[i].charCodeAt();

        if (recebeAscii >= 97 && recebeAscii <= 122) {
           let calcula = recebeAscii + numeroIncremento
           if (calcula > 122){
              calcula = 96 + calcula -122
           }
            mensagemFinal += String.fromCharCode(calcula)
    }
   }
   return mensagemFinal;
}

//Base64//
function base64(texto) {
    return btoa(texto)
}

