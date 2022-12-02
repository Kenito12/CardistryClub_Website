const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


// fetch element with class name toogle-button and navbar-link when click and add class active with toggle behavior
toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
});
