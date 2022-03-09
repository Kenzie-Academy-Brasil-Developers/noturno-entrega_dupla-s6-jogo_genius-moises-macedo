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

//----------------FECHANDO MODAL----------------//

const fecharModal = document.querySelectorAll('.fechar');


const fechandoModal = () => {

    containerModal.classList.remove('container--modal-opacity')
}

fecharModal.forEach(fecha => fecha.addEventListener('click',fechandoModal));

//----------------Pegando valores Modal----------------//



const valoresInput = () => {

    let nomeJogador = document.querySelector('.main--player-name');
    const  inputModal = document.querySelector('.modal--input').value;  

    nomeJogador.innerHTML = inputModal   
    
}


const buttonSumitModal = document.querySelector('.modal--button');
buttonSumitModal.addEventListener('click',valoresInput)

console.log(getComputedStyle(buttonSumitModal).backgroundColor)



//----------------Evento dos CLIQUE----------------//

document.addEventListener('click', function(e){

    const el = e.target;

    if(el === genius.buttonIniciar) {

        document.querySelector('.main--container-level').style.display = 'block'
    }
    if(el === genius.displayComputador){

        console.log('clicado')



    }


})

//----------------SEQUENCIA DE CORES----------------//





//----------------DISPLAY RODADA----------------//

// const rodadaJogador =() =>{

//     let contadora = 0;

//     genius.nivelJogador = contadora;



// }

