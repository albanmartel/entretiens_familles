const outils = require('./fonctionsAdditionnelles')
const path = require('path')
const {
  EventEmitter
} = require('events')

/* Ensemble de questions pour l'organisation d'obsèques */
var questionsPriseInformations = null
var questionsReposduCorps = null
var questionsCremation = null
var questionsCercueilUrne = null
var questionsCeremonie = null
var questionsConcession = null
var questionsOrganisationPlanning = null
var questionsFinalisation = null

var parcoursQuestions = []
const chargerQuestionsAuxFamillesEvent = new EventEmitter()
const chargerQuestionsThemeAuxFamillesEvent = new EventEmitter()
const testerQuestionsAuxFamilleJS = new EventEmitter()
const testerEcriturefichierEvent = new EventEmitter()

let cheminRemonte = path.normalize(path.join(__dirname, ".."))

const questionsEnTableau = require(path.join(cheminRemonte, 'vue', 'public/conf/questionsAuxFamilles.js')).getTableauQuestions()

var stock = ""
var compteurQuestionTheme = 0
var compteurQuestions = 0

function init() {
  outils.lireFichierCall(path.join(cheminRemonte, 'vue', 'public/conf/questionsAuxFamilles.json'), function(data) {
    questions = JSON.parse(data.toString('utf8'))
    chargerQuestionsAuxFamillesEvent.emit('success')
  })
}

function chargerTableauParcours() {
  for (let i = 0; i < Object.keys(questionsEnTableau).length; i++) {
    let themeQuestions = Object.keys(questionsEnTableau)[i]
    let nombreQuestionsParTheme = questionsEnTableau[themeQuestions].length
    parcoursQuestions.push([themeQuestions, nombreQuestionsParTheme])
  }
}

function key1Find(arg) {
  return Object.keys(questions)[arg]
}

function key2Find(arg1, arg2) {
  let key1 = key1Find(arg1)
  return Object.keys(questions[key1])[arg2]
}

function key3Find(arg1, arg2, arg3) {
  let key1 = key1Find(arg1)
  let key2 = key2Find(arg1, arg2)
  return Object.keys(questions[key1][key2].r)[arg3]
}

function iterrationQuestionsFor1() {
  for (var i = 0; i < Object.keys(questions).length; i++) {
    let key1 = key1Find(i)
    //console.log(key1)
    for (var j = 0; j < Object.keys(questions[key1]).length; j++) {
      let key2 = key2Find(i, j)
      console.log("Question : " + questions[key1][key2].q)
      for (var k = 0; k < Object.keys(questions[key1][key2].r).length; k++) {
        let key3 = key3Find(i, j, k)
        console.log("Réponse n°" + (k + 1) + " : " + questions[key1][key2].r[key3])
      }
    }
    if ((i + 1) == Object.keys(questions).length) {
      console.log(i)
    }
  }
}

function iterrationQuestionsFor2() {
  for (let i = 0; i < Object.keys(questions).length; i++) {
    let key1 = Object.keys(questions)[i]
    for (let i = 0; i < Object.keys(questions[key1]).length; i++) {
      let key2 = Object.keys(questions[key1])[i]
      console.log("Question : " + questions[key1][key2].q)
      for (let i = 0; i < Object.keys(questions[key1][key2].r).length; i++) {
        let key3 = Object.keys(questions[key1][key2].r)[i]
        console.log("Réponse n°" + (i + 1) + " : " + questions[key1][key2].r[key3])
      }
    }
  }
}

function iterrationWhile() {
  var i = 0
  var j = 0
  var k = 0
  var key1 = ""
  var key2 = ""
  var key3 = ""
  while (i < Object.keys(questions).length) {
    j = 0
    key1 = key1Find(i)
    console.log(key1)
    while (j < Object.keys(questions[key1]).length) {
      k = 0
      key2 = key2Find(i, j)
      console.log("Question : " + questions[key1][key2].q)
      while (k < Object.keys(questions[key1][key2].r).length) {
        key3 = key3Find(i, j, k)
        console.log("Réponse n°" + (k + 1) + " : " + questions[key1][key2].r[key3])
        k++
      }
      j++
    }
    i++
  }
}

function parcourrirTableau() {
  for (let i = 0; i < parcoursQuestions.length; i++) {
    for (let i = 0; i < parcoursQuestions[compteurQuestionTheme][1]; i++) {
      console.log(questionsEnTableau[parcoursQuestions[compteurQuestionTheme][0]][compteurQuestions][0])
      console.log(questionsEnTableau[parcoursQuestions[compteurQuestionTheme][0]][compteurQuestions][1])
      compteurQuestions++
    }
    compteurQuestions = 0
    compteurQuestionTheme++
  }
  compteurQuestionTheme = 0
}

function parcourrirTableauPasApas() {
  console.log(questionsEnTableau[parcoursQuestions[compteurQuestionTheme][0]][compteurQuestions][0])
  console.log(questionsEnTableau[parcoursQuestions[compteurQuestionTheme][0]][compteurQuestions][1])
  if ((compteurQuestions + 1) != parcoursQuestions[compteurQuestionTheme][1]) {
    compteurQuestions++
  } else {
    compteurQuestions = 0
    compteurQuestionTheme++
  }
}

chargerQuestionsAuxFamillesEvent.on('success', function() {
  console.log('Chargement questionsAuxFamilles reussi')
  chargerTableauParcours()
  chargerQuestionsThemeAuxFamillesEvent.emit('success')
})

chargerQuestionsThemeAuxFamillesEvent.on('success', function() {
  console.log('Chargement questionsThemeAuxFamilles reussi')
  testerEcriturefichierEvent.emit('success')
})

testerEcriturefichierEvent.on('success', function() {
  outils.ecrireFichierCall('tmp/test.txt', "donnees de test 2", function() {
    testerQuestionsAuxFamilleJS.emit('success')
  })

})

testerQuestionsAuxFamilleJS.on('success', function() {
  while (compteurQuestionTheme < parcoursQuestions.length) {
    parcourrirTableauPasApas()
  }
  console.log("fin")
})

init()
