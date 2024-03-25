numeros = [23, 16, 11, 8, 19, 14, 5, 21];

function verificaPrimo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

function numerosPrimos(numeros) {
    var primos = [];
    for (var i = 0; i < numeros.length; i++) {
        if (verificaPrimo(numeros[i])) {
            primos.push(numeros[i]);
        }
    }
    return primos;
}

var primos = numerosPrimos(numeros);
alert("Números primos: " + primos);