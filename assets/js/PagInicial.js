const main = document.getElementById("main");

function paginaInicial() {
  const quadrante1 = document.createElement("button");
  quadrante1.id = 'quadrante1'
  quadrante1.classList = "quadrante1";
  main.appendChild(quadrante1);

  const quadrante2 = document.createElement("button");
  quadrante2.id = 'quadrante2'
  quadrante2.classList = "quadrante2";
  main.appendChild(quadrante2);

  const principal = document.createElement("section")
  principal.id = 'principal'
  principal.classList = 'principal'
  main.appendChild(principal);
  
  const principalTextos = document.createElement("p")
  principalTextos.id = 'principalTextos'
  principalTextos.innerText = "Clique no botão para iniciar o jogo!";
  principal.appendChild(principalTextos);

  const btnIniciar = document.createElement("button")
  btnIniciar.id = 'btnIniciar'
  btnIniciar.classList = 'buttons'
  btnIniciar.innerText = "INICIAR";
  principal.appendChild(btnIniciar);

  const quadrante3 = document.createElement("button");
  quadrante3.id = 'quadrante3'
  quadrante3.classList = "quadrante3";
  main.appendChild(quadrante3);

  const quadrante4 = document.createElement("button");
  quadrante4.id = 'quadrante4'
  quadrante4.classList = "quadrante4";
  main.appendChild(quadrante4);
}

paginaInicial ()



const newRound = document.createElement("button")
newRound.id = 'newRound'
newRound.classList = 'buttons'
newRound.innerText = "PRÓXIMO";

const btnRemove = document.createElement("button")
btnRemove.id = 'btnRemove'
btnRemove.classList = 'buttons'
btnRemove.innerText = "REINICIAR";