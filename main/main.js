/* Récupérer informations du module data.js */
const path = require('path')
let cheminRemonte = path.normalize(path.join(__dirname, ".."))
const data = require(path.join(cheminRemonte , 'vue/public/conf/data.js'))
const questionsPriseInformations = data.getQuestionsPriseInformations()
const questionsReposduCorps = data.getQuestionsReposduCorps()
const questionsCercueilUrne = data.getQuestionsCercueilUrne()
const questionsCeremonie = data.getQuestionsCeremonie()
const questionsCremation = data.getQuestionsCremation()
const questionsConcession = data.getQuestionsConcession()
const questionsOrganisationPlanning = data.getQuestionsOrganisationPlanning()
const questionsFinalisation = data.getQuestionsFinalisation()
console.log("Début programme")
console.log("---------------------------------------------------------------")
console.log("Prise Informations")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsPriseInformations).length; i++) {
	console.log(questionsPriseInformations[i + 1])
}
console.log("---------------------------------------------------------------")
console.log("Repos du corps")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsReposduCorps).length; i++) {
	console.log(questionsReposduCorps[i + 1])
}
console.log("---------------------------------------------------------------")
console.log("Cercueils et Urnes")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsCercueilUrne).length; i++) {
	console.log(questionsCercueilUrne[i + 1])
}
console.log("---------------------------------------------------------------")
console.log("Cérémonie")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsCeremonie).length; i++) {
	console.log(questionsCeremonie[i + 1])
}
console.log("---------------------------------------------------------------")
console.log("Crémations")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsCremation).length; i++) {
	console.log(questionsCremation[i + 1])
}
console.log("---------------------------------------------------------------")
console.log("Concession")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsConcession).length; i++) {
	console.log(questionsConcession[i + 1])
}
console.log("---------------------------------------------------------------")
console.log("Organisation et Planning")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsOrganisationPlanning).length; i++) {
	console.log(questionsOrganisationPlanning[i + 1])
}
console.log("---------------------------------------------------------------")
console.log("Finalisation")
console.log("---------------------------------------------------------------")
for (var i = 0; i < Object.keys(questionsFinalisation).length; i++) {
	console.log(questionsFinalisation[i + 1])
}
console.log("---------------------------------------------------------------")
