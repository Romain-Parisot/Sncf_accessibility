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
        var texte = document.getElementById("sect2").textContent;
        message.text = texte;
        syntheseVocale.speak(message);
    }

    lectureEnCours = !lectureEnCours;
}

// Événement onend pour mettre à jour l'état de la lecture
syntheseVocale.onend = function() {
    lectureEnCours = false;
};


// 2nd bouton audio
function toggleLecture2() {
    if (lectureEnCours) {
        syntheseVocale.cancel();
    } else {
        var texte = document.getElementById("sect3").textContent;
        message.text = texte;
        syntheseVocale.speak(message);
    }

    lectureEnCours = !lectureEnCours;
}


// 3e bouton audio
function toggleLecture3() {
    if (lectureEnCours) {
        syntheseVocale.cancel();
    } else {
        var texte = document.getElementById("sect4").textContent;
        message.text = texte;
        syntheseVocale.speak(message);
    }

    lectureEnCours = !lectureEnCours;
}


// 4e bouton audio
function toggleLecture4() {
    if (lectureEnCours) {
        syntheseVocale.cancel();
    } else {
        var texte = document.getElementById("sect5").textContent;
        message.text = texte;
        syntheseVocale.speak(message);
    }

    lectureEnCours = !lectureEnCours;
}


// modal pop-up
// Récupération des éléments HTML
var btn = document.getElementById('btn-audio');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

// Gestionnaire d'événement pour afficher la fenêtre modale
btn.onclick = function() {
    modal.style.display = 'block';
}

// Gestionnaire d'événement pour fermer la fenêtre modale
span.onclick = function() {
    modal.style.display = 'none';
}

// Gestionnaire d'événement pour fermer la fenêtre modale en cliquant en dehors de celle-ci
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// assistant vocal
function annonceAV() {
    var message = new SpeechSynthesisUtterance("Assistance vocale activée");
    var syntheseVocale = window.speechSynthesis;

    message.lang = "fr-FR";  // Langue (par exemple, français)
    message.rate = 1.0;      // Vitesse de la voix (1.0 = vitesse normale)
    syntheseVocale.speak(message);

    modal.style.display = 'none';


    activerLecture();
}

var syntheseVocaleAV = window.speechSynthesis;
var lectureEnCoursAV = false;

function activerLecture() {
    // Ajouter un gestionnaire de clic à tous les éléments de la section "contenu"
    var elements = document.getElementById("body-home").getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function(event) {
            lireTexte(event.target.textContent);
        });
    }
}

function lireTexte(texte) {
    if (lectureEnCoursAV) {
        syntheseVocaleAV.cancel();
        lectureEnCoursAV = false;
    } else {
        var message = new SpeechSynthesisUtterance(texte);
        message.lang = "fr-FR";
        message.rate = 1.0;
        syntheseVocaleAV.speak(message);
        lectureEnCoursAV = true;
    }
}

// Événement onend pour mettre à jour l'état de la lecture
syntheseVocaleAV.onend = function() {
    lectureEnCours = false;
};