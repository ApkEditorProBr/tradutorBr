function mostrarAba(numeroAba) {
  //Esconder todas as abas
  let abas = document.getElementsByClassName("aba");
  for (let i = 0; i < abas.length; i++) {
    abas[i].classList.remove("mostrar");
  }

  //Remover a classe "ativa" de todos os botões
  let botoes = document.getElementsByClassName("barra-superior")[0].getElementsByTagName("button");
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("ativa");
  }

  //Exibir a aba selecionada e adiciona a classe "ativa" ao botão clicado
  let abaSelecionada = document.getElementById("aba" + numeroAba);
  abaSelecionada.classList.add("mostrar");
  document.getElementById("btn" + numeroAba).classList.add("ativa");

  //Oculta o botão CARREGAR ARQUIVO se a aba 2 estiver selecionada
  if (numeroAba === 2) {
    document.getElementById("btnLoadFile").classList.add("hide");
  } else {
    document.getElementById("btnLoadFile").classList.remove("hide");
  }
  
  //Ocultar o botão BAIXAR se a aba 1 estiver selecionada
  if (numeroAba === 1) {
    document.getElementById("btnDownload").classList.add("hide");
  } else {
    document.getElementById("btnDownload").classList.remove("hide");
  }

  //Ocultar o botão TRADUZIR se a aba 1 estiver selecionada
  if (numeroAba === 1) {
    document.getElementById("btnTranslate").classList.add("hide");
  } else {
    document.getElementById("btnTranslate").classList.remove("hide");
  }
  
  //Ocultar o botão menuButton se a aba 1 estiver selecionada
if (numeroAba === 1) {
  document.querySelector("#menuButton").classList.add("hide");
} else {
  document.querySelector("#menuButton").classList.remove("hide");
  }
  
    //Ocultar o menu de opções da aba 1 se estiver selecionada
if (numeroAba === 1) {
  document.querySelector("#OcultarMenu").classList.add("hide");
} else {
  document.querySelector("#OcultarMenu").classList.remove("hide");
  }
}

//Adicionar evento de clique ao botão "Aba 1"
document.getElementById("btn1").addEventListener("click", function() {
  mostrarAba(1);
});

//Adicionar evento de clique ao botão "Aba 2"
document.getElementById("btn2").addEventListener("click", function() {
  mostrarAba(2);
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('btn1').click();
});

var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('show');
  //
  if (menu.classList.contains('show')) {
  } else {
  //
     }
  //
});