//===================================================Navbar=================================
// Show Menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// menu show 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu Close 

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
//===================================================Slider=================================
// slider

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(n) {
    if (n >= dots.length) index = 0;
    if (n < 0) index = dots.length - 1;

    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        index = parseInt(dot.getAttribute('data-slide'));
        showSlide(index);
    });
});

setInterval(nextSlide, 3000);

showSlide(index);


//==========================product slider===========================================

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    on: {
        slideChangeTransitionStart: function() {
            adjustOpacity();
        },
    },

});


// Function to adjust the opacity of the slides
function adjustOpacity() {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        if (slide.classList.contains('swiper-slide-active')) {
            slide.style.opacity = '1';
        } else if (slide.classList.contains('swiper-slide-prev') || slide.classList.contains('swiper-slide-next')) {
            slide.style.opacity = '0.8';
        } else {
            slide.style.opacity = '0.8';
        }
    });
}

// Initialize the opacity adjustment when the page loads
adjustOpacity();