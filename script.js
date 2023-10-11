//Selecionando elementos da página
const textareaFrom = document.querySelector("#textareaFrom");
const textareaTo = document.querySelector("#textareaTo");
const btnTranslate = document.querySelector("#btnTranslate");
const btnLoadFile = document.querySelector("#btnLoadFile");
const btnDownload = document.querySelector("#btnDownload");
const fileInput = document.querySelector("#fileInput");
const selects = document.getElementsByTagName("select");
const loadingDiv = document.querySelector(".loading");

//Dicionário de países
const countries = {
  "en": "Inglês",
  "pt": "Português",
  "es": "Espanhol",
  "fr": "Francês",
  "de": "Alemão",
  "ja": "Japonês",
  "zh": "Chinês",
  "ar": "Árabe",
  "af": "Africano"
};

//Preenchendo as opções dos selects
for (let i = 0; i < selects.length; i++) {
  const tag = selects[i];
  for (let country in countries) {
    let selected;
    //Selecionando a opção "Inglês" para a classe selectFrom
    if (tag.className.includes("selectFrom") && country == "en") {
      selected = "selected";
    } 
    //Selecionando a opção "Português" para a classe selectTo
    else if (tag.className.includes("selectTo") && country == "pt") {
      selected = "selected";
    }

    const option = `<option value="${country}" ${selected}>${countries[country]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
}

//Evento de click do botão Translate
btnTranslate.addEventListener("click", () => {
  if (textareaFrom.value) {
    loadTranslation();
  } else {
    textareaTo.value = "⚠️Não há nada!";
    textareaTo.style.color = "red"; // Adicionado estilo para exibir a mensagem em vermelho
    btnDownload.disabled = true;
  }
});

//Evento de click do botão Load File
btnLoadFile.addEventListener("click", () => {
  fileInput.click();
});

//Evento de change do input de file
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      textareaFrom.value = e.target.result;
    };
    reader.readAsText(file);
  }
});

//Evento de click do botão Download
btnDownload.addEventListener("click", () => {
  const downloadLink = document.createElement("a");
  downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(textareaTo.value);
 
  const originalFileName = fileInput.files[0].name;
  
  downloadLink.download = originalFileName;
  downloadLink.style.display = "none";
  
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

//CheckBox remover tags
function RemoverTags() {
  var checkbox = document.getElementById("RemoverTags");
  var textarea = document.getElementById("textareaTo");

  var conteudo = textarea.value;
  var conteudoOriginal = textarea.dataset.conteudoOriginal;

  if (conteudo !== conteudoOriginal) {
     textarea.dataset.conteudoOriginal = conteudo; //Atualiza o conteúdo original com o novo valor
  }

  if (checkbox.checked) {
  if (conteudo !== conteudoOriginal) {
      conteudo = conteudo.replace(/<(\/?[^>]+)>/g, function(match, tag) {
        return tag === "" ? match : "";//Converter tags para espaço em branco
    });
 
  // Código
  }
} else {
  conteudo = conteudoOriginal;
  
   }
  textarea.value = conteudo;
}