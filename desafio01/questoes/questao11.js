function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var ano = hoje.getFullYear() - nascimento.getFullYear();
    var mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        ano--;
    }
    return ano;
}

var dataNascimento = "2003-04-27";
var idade = calcularIdade(dataNascimento);
alert("Sua idade é " + idade);