var carta1 = {
  nome: "Hyoga de Cisne",
  imagem:
    "https://pa1.narvii.com/6452/13890c9c043e22382e2d782fec4f3544ad4c48e7_hq.gif",
  atributos: {
    ataque: -8,
    defesa: -6,
    stamina: -4
  }
};
var carta2 = {
  nome: "Seiya de Pégaso",
  imagem:
    "https://pa1.narvii.com/6578/c8074880b89cf191451cd3f4f2f2c082247c3d3d_hq.gif",
  atributos: {
    ataque: -5,
    defesa: -6,
    stamina: -4
  }
};
var carta3 = {
  nome: "Ikki de Fênix",
  imagem:
    "https://pa1.narvii.com/6326/57bb0628ed8598ecb0925646e820166e6e7fee9e_hq.gif",
  atributos: {
    ataque: -10,
    defesa: -8,
    stamina: -5
  }
};
var carta4 = {
  nome: "Shun de Andrômeda",
  imagem:
    "https://i.pinimg.com/originals/7b/7f/f1/7b7ff184204e587434953a30de68e9bb.gif",
  atributos: {
    ataque: -3,
    defesa: -4,
    stamina: -7
  }
};
var carta5 = {
  nome: "Shiryu de Dragão",
  imagem:
    "https://i.pinimg.com/originals/aa/4e/fa/aa4efa54bd939653154f6f372f1fb137.gif",
  atributos: {
    ataque: -6,
    defesa: -9,
    stamina: -4
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnProximaRodada").disabled = true;
  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type= 'radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked == true) {
      return radioAtributo[i].value;
    }
  }
}
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  elementoResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
  document.getElementById("btnProximaRodada").disabled = false;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes'class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type= 'radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      "" +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = "<p class='carta-subtitle'>" + cartaJogador.nome + "</p>";

  divCartaJogador.innerHTML = moldura + nome + tagHTML + "</div>";
  var html = "<div id = 'opcoes' class='carta-status'>";
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes'class='carta-status'>";

  var opcoesTexto = "";
  var nome = cartaMaquina.atributos.nome;
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      "" +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = "<p class='carta-subtitle'>" + cartaMaquina.nome + "</p>";

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + "</div>";
  var html = "<div id = 'opcoes' class='carta-status'>";
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
function proximaRodada() {
  var divCartasJogador = document.getElementById("carta-jogador");
  var divCartasMaquina = document.getElementById("carta-maquina");

  divCartasJogador.innerHTML = "<h3></h3>";
  divCartasJogador.removeAttribute("style");
  divCartasMaquina.innerHTML = "<h3></h3>";
  divCartasMaquina.removeAttribute("style");
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProximaRodada").disabled = false;
}