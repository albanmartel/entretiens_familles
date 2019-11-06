const ipcRenderer = window.ipcRenderer

let valider = $('#valider')[0]
let question= $('#question')[0]
let reponse = $('#reponse')[0]
let replyDiv = $('#reply')[0]

function affichageDansLaVue(arg1, arg2){
  arg1.innerHTML = arg2
}

function envoyer(){
  console.log('bouton valider activé')
  console.log('envoi question : ' + question.value)
  console.log('envoi réponse : ' + reponse.value)
  ipcRenderer.send('reponse-vue', question.value, reponse.value)
}

function integrerQuestionEtReponse(req, resp){
  question.value = req
  reponse.value = resp
}

affichageDansLaVue(replyDiv, "Renderer.js fonctionne")

valider.addEventListener("click", function(){
  envoyer()
})

$('body').keypress(function (event) {
    if (event.which == 13 || event.keyCode == 13) {
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
