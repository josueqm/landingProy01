// Button Back To Top
let backToTop = document.getElementById('back-to-top')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
}

// Añadimos la funcion al boton

backToTop.addEventListener('click', function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y opera
});

// Links Roadmap

const stages = document.querySelectorAll('.card-stage');

const urls = ["https://www.example1.com", "https://www.example2.com", "https://www.example3.com", "https://www.example4.com"];

stages.forEach(function(div, index) {
    div.addEventListener('click', function() {
        window.location.href = urls[index];
    });
});

// Scroll Sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                let navLink = document.querySelector('.navbar-nav .nav-item a[href*=' + id + ']');
                if (navLink) {
                    navLink.classList.add('active');
                }
                let header = document.querySelector('header');
                header.classList.toggle('sticky', window.scrollY > 100);
            })
        }
    })
}