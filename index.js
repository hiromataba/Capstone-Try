const menuBtn = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.nav-links');
const closeMenuBtn = document.querySelector('.close-menu-btn button');


menuBtn.addEventListener('click', () => showMenu());
closeMenuBtn.addEventListener('click', () => closeMenu());

function showMenu(){
  menuLinks.style.display = 'flex';
  menuLinks.classList.add('menu-links');
}

function closeMenu(){
  menuLinks.style.display = 'none';
  menuLinks.classList.remove('menu-links');
}