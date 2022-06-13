const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
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



// ====== Efectos de Scroll =======


const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal('.text_section', {origin: 'left'})
sr.reveal('.images_section', {origin: 'right'})
sr.reveal('.home_services_container, .our_students_container, .services_container, .volunteers_container',  {delay: 300})
