const lightSwitch = document.querySelector('#lightSwitch');
const navbar = document.querySelector('.navbar');
const brandLogo = document.querySelector('#brand-logo');
const itemLink = document.querySelector('.item-link');
const tabTabs = document.querySelector('.nav-tabs');
const tabItem = document.querySelector('.tab-item');
const tabContent = document.querySelector('.tab-content');


let tabItemLinks = [
    document.querySelector('#first-tab-link'),
    document.querySelector('#second-tab-link'),
    document.querySelector('#third-tab-link'),
    document.querySelector('#fourth-tab-link')
]

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

//tabs
//there is a much better way to achieve this, either making an object
//or iterating over the array and checking if any item has been clicked
//but for the sake of time i copy/pasted these event listeners
//and just changed the array indices
//keep in mind this is NOT the most efficient way to achieve this

tabItemLinks[0].addEventListener('click', () => {
    if (!tabItemLinks[0].classList.contains('active')){
        tabItemLinks[0].classList.add('active');
        tabContent.innerHTML = '<h3>The Cast Interviews</h3>' +
            '<hr>' +
            '<p>Click any of the tabs to watch the corresponding interviews</p>' +
            '<p>Please allow a couple seconds for the embedded videos to load</p>'
    }

    if (tabItemLinks[1].classList.contains('active') || tabItemLinks[2].classList.contains('active') || tabItemLinks[3].classList.contains('active')){
        tabItemLinks[1].classList.remove('active');
        tabItemLinks[2].classList.remove('active');
        tabItemLinks[3].classList.remove('active');
    }
})

tabItemLinks[1].addEventListener('click', () => {
    if (!tabItemLinks[1].classList.contains('active')){
        tabItemLinks[1].classList.add('active');
        tabContent.innerHTML = '<iframe width="560" height="315" ' +
            'src="https://www.youtube.com/embed/0eu3qpDFhjo?controls=0" ' +
            'title="YouTube video player" allow="accelerometer; ' +
            'autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    }

    if (tabItemLinks[0].classList.contains('active') || tabItemLinks[2].classList.contains('active') || tabItemLinks[3].classList.contains('active')){
        tabItemLinks[0].classList.remove('active');
        tabItemLinks[2].classList.remove('active');
        tabItemLinks[3].classList.remove('active');
    }

})

tabItemLinks[2].addEventListener('click', () => {
    if (!tabItemLinks[2].classList.contains('active')){
        tabItemLinks[2].classList.add('active');
        tabContent.innerHTML = '<iframe width="560" height="315"' +
            ' src="https://www.youtube.com/embed/e2LGfUQ2L5o?controls=0" title="YouTube video player" ' +
            'allow="accelerometer; ' +
            'autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

    if (tabItemLinks[1].classList.contains('active') || tabItemLinks[0].classList.contains('active') || tabItemLinks[3].classList.contains('active')){
        tabItemLinks[1].classList.remove('active');
        tabItemLinks[0].classList.remove('active');
        tabItemLinks[3].classList.remove('active');
    }
})

tabItemLinks[3].addEventListener('click', () => {
    if (!tabItemLinks[3].classList.contains('active')){
        tabItemLinks[3].classList.add('active');
        tabContent.innerHTML = '<iframe width="560" height="315" ' +
            'src="https://www.youtube.com/embed/drgWkI-vdDw?controls=0" title="YouTube video player" ' +
            'allow="accelerometer; ' +
            'autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

    if (tabItemLinks[1].classList.contains('active') || tabItemLinks[2].classList.contains('active') || tabItemLinks[0].classList.contains('active')){
        tabItemLinks[1].classList.remove('active');
        tabItemLinks[2].classList.remove('active');
        tabItemLinks[0].classList.remove('active');
    }
})