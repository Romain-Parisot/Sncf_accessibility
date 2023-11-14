function lireTexte() {
    var texte = document.getElementById("texteADire").textContent;
    var syntheseVocale = window.speechSynthesis;

    var message = new SpeechSynthesisUtterance(texte);
    message.lang = "fr-FR";  // Langue (par exemple, français)
    message.rate = 1.0;      // Vitesse de la voix (1.0 = vitesse normale)
    syntheseVocale.speak(message);
}
