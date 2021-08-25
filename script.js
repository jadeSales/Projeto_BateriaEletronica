// document.body = pega qualquer ação da body toda
// addEventListener = interpreta eventos/clicks que ocorrem na página (clics, digitação) 
// keyup = tecla pressiona-solta / keydown = tecla pressionada 

document.body.addEventListener('keyup', (event)=>{
   playSound(event.code.toLowerCase()); // funcao tocarMusica  
});


//pega elemento button do html e add o evento ao clicar 
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value; //variavel que pega o "valor" que foi digitado

        if(song !== '') { // se variavel song for diferente de vazio ou seja, tiver coisas digitadas
        let songArray = song.split(''); // var songArray pega a sequencia digitada e cria uma lista/array
        playComposition(songArray); //função que possui a array
    }
});




function playSound(sound) { 
    let audioElement =  document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0; // faz o som tocar novamente sem pausa 
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active'); // pega classe do css e ativa a estilização

        setTimeout(()=>{ //faz a ação acontecer conforme um tempo determinado
            keyElement.classList.remove('active'); // pega a classe do css que estava ativa e remove 
        }, 300); // em 300 milésimos 
    }
}

function playComposition(songArray) {
    //fazer o loop esperar e acontecer com tempo determinado
    let wait = 0;


    for(let songItem of songArray) { //loop/repetição var songItem possui cada item da array
        setTimeout(() => {
            playSound(`key${songItem}`); //ao apertar o botao, toca o que foi digitado
        }, wait);

        wait += 250;

         
    }
}