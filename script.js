var syntheseVocale = window.speechSynthesis;
var message = new SpeechSynthesisUtterance();
message.lang = "fr-FR";
message.rate = 1.0;

// Variable pour suivre l'état de la lecture
var lectureEnCours = false;

function toggleLecture() {
    if (lectureEnCours) {
        syntheseVocale.cancel();
    } else {
        var texte = document.getElementById("sect3").textContent;
        message.text = texte;
        syntheseVocale.speak(message);
    }

    lectureEnCours = !lectureEnCours;
}

// Événement onend pour mettre à jour l'état de la lecture
syntheseVocale.onend = function() {
    lectureEnCours = false;
};