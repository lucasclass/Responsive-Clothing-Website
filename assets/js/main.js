/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle =  document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    /* Menu Show */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    768:{
      slidesPerView: 3,
      centeredSlides: 'auto',
    },
    1152:{
      centeredSlides: 'auto',
      spaceBetween: -64,
    }
  }
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll, bgHeader')

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
})

sr.reveal(`.home__swiper, .home__footer`)
sr.reveal(`.home__circle`, {scale: 1.5, delay: 300})
sr.reveal(`.home__subcircle`, {scale: 1.5, delay: 500})
sr.reveal(`.home__title`, {scale: 1.5, origin: 'bottom', delay: 1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {origin: 'bottom', delay: 1200})