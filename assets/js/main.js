let velGame = 1000;

const cChord = new Audio('../sounds/do.mp3');
cChord.playbackRate = 1;
cChord.volume = 0.5;

const dChord = new Audio('./sounds/re.mp3')
dChord.playbackRate = 1
dChord.volume = 0.5;

const eChord = new Audio('./sounds/mi.mp3')
eChord.playbackRate = 1
eChord.volume = 0.5

const fChord = new Audio('./sounds/sol.mp3')
fChord.playbackRate = 1
fChord.volume = 0.5

const quadrantes = [quadrante1, quadrante2, quadrante3, quadrante4];

let jogoMaquina = [];
let jogoUsuario = [];

function roundBot () {
  if (document.getElementById('newRound')) {
    principal.removeChild(document.getElementById('newRound'))
  }
  cleanUserArr ()
  principalTextos.innerHTML = ''
  jogoMaquina.push(Math.floor(Math.random() * 3))

  for (let cont = 0; cont < jogoMaquina.length; cont++) {
    setTimeout (() => { 
      if (jogoMaquina[cont] == '0') {
        setTimeout(() => {quadrante1.classList = 'quadrante1Shine';
          setTimeout(() => {quadrante1.classList = 'quadrante1'; cChord.play()}, 0.9*velGame);
          }, velGame) 
        }
      if (jogoMaquina[cont] == '1') {
        setTimeout(() => {quadrante2.classList = 'quadrante2Shine';
          setTimeout(() => {quadrante2.classList = 'quadrante2'; dChord.play()}, 0.9*velGame);
          }, velGame) 
        }
      if (jogoMaquina[cont] == '2') {
        setTimeout(() => {quadrante3.classList = 'quadrante3Shine';
          setTimeout(() => {quadrante3.classList = 'quadrante3'; eChord.play()}, 0.9*velGame);
          }, velGame) 
        }
      if (jogoMaquina[cont] == '3') {
        setTimeout(() => {quadrante4.classList = 'quadrante4Shine';
          setTimeout(() => {quadrante4.classList = 'quadrante4'; fChord.play()}, 0.9*velGame);
          }, velGame) 
        }
    }, cont*velGame)
  }
  setTimeout(() => {roundUser}, velGame*jogoMaquina.length)
}

function roundUser () {
  principalTextos.innerText = 'Repita a sequência!'
  if (jogoUsuario.length === jogoMaquina.length) {
    for (let cont = 0; cont < jogoMaquina.length; cont++) {
        if (jogoUsuario.length == jogoUsuario.length) {
          if (jogoUsuario[cont] == jogoMaquina[cont]) {
            principalTextos.innerHTML = 'Clique para próxima rodada'
            principal.appendChild(newRound);
          }
          if (jogoUsuario[cont] != jogoMaquina[cont]) {
            principalTextos.innerHTML = 'Que pena! Clique abaixo para reiniciar'
            if (document.getElementById('newRound')) {principal.removeChild(newRound)}principal.removeChild(newRound);
            principal.appendChild(btnRemove);
          }
        }
      }
  }
  if (jogoUsuario.length > jogoMaquina.length) {
    principalTextos.innerHTML = 'Que pena! Clique abaixo para reiniciar'
    if (document.getElementById('newRound')) {principal.removeChild(newRound)}
    principal.appendChild(btnRemove);
  }
  console.log('jogoUsuario')
  console.log(jogoUsuario)
  console.log('jogoMaquina')
  console.log(jogoMaquina)
}

quadrante1.addEventListener('click', () => {jogoUsuario.push(0);roundUser()})
quadrante2.addEventListener('click', () => {jogoUsuario.push(1);roundUser()})
quadrante3.addEventListener('click', () => {jogoUsuario.push(2);roundUser()})
quadrante4.addEventListener('click', () => {jogoUsuario.push(3);roundUser()})



document.querySelector('body').addEventListener('click', (event) => {
  if (event.target.id == 'btnRemove') {
    location.reload();
  }
  if (event.target.id == 'newRound') {
    roundBot ()
  }
})

function cleanUserArr () {
  while (jogoUsuario.length) {
    jogoUsuario.pop()
  }
}