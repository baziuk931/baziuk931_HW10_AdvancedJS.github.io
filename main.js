const keyBoxes = document.querySelectorAll('.key');
const keyboardArray = Array.from(keyBoxes);
const sounds = document.querySelectorAll('.sound');
const soundsArray = Array.from(sounds);


document.addEventListener('keypress', function(e) {

    keyboardArray.map((el, i) => {
        if (el.id === e.code) {
            soundsArray[i].play();
            el.style.backgroundColor = '#94f39477';
        } else{
            soundsArray[i].pause();
            el.style.backgroundColor = 'rgba(240, 248, 255, 0.754)';
        }
    });
})

