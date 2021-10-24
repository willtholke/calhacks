/* Global variables */
let stars = document.getElementById('star');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let btn = document.getElementById('learn');
let sather = document.getElementById('sather');
let navbar = document.getElementById('navbar');

function bgScroll() {
  let px = window.scrollY;
  stars.style.left = px * 0.2 + 'px';
  moon.style.top= px * 1.05 + 'px';
  text.style.marginRight = px * 4 + 'px';
  text.style.marginTop = px * 1.5 + 'px';
  btn.style.marginTop = px * 1.5 + 'px';
  navbar.style.marginTop = px * 0.5 + 'px';
}

window.addEventListener('scroll', bgScroll)