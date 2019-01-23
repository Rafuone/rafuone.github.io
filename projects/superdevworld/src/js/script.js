let moving = document.querySelector(".moving");
let jean = document.querySelector(".jean");
let mathieu = document.querySelector(".mathieu");
let michael = document.querySelector (".michael");
let group_obstacles = document.querySelector(".obs");
let obstacle = document.querySelector(".obstacles");
let obstacleanim = document.querySelector(".obstacles1-anim")
let minTime = 1.2;
let maxTime = 1.7;
let gameStart = true;
let score = 0;
let cheatCode = true;


window.addEventListener('focus', function(){
  if(!gameStart){
    gameStart = true;
    setScore();
  }
});

// Permet de lancer l'animation de saut, lorsque on appuie sur une touche.
document.body.addEventListener('keydown', function () {
  if(mathieu != null) {
    mathieu.classList.add('mathieu-jumping');
  }
  else if (jean != null) {
    jean.classList.add('jean-jumping');
  }
  else {
    michael.classList.add('michael-jumping');
  }
});

// Ici on enlève l'animation de saut du DOM afin de pouvoir redéclenché un nouveau saut.
moving.addEventListener('animationend', function () {
  if(mathieu != null) {
    mathieu.classList.remove('mathieu-jumping');
  }
  else if (jean != null) {
    jean.classList.remove('jean-jumping');
  }
  else {
    michael.classList.remove('michael-jumping');
  }
});

// On déclare le positionnement des obstacles et leurs "duration" pour définir leurs vitesses.
obstacle.addEventListener('animationend', function () {
  obstacle.classList.remove('obstacle1-anim');
  obstacle.style.animationDuration = getRandomRange(minTime, maxTime) + 's';
  obstacle.style.bottom = getRandomRange(45, 210, true) + 'px';
  setTimeout(function () {
    obstacle.classList.add('obstacle1-anim');
  }, 10);
});

function getRandomRange(min, max, option=false) {
  if(option){
    let test = Math.floor(Math.random() * 10);
    if(test<5){return min;}
    else if(test>=5){return max;}
  }
  else{
    return Math.random() * (max - min) + min;
  }
};

// Permet de bloquer le score et les animations lorsque le joueur n'est plus focus sur le jeu.
setInterval(function(){
  collisionDetect(moving,obstacle);
  setScore();
  window.addEventListener('blur', function(){
    if(gameStart){
      gameStart=false;
      alert("On revient toujours à l'essentiel");
    }
  });
},100);

function collisionDetect(element1, element2){ // function de detection des collisions
  if (cheatCode){
  let colli1 = element1.getBoundingClientRect();
  let colli2 = element2.getBoundingClientRect();
// Récupère les attributs de positions.
  if (colli1.x < colli2.x + colli2.width &&
    colli1.x + colli1.width > colli2.x &&
    colli1.y < colli2.y + colli2.height &&
    colli1.height + colli1.y > colli2.y) {
      //effet de la collision
      gameStart=false;
      alert("Le but c'est d'éviter les obstacles!");
      location.reload();
      // location = page , reload quand perdu.
    }
  }
};

// Function qui permet d'avoir un systeme de difficulé évolutif.+ le score est important +les obstacles arrivent vite.
function setScore() {
  if(gameStart) {
    let myScore = document.querySelector('.score');
    score += 10;
    myScore.textContent =`Score : ${score}`;
    if(score>2000 && score<4000){
      minTime=1;
      maxTime=1.3;
    }
    else if(score>4000){
      minTime=0.7;
      maxTime=1.1;
    }
  }
};


// Cheat Code
function toggleCollision() {
  if (cheatCode) {
    cheatCode = false;
    return "TRICHEUR !";
  } 
  else {
    cheatCode = true;
    return "Pense pas qu'en enlevant le code ça se voit pas !";
  }
  
}

function tcl() {
  return toggleCollision();
}