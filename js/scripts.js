function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // stop the function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's a transform
    this.classList.remove('playing');
}

const key = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('.transitionend', removeTransition));

window.addEventListener('keydown', playSound);