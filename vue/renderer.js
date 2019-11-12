const ipcRenderer = window.ipcRenderer

let valider = $('#valider')[0]
let question = $('#question')[0]
let reponse = $('#reponse')[0]
let replyDiv = $('#reply')[0]
var valeurReponse = ""
var codeorigin = ""

function affichageDansLaVue(arg1, arg2) {
  arg1.innerHTML = arg2
}

function verifierLaReponse() {
  codeorigin = $('#reponse').parent().html()
  if (typeof($('input:checked', '#reponse').val()) === "undefined" && $('#reponse').val() === "") {
    if(typeof($('#avertissement').html()) === "undefined"){
      $('#reponse').parent().html('<p id="avertissement">Veuillez fournir une réponse</p>' + codeorigin)
    }
    console.log("reponse non fournie ! veuillez en fournir une !")
    return false
  } else {
    if (typeof($('input:checked', '#reponse').val()) === "undefined") {
      valeurReponse = $('#reponse').val()
    } else {
      valeurReponse = $('input:checked', '#reponse').val()
    }
    if(typeof($('#avertissement').html()) !== "undefined"){
      $('#avertissement').html("")
    }
    //$('#reponse').parent().html('<input id="reponse" value="' + valeurReponse + '"/>')
    console.log("la réponse est : " + valeurReponse)
    envoyer()
    return true
  }
}

function adapterAffichageReponse(resp){
  let data = "<input type='text' class='form-control' id='reponse' />"
  if (0 < resp.length){
    data = "<form id='reponse'>\n"
    for(let i = 0; i < resp.length; i++){
      data  = data + "<p><input type='radio' value='" + resp[i] + "'/> " + resp[i] + "</p>\n"
    }
    data = data + "</form>\n"
  }
  return data
}

function envoyer() {
  console.log('bouton valider activé')
  console.log('envoi question : ' + question.value)
  console.log('envoi réponse : ' + valeurReponse)
  ipcRenderer.send('reponse-vue', question.value, valeurReponse)
}

function integrerQuestionEtReponse(req, resp) {
  question.value = req
  $('#reponse').parent().html(adapterAffichageReponse(resp))
}

affichageDansLaVue(replyDiv, "Renderer.js fonctionne")

valider.addEventListener("click", function() {
  //verifierLaReponse()
  envoyer()
})

$('body').keypress(function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    //verifierLaReponse()
    envoyer()
    return false;
  }
  return true;
})


// Dans le processus de rendu (page web)
/* Vérification que la réception est correcte */
ipcRenderer.on('reponse-main', function(event, req, resp) {
  integrerQuestionEtReponse(req, resp)
})

ipcRenderer.on('main-message', function(event, arg) {
  console.log(arg)
})
