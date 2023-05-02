const openMenuBtn = document.querySelector('.header__icon');
const closeMenuBtn = document.querySelector('.burger__close-menu');
const menuItem = document.querySelector('.burger');
const bodyContainer = document.querySelector('body');
const blurBlock = document.querySelector('.blur');

openMenuBtn.addEventListener('click', () => initMenu());
closeMenuBtn.addEventListener('click', () => destroyMenu());
blurBlock.addEventListener('click', () => destroyMenu());

function initMenu() {
    bodyContainer.classList.add('container-disable');
    menuItem.classList.add('burger-show');
}

function destroyMenu() {
    bodyContainer.classList.remove('container-disable');
    menuItem.classList.remove('burger-show');
}