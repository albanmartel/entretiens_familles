/* Fichier de données */
const questionsPriseInformations = {
	1: "Le décès est survenu à quel endroit ?",
	2: "Quand est-ce arrivé ?",
	3: "Avez-vous les papiers ?",
	4: "La déclaration de décès est faite ?",
	5: "Êtes-vous M.X fils/fille/gendre etc. qui a fait la déclaration ?",
	6: "Quel est votre lien de parenté avec cette personne ?"
}

const questionsReposduCorps = {
	1: "Voulez-vous que nous transportions le défunt au funérarium ? Êtes-vous d'accord ?",
	2: "Pouvez-vous nous donner des précisions sur la corpulence ?",
	3: "Voulez-vous disposer d'un salon ? C'est un espace de recueillement convivial et intime où vous aurez la possibilité de voir le défunt à votre convenance ?",
	4: "Les habits qu'elle/qu'il porte vous conviennent-ils ?",
	5: "Pourrez-vous nous apporter les vêtements au plus tôt que nous puissions réaliser le soin et l'habillage en même temps ?",
	6: "Nous allons passer au choix du cercueil, je peux vous les montrer sur catalogue ou aller les voir dans la salle d'exposition, vous êtes d'accord ? ",
	7: "Nous offrons un registre de condoléances que nous vous mettrons à disposition, cela vous conviendra ?",
	8: "Qui signera le pouvoir ?",
	9: "Avait-elle/il des volontés exprimées ?",
	10: "Qu'est-ce qui est envisagé : une crémation ou une inhumation ?"
}

const questionsCremation = {
	1: "Quelle sera la destination des cendres ?",
	2: "Nous offrons un coeur mémoris, c'est un coeur en pierre réfractaire qui accompagne le cercueil pendant la crémation, et vous sera rendu à la remise des cendres\n"
		+ "cela vous conviendra ? Vous en faudra-t-il plusieurs ?",
	3: "Voulez-vous que je vous expose les différents choix possibles de destination des cendres",
	4: "Vous avez le choix comme destination des cendres à la dispersion au jardin du souvenir du crématorium ou l'inhumation dans une sépulture ou \n"
		+ "de coller l'urne à un monument funéraire ou à la dispersion dans l'endroit de votre choix à l'exception de l'espace public ",
	5: "Il est toujours possible de conserver l'urne au crématorium dans l'attente de votre décision, le dépôt d'urne se paie au trimestre, c'est ce que vous voulez ?",
	6: "Voulez-vous que nous dispersions dans un endroit précis, que vous puissiez à une date ultérieure vous y recueillir ?"
}

const questionsCercueilUrne = {
	1: "Quels étaient ses goûts ?",
	2: "Avait-elle/il des préférences d'essence ou de teinte de bois ?",
	3: "Voici le capiton qui équipe le cercueil, Cela vous convient-il, nous pouvons le changer ?",
	4: "Laissons-nous la croix ? Il est aussi possible de la remplacer par d'autres emblèmes.",
	5: "Voici les urnes qui sont possibles pour recueillir ses cendres"
}

const questionsCeremonie = {
	1: "Voudrez-vous une cérémonie d'hommage ?",
	2: "Ce sera une cérémonie civile ou religieuse ?",
	3: "Nous pouvons vous mettre à disposition la salle de cérémonie pour célébrer un dernier hommage. \n"
	+ "Elle contient jusqu'à 50 personnes, il est possible de diffuser musique, vidéo de faire un témoignage \n"
	+ "Vous pouvez bénéficier d'un maître de cérémonies ou d'un officiant religieux. Voulez-vous que nous allions la visiter à la fin de l'entretien ?"
}

const questionsConcession = {
	1: "Avez-vous une concession familiale ?",
	2: "Dans quel cimetière se situe la concession ?",
	3: "Avez-vous le titre de propriété de la concession ?",
	4: "Est-ce une tombe pleine terre ?",
	5: "Est-ce une fosse maçonnée avec un monument au-dessus ?",
	6: "Est-ce une dalle horizontale ou une porte verticale ?",
	7: "Quel est le lien de parenté entre le défunt et le concessionnaire ?"	
}

const questionsOrganisationPlanning = {
	1: "Quel jour de la semaine vous conviendrait le mieux ?",
	2: "Je vais consulter les plannings, je ne vous abandonne pas. Souhaitez-vous que je laisse la porte ouverte ou préférez-vous que je laisse fermer",
	3: "Je vous propose Mardi matin ou Mercredi après-midi, quel sera le jour des funérailles ?"
}

const questionsFinalisation = {
	1: "Souhaitez-vous une parution presse ?",
	2: "Souhaitez-vous acheter des plaques ou des fleurs ariticielles ?",
	3: "Pouvez-vous vérifier si votre adresse sur le devis est correcte ?",
	4: "Si vous avez des questions, n'hésitez pas à m'appeler, si je ne suis pas là ou pas disponible l'accueil prendra note du message et je vous rappèlerais.",
	5: "Mesdames et Messieurs, je vous raccompagne, nous allons visiter la salle de cérémonie."
}

function getQuestionsPriseInformations() {
	return questionsPriseInformations
}
function getQuestionsReposduCorps() {
	return questionsReposduCorps
}
function getQuestionsCercueilUrne() {
	return questionsCercueilUrne 
}
function getQuestionsCeremonie() {
	return questionsCeremonie
}
function getQuestionsCremation() {
	return questionsCremation
}
function getQuestionsConcession() {
	return questionsConcession
}
function getQuestionsOrganisationPlanning() {
	return questionsOrganisationPlanning
}
function getQuestionsFinalisation() {
	return questionsFinalisation
}

module.exports.getQuestionsPriseInformations = getQuestionsPriseInformations
module.exports.getQuestionsReposduCorps = getQuestionsReposduCorps
module.exports.getQuestionsCremation = getQuestionsCremation
module.exports.getQuestionsCercueilUrne = getQuestionsCercueilUrne
module.exports.getQuestionsCeremonie = getQuestionsCeremonie
module.exports.getQuestionsConcession = getQuestionsConcession
module.exports.getQuestionsOrganisationPlanning = getQuestionsOrganisationPlanning
module.exports.getQuestionsFinalisation = getQuestionsFinalisation
