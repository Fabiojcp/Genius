const principal = document.getElementById('principal')
const principalTextos = document.getElementById('principalTextos')
const btnIniciar = document.getElementById('btnIniciar')
const quadrante1 = document.getElementById('quadrante1')
const quadrante2 = document.getElementById('quadrante2')
const quadrante3 = document.getElementById('quadrante3')
const quadrante4 = document.getElementById('quadrante4')



btnIniciar.addEventListener('click', iniciarGame)

function iniciarGame() {
  btnIniciar.remove()

  let sequencia = [];
  setTimeout(() => {principalTextos.innerText = 'Preste atenção à sequência';
    setTimeout(() => {principalTextos.innerText = 'Seu jogo começara em';
      setTimeout(() => {principalTextos.innerText = '3';
        setTimeout(() => {principalTextos.innerText = '2';
          setTimeout(() => {principalTextos.innerText = '1';
            setTimeout(() => {roundBot ()}, 1000)
          }, 1000)
        }, 1000)
      }, 1200)
    }, 1200)
  }, 1)  
}