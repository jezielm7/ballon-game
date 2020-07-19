let total = 0;
let balloon = null;
let remove = null;
let gameTimer = null;

function createBallon() {
  balloon = document.createElement('div');

  balloon.setAttribute('class', 'balloon');

  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 350);

  balloon.setAttribute('style', 'left:' + x + 'px; top:' + y + 'px;');
  balloon.setAttribute('onclick', 'toBurst(this)');

  document.body.appendChild(balloon);
};

function toBurst(object) {
  document.body.removeChild(object);

  total++;

  let score = document.querySelector('#score');

  score.innerHTML = `Score: ${total}`;
};

function LoadGame() {
  gameTimer = setInterval(createBallon, 0500);
};

function StopGame() {
  clearInterval(gameTimer);
};