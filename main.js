// Ceci va fonctionner dans le processus principal, mais sera`undefined`
// dans un processus de rendu :
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const {EventEmitter} = require('events')

const chargerQuestionsAuxFamillesEvent = new EventEmitter()
const chargerQuestionsThemeAuxFamillesEvent = new EventEmitter()

//let cheminRemonte = path.normalize(path.join(__dirname, ".."))
let cheminRemonte = __dirname
let fileVue = path.join(cheminRemonte, 'vue', 'index.html')
let filePreload = path.join(cheminRemonte, 'main', 'preload.js')
let fileQuestionsEnTableau = path.join(cheminRemonte, 'vue', 'public/conf/questionsAuxFamilles.js')
let fileFonctionsAdditionnelles = path.join(cheminRemonte, 'main', 'fonctionsAdditionnelles.js')

const outils = require(fileFonctionsAdditionnelles)
const questionsEnTableau = require(fileQuestionsEnTableau).getTableauQuestions()

var questions = ""
var compteurQuestionTheme = 0
var compteurQuestions = 0
var stockeEntretien = ""
var parcoursQuestions = []

let mainWindow = null

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

function parcourrirTableauPasApas() {
  if ((compteurQuestions + 1) < parcoursQuestions[compteurQuestionTheme][1]) {
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
  console.log('Chargement QuestionsThemeAuxFamilles reussi')
  createWindow()
})

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      plugins: true,
      nodeIntegration: false,
      preload: filePreload
    }
  })
  /*
  // Afficher les outils de développements dans la fenêter électron
  // disponible aussi via Ctrl+Shift+I
  mainWindow.webContents.openDevTools()
  */


  // and load the index.html of the app.
  // mainWindow.loadFile('test.html')

  console.log("fichier Vue : " + fileVue)
  console.log("fichier preload : " + filePreload)
  mainWindow.loadURL("file://" + fileVue)
  mainWindow.webContents.on('dom-ready', function() {
    let req = questionsEnTableau["questionsPriseInformations"][0][0]
    let resp = questionsEnTableau["questionsPriseInformations"][0][1]
    mainWindow.webContents.send('reponse-main', req, resp)
    compteurQuestions++
  })
  // Emitted when the window is moved.
  mainWindow.on('move', function() {
    console.log('electron move')
  })
  // Emitted when the window is minimize.
  mainWindow.on('minimize', function() {
    console.log('electron minimize')
  })
  // Emitted when the window is maximize.
  mainWindow.on('maximize', function() {
    console.log('electron maximize')
  })
  // Emitted when the window is restore.
  mainWindow.on('restore', function() {
    console.log('electron restore')
  })
  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    console.log("arret application")
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
  init()
  console.log("Debut Programme")
})

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null)
    init()
})

// Dans le processus principal .
// Ecoute de ce que nous envoie la vue
// ipcMain.on('first-request', function(event, questionFromMain, reponseFromMain){
//   event.reply('sendData', 'questionFromMain', 'reponseFromMain')
// })

ipcMain.on('reponse-vue', function(event, questionFromVue, reponseFromVue) {
  console.log("Question de la vue : " + questionFromVue)
  console.log("Reponse de la vue : " + reponseFromVue)
  var questionFromMain = ""
  var reponseFromMain = ""
  try {
    if (compteurQuestionTheme < parcoursQuestions.length) {
      questionFromMain = questionsEnTableau[parcoursQuestions[compteurQuestionTheme][0]][compteurQuestions][0]
      reponseFromMain = questionsEnTableau[parcoursQuestions[compteurQuestionTheme][0]][compteurQuestions][1]
      console.log("Question envoyée à la vue : " + questionFromMain)
      console.log("Réponse envoyée à la vue : " + reponseFromMain)
      event.reply('reponse-main', questionFromMain, reponseFromMain)
      parcourrirTableauPasApas()
    } else {
      event.reply('reponse-main', "c'est terminé", "c'est terminé")
    }
  } catch (e) {
    console.error(e);
  }
  event.reply('main-message', 'Réponse reçue')
})
