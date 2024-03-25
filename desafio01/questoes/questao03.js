numeros = [12, 5, 23, 17, 8, 14, 3, 19];

function ordenaFrascos(numeros) {
    var novaLista = numeros; 
    for (var i = 0; i < novaLista.length; i++) {
        for (var j = 0; j < novaLista.length - i - 1; j++) {
            if (novaLista[j] > novaLista[j + 1]) {
                var temp = novaLista[j];
                novaLista[j] = novaLista[j + 1];
                novaLista[j + 1] = temp;
            }
        }
    }
    return novaLista;
}

var frascosOrdenados = ordenaFrascos(numeros);
alert("Ordenados: " + frascosOrdenados);