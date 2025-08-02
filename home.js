// toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () =>{
    menuicon.classList.toggle('fa-bars');
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


// scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header .navbar a');
window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec =>{
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                if(links.getAttribute('href')==='#' + id){
                    links.classList.add('active');
                }
            })
        }
    })


    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar link(scroll)
    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

}

// scroll reveal 
ScrollReveal({ 
    reset: true,
    distance: '50px',
    duration: 1000,
    delay:100 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });


//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Web Developer', 'Coder', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});