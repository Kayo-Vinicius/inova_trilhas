var texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
var contador = 0;

for (var i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase() && texto[i] !== ' ') {
        contador++;
    }
}

alert("Número de letras maiúsculas: " + contador);