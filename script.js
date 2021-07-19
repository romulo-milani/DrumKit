window.addEventListener('keydown', playSound);


function playSound (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; //voltar o audio no começo
    audio.play();
    
    key.classList.add('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition (e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing')

};