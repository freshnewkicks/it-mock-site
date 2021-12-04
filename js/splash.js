let b = document.querySelector('#balloon');


b.addEventListener('click', () => {
    let audioObj = new Audio('../audio/pop.mp3');
    audioObj.volume = 0.3;
    audioObj.play();
    b.remove();
    setTimeout(() => {
        window.location.href = '../html/index.html'
    }, 1800)
})

