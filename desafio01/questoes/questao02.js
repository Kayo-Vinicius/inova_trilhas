numeros = [15, 8, 90, 75, 102, 6, 2];

function ordenaFrascos(numeros) {
    var maiorNumero = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    return maiorNumero;
}

function menorNumero(numeros) {
    var menorNumero = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    return menorNumero;
}

var frascosOrdenados = ordenaFrascos(numeros);
var menor = menorNumero(numeros);
alert("O maior número é: " + frascosOrdenados + "\nO menor número é: " + menor);