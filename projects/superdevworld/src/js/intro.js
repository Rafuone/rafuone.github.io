let challenge = document.querySelector('.challenge');
// Timeout pour le declenchement du jingle "Challenge everything"
setTimeout(function() {
  challenge.play();
}, 7300);
challenge.volume = 0.2;

// addevent qui permet de lancer la page html home.html a la fin des animations d'intro.
document.querySelector(".backgroundfa").addEventListener('animationend', function () {
  window.open("./home.html", "_self");
});