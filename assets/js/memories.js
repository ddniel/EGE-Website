const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

// ======MOSTRAR MENU=========

const navMenu = document.getElementById('nav-menu')
const navOpen = document.getElementById('menu-button')
const navClose = document.getElementById('menu-close')

if (navOpen){
  navOpen.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

if (navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*REMOVER MENU MOVIL AL SELECCIONAR UNA PESTANA*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
