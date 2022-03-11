//----------------PEGANDO TAG HTLM----------------//

const genius = {

    nomeJogador: document.querySelector('.main--player-name'),
    nivelJogador: document.querySelector('.main--player-counter'),
    displayComputador: document.querySelector('.card-game'),
    infoCentral: document.querySelector('.main--centerr-information'),
    buttonIniciar: document.querySelector('.button-start')
}


//----------------TRABALHANDO MODAL----------------//

//----------------ABRINDO MODAL----------------//
const containerModal = document.querySelector('.container--modal');

genius.buttonIniciar.addEventListener('click', function (){
    containerModal.classList.add('container--modal-opacity')

})

//----------------FECHANDO MODAL (click)----------------//

const fecharModal = document.querySelectorAll('.fechar');


const fechandoModal = (e) => {

    containerModal.classList.remove('container--modal-opacity')
}

fecharModal.forEach(fecha => fecha.addEventListener('click',fechandoModal));

//----------------FECHANDO MODAL (Enter)----------------//



document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        const btn = document.querySelector(".modal--input");        
        valoresInput(fechandoModal(btn))
      
      
    
    }
  });



//----------------Pegando valores Modal----------------//



const valoresInput = (e) => {

    let nomeJogador = document.querySelector('.main--player-name');
    let  inputModal = document.querySelector('.modal--input').value; 
    
    


    nomeJogador.innerHTML = inputUpperCase(inputModal)
    
}



const buttonSumitModal = document.querySelector('.modal--button');
buttonSumitModal.addEventListener('click',valoresInput)

//----------------tratando texto Input----------------//

const inputUpperCase = (e) => {

    let letter = e.split('')

    let arr = [];

    for(let contador =0; contador <letter.length; contador ++){
        let index = letter[contador]

        if(index === letter[0]){

            arr.push(index.toUpperCase())

        }
        else arr.push(index)
        
    }

    return arr.join('')
  
}



//----------------Evento dos CLIQUE----------------//

document.addEventListener('click', function(e){

    const el = e.target;

    
    if(el === genius.displayComputador){

        console.log('clique')


        


    }


})

///capturando botoes e add event listener///
let botaoVerde = document.getElementById('verde')
botaoVerde.addEventListener('click', addCoresJogadorVerde)

let botaoVermelho = document.getElementById('vermelho')
botaoVermelho.addEventListener('click', addCoresJogadorVermelho)

let botaoAzul = document.getElementById('azul')
botaoAzul.addEventListener('click', addCoresJogadorAzul)

let botaoAmarelo = document.getElementById('amarelo')
botaoAmarelo.addEventListener('click', addCoresJogadorAmarelo)

//----------------SEQUENCIA DE CORES----------------//
const cores = ['verde', 'vermelho', 'azul', 'amarelo']
let sequenciaMaquina = ['verde', 'amarelo']
let sequenciaJogador = []


function addCores(){
let random = Math.floor(Math.random()*cores.length)
sequenciaMaquina.push(cores[random])
}



////LOGICA JOGO////

function iniciar(){
    addCores()

}


// function blink(){
// botaoVerde.classList.add('cardPiscandoVerde')
// setTimeout(function () {botaoVerde.classList.remove('cardPiscandoVerde')}, 1000)

// }

///verifica qual luz deve piscar
function piscar(){
    for(let i = 0; i<sequenciaMaquina.length; i++){
        if(sequenciaMaquina[i].includes('verde')){
                botaoVerde.classList.add('cardPiscandoVerde')
                setTimeout(function () {botaoVerde.classList.remove('cardPiscandoVerde')}, 1000)
        }
        else if(sequenciaMaquina[i].includes('vermelho')){
            botaoVermelho.classList.add('cardPiscandoVermelho')
            setTimeout(function () {botaoVerde.classList.remove('cardPiscandoVermelho')}, 1000)
        }
        else if(sequenciaMaquina[i].includes('azul')){
            botaoAzul.classList.add('cardPiscandoAzul')
            setTimeout(function () {botaoAzul.classList.remove('cardPiscandoAzul')}, 1000)
        }
        else if(sequenciaMaquina[i].includes('amarelo')){
            botaoAmarelo.classList.add('cardPiscandoAmarelo')
            setTimeout(function () {botaoAmarelo.classList.remove('cardPiscandoAmarelo')}, 1000)
        }
    }
}




///add ao array do jogador
function addCoresJogadorVerde(){
    sequenciaJogador.push('verde')
}

function addCoresJogadorVermelho(){
    sequenciaJogador.push('vermelho')
}

function addCoresJogadorAzul(){
    sequenciaJogador.push('azul')

}

function addCoresJogadorAmarelo(){
    sequenciaJogador.push('amarelo')
}


///verifica os arrays///
function verificar(){
if(sequenciaJogador === sequenciaMaquina){
    console.log('Voce acertou!')
}else{
    console.log('Errou!')
}
}








//----------------DISPLAY RODADA----------------//

// const rodadaJogador =() =>{

//     let contadora = 0;

//     genius.nivelJogador = contadora;}
