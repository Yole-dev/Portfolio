`use strict`

const body = document.querySelector('body');
const openNavBtn = document.querySelector('.openNav');
const closeNavBtn = document.querySelector('.closeNav');
const mobileNav = document.querySelector('.mobileNav');

openNavBtn.addEventListener('click', function(){
    openNavBtn.classList.add('displayNone');
    closeNavBtn.classList.remove('displayNone');
    mobileNav.style.display = 'flex';
})

closeNavBtn.addEventListener('click', function(){
    closeNavBtn.classList.add('displayNone');
    openNavBtn.classList.remove('displayNone');
    mobileNav.style.display = 'none';
})