var numero = 12;

function calculaFatorial(numero) {
    var resultado = 1;
    
    for (var i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

var fatorial = calculaFatorial(numero);
alert("O fatorial de " + numero + " é " + fatorial);