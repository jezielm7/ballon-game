let total = 0;
let remove = 0;
let gameTimer = null;

function createBallon() {
  let ballon = document.createElement('div');

  ballon.setAttribute('class', 'ballon');

  let x = Math.floor(Math.random() * 600);
  let y = Math.floor(Math.random() * 400);

  ballon.setAttribute('style', 'left:' + x + 'px; top:' + y + 'px;');
  ballon.setAttribute('onclick', 'toBurst(this)');
  ballon.setAttribute('onload', 'destroyBallon(this)');

  document.body.appendChild(ballon);
};

function toBurst(object) {
  document.body.removeChild(object);

  total++;

  let score = document.querySelector('#total');

  score.innerHTML = `Score: ${total}`;
};

function destroyBallon(object) {
  document.body.removeChild(object);
};

function LoadGame() {
  gameTimer = setInterval(createBallon, 1000);
  remove = setInterval(destroyBallon, 5000);
};

function StopGame() {
  clearInterval(gameTimer);
};