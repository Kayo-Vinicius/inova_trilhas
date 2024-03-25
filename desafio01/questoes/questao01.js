var nota1 = 8;
var nota2 = 9;
var nota3 = 7;

function maiorNumero(nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) / 3;
    return media;
}

var mediaAline = maiorNumero(nota1, nota2, nota3);
alert("A média final de Aline é: " + mediaAline);