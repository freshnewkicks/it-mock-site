const lightSwitch = document.querySelector('#lightSwitch');
const navbar = document.querySelector('.navbar');
const brandLogo = document.querySelector('#brand-logo');
const itemLink = document.querySelector('.item-link');
const signUpModal = document.querySelector('.sign-up-modal');
const modal = document.querySelector('#modal');
const btn = document.querySelector('.btn');

//dark/light mode switch
lightSwitch.addEventListener('click', () => {
    let docBody = document.body;
    if (lightSwitch.checked) {
        //light mode
        docBody.style.background = 'white';
        document.body.style.color = 'black';
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-danger');
        brandLogo.style.filter = 'invert(80%)';
        itemLink.style.color = 'black';
    } else {
        //dark mode
        docBody.style.background = 'black';
        docBody.style.color = 'white';
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-dark');
        brandLogo.style.filter = 'invert(0)';
        itemLink.style.color = 'white';
    }
})

signUpModal.addEventListener('click', () =>{
    if (!modal.classList.contains('active')){
        modal.classList.add('active');
    }

    if (modal.classList.contains('active')){
        modal.style.display = 'block';
    }
})


btn.addEventListener('click', () => {
    modal.innerHTML = '<h1>Keep an eye on your email for more updates about IT The Movie</h1>'
    setTimeout(() => {
        modal.remove();
    }, 5000)
})