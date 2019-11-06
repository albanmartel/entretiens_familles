const fs = require('fs')

function lireFichier(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err)
      callback(err, null)
    callback(null, data)
  })
}

function lireFichierCall(file, callback) {
  lireFichier(file, function(err, data) {
    let message = "lecture Fichier : " + file + " "
    if (err) {
      console.log(message + err)
    }
    console.log(message + "succès")
    if(callback){
      callback(data)
    }
  })
}

function ecrireFichier(file, data, callback){
  fs.writeFile(file, data, function(err, datac) {
    if (err)
      callback(err, null)
    callback(null, datac)
  })
}

function ecrireFichierCall(file, data, callback) {
  fs.writeFile(file, data, function(err, datac) {
      let message = "ecriture Fichier " + file + " : "
      let tempo = ""
      if (err) {
        tempo = message + err
        console.log(tempo)
      }
      tempo = message + "succès"
      console.log(tempo)
      if(callback){
        callback(datac)
      }
  })
}

function parcourrirJson(objectJS) {
  console.log("taille de l'object : " + Object.keys(objectJS).length)
  let code = ''
  for (i = 0; i < Object.keys(objectJS).length; i++) {
    let key = Object.keys(objectJS)[i]
    code = code + key + ' : contient ' + Object.keys(objectJS[key]).length + ' questions\n'
  }
  return code
}

module.exports.ecrireFichierCall = ecrireFichierCall
module.exports.lireFichierCall = lireFichierCall
module.exports.parcourrirJson = parcourrirJson
