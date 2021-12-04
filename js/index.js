const audioObj = new Audio('../audio/pennywiseLaugh.mp3');
const lightSwitch = document.querySelector('#lightSwitch');
const navbar = document.querySelector('.navbar');
const brandLogo = document.querySelector('#brand-logo');
const pennywiseFace = document.querySelector('#pw-face');
const itemLink = document.querySelector('.item-link');

lightSwitch.addEventListener('click', () => {
    //light mode
    if (lightSwitch.checked) {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-danger');
        brandLogo.style.filter = 'invert(80%)';
        pennywiseFace.style.filter = 'invert(0)';
        itemLink.style.color = 'black';

    } else {
        //dark mode
        document.body.style.background = 'black';
        document.body.style.color = 'white';
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-dark');
        brandLogo.style.filter = 'invert(0)';
        itemLink.style.color = 'white';

        pennywiseFace.style.filter = 'invert(100%)';
    }
})

audioObj.volume = 0.3;
audioObj.play();

