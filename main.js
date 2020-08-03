$(document).ready(function () {
  // $('.menu-toggler').on('click', function () {
  //   $(this).toggleClass('open');
  //   $('.top-nav').toggleClass('open');
  // })

// $('.top-nav .nav-link').on('click', function () {
//   $('.menu-toggler').removeClass('open');
//   $('.top-nav').removeClass('open');
// });

$('nav a[href*="#"]').on('click', function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  }, 2000)
});

$('#up').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 2000)
});
});

AOS.init({
  easing: 'ease',
  duration: 1800,
  once: true
})


const menu = document.querySelector('.menu-toggler');
const topNav = document.querySelector('.top-nav');
const navLink = document.querySelector('.nav-link');
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  topNav.classList.toggle('open');
});
topNav.addEventListener('click', () => {
  // menu.classList.remove('open');
  topNav.classList.remove('open');
});
navLink.addEventListener('click', () => {
  menu.classList.remove('open');
  // topNav.classList.remove('open');
});