let content = document.querySelector('.content');
let characterSelect = document.querySelector('.character-select');
let mathieuAnim = document.querySelector('.mcharacter');
let jeanAnim = document.querySelector('.jcharacter');
let mathieuDiv = document.querySelector('.m');
let jeanDiv = document.querySelector('.j');
let michaelDiv = document.querySelector('.mj');

// On remove la selection des personnages pour les remettre ensuite.
characterSelect.remove();

// Permet de baisser le volume de la musique d'accueil.
let song = document.querySelector("#homesong");
song.volume = 0.4;

// TimeOut sur le jingle du logo.
let sdw = document.querySelector('#sdw');
setTimeout(function() {
  sdw.play();
}, 800);
sdw.volume = 0.6;


// Event permettant de changer de page html.
document.body.addEventListener('keydown', function () {
  content.remove();
document.querySelector('.animate-background').appendChild(characterSelect);

sdw.volume = 0;

});


// Hover sur les div de selection de personnages
mathieuDiv.addEventListener('mouseover', function(){
  mathieuAnim.style.animationName = "moving";
})
mathieuDiv.addEventListener('mouseleave', function(){
  mathieuAnim.style.animationName = "";
 
})
jeanDiv.addEventListener('mouseover', function(){
  jeanAnim.style.animationName = "moving";
})
jeanDiv.addEventListener('mouseleave', function(){
  jeanAnim.style.animationName = "";
  
})

// Animation selection + redirection MJ
characterSelect.querySelector('.mj').addEventListener("click", function(){
  mathieuDiv.remove();
  jeanDiv.remove();
  michaelDiv.querySelector("p").textContent='MJ';
  michaelDiv.classList.replace('mj','mjtitle');
  jeanAnim.classList.replace('jcharacter','mjcharacter');
  michaelDiv.appendChild(jeanAnim);
  setTimeout(function(){
    open("./michael.html", "_self");
  },1500);
 
});

// Redirection vers les html correspondant aux personnages de Mathieu et Jean
characterSelect.querySelector('.m').addEventListener("click", function(){
  open("./mathieu.html", "_self");
});
characterSelect.querySelector('.j').addEventListener("click", function(){
  open("./jean.html", "_self");
});