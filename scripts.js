var cartaAragorn = {
   nome: "Aragorn",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2017/12/2-aragorn.jpg",
    atributos: {
        ataque: 70,
        defesa: 60,
        magia: 50
    }
}

var cartaLegolas = {
   nome: "Legolas",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2018/09/legiao_rB4VaPjwzL8KGxb1ldtTXmf_DkOQFYWM96opsvqShU.jpg.jpeg",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGandalf = {
   nome: "Gandalf",
    imagem: "https://pm1.narvii.com/6734/5d472b817eb7665fc919867d663348bb0ccff8b5v2_hq.jpg",
    atributos: {
        ataque: 80,
        defesa: 70,
        magia: 99
    }
}

var cartaGollon = {
   nome: "Gollon",
    imagem: "https://media.gazetadopovo.com.br/2015/12/cf0c0a15f7d778f74f327a689e8a41f1-gpLarge.jpg",
    atributos: {
        ataque: 60,
        defesa: 55,
        magia: 50
    }
}

var cartaFroddoBalseiro = {
    nome: "FroddoBalseiro",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2018/09/legiao_Heg9ESa4ActlBujPpO0IhCqKrNWyvdLnU2QiJs7FzY.jpg.jpeg",
    atributos: {
        ataque: 70,
        defesa: 60,
        magia: 50
    }
}

var cartaSauron = {
   nome: "Sauron",
    imagem: "https://geeksinaction.com.br/wp-content/uploads/2021/01/Lord-Sauron-Lord-of-the-rings-fellowship-of-the-ring-1-1.jpg",
    atributos: {
        ataque: 80,
        defesa: 75,
        magia: 90
    }
}

var cartaGimli = {
    nome: "Gimli",
    imagem: "https://stuffzentretenimento.files.wordpress.com/2015/04/gloin.jpg",
    atributos: {
        ataque: 75,
        defesa: 65,
        magia: 40
    }
}

var cartaOrcs = {
    nome: "Orcs",
    imagem: "http://imagem.band.com.br/f_470155.jpg",
    atributos: {
        ataque: 65,
        defesa: 70,
        magia: 55
    }
}

var cartaSaruman = {
    nome: "Saruman",
    imagem: "http://4.bp.blogspot.com/-QtczpkhfQ-I/UQrxPjv9t1I/AAAAAAAAAMU/AlipIcYCVm0/s1600/tumblr_lnxj8bx7ET1qcy0gqo1_500.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 99
    }
}

var cartaBoromir = {
    nome: "Boromir",
    imagem: "https://www.estrelando.com.br/uploads/2016/12/29/seanbean-1483040491.jpg",
    atributos: {
        ataque: 75,
        defesa: 70,
        magia: 55
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaAragorn, cartaLegolas, cartaGandalf, cartaGollon, cartaFroddoBalseiro, cartaSauron, cartaGimli, cartaOrcs, cartaSaruman, cartaBoromir]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length

   divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador" + pontosJogador + "/" + pontosMaquina + " Máquina"

  divPlacar.innerHTML = html
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
   cartaMaquina = cartas[numeroCartaMaquina]
   cartas.splice(numeroCartaMaquina, 1)

  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
   cartaJogador = cartas[numeroCartaJogador]
   cartas.splice(numeroCartaJogador, 1)

   document.getElementById('btnSortear').disabled = true
   document.getElementById('btnJogar').disabled = false

   exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
   var divResultado = document.getElementById("resultado")
   var atributoSelecionado = obtemAtributoSelecionado()

   if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
     htmlResultado = '<p class="resultado-final">Venceu</p>'
     pontosJogador++
   } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
     htmlResultado = '<p class="resultado-final">Perdeu</p>'
     pontosMaquina++  
   } else {
     htmlResultado = '<p class="resultado-final">Empatou</p>'
   }
    
  if (cartas.length == 0) {
      alert("Fim de Jogo")
    if (pontosJogador > pontosMaquina){
      htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>' 
    }
  } else { 
      document.getElementById('btnProximaRodada').disabled = false
}

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disable = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')

  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true

  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}
