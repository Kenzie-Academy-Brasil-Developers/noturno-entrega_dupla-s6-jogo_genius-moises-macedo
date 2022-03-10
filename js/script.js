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

//----------------SEQUENCIA DE CORES----------------//







//----------------DISPLAY RODADA----------------//

// const rodadaJogador =() =>{

//     let contadora = 0;

//     genius.nivelJogador = contadora;



// }

