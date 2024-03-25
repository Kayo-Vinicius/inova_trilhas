var pontosVida = 100;
var dano = 20;
var qtdAtaques = 3;

function ataque(vida , dano, qtdAtaques) {
  for (var i = 0; i < qtdAtaques; i++) {
    vida -= dano;
  }
  return vida;
}

var vidaFinal = ataque(pontosVida, dano, qtdAtaques);
alert("A vida final é " + vidaFinal);