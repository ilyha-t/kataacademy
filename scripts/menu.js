const openMenuBtn = document.querySelector('.header__icon');
const closeMenuBtn = document.querySelector('.burger__close-menu');
const closeMenuRight = document.querySelector('.phone-task__close');
const menuItem = document.querySelector('.burger');
const bodyContainer = document.querySelector('body');
const blurBlock = document.querySelector('.blur-menu');
const blurCall = document.querySelector('.blur-phone');
const phoneIcon = document.querySelector('.phone-icon');
const phoneTask = document.querySelector('.call');

openMenuBtn.addEventListener('click', () => initMenu(menuItem, 'burger-show'));
closeMenuBtn.addEventListener('click', () => destroyMenu(menuItem, 'burger-show'));
closeMenuRight.addEventListener('click', () => destroyMenu(phoneTask, 'burger-show-right'));
blurCall.addEventListener('click', () => destroyMenu(phoneTask, 'burger-show-right'));
blurBlock.addEventListener('click', () => destroyMenu(menuItem, 'burger-show'));
phoneIcon.addEventListener('click', () => initCall());

function initCall() {
    destroyMenu(menuItem, 'burger-show');
    initMenu(phoneTask, 'burger-show-right');
}

function initMenu(item, showClass) {
    bodyContainer.classList.add('container-disable');
    item.classList.add(showClass);
}

function destroyMenu(item, showClass) {
    bodyContainer.classList.remove('container-disable');
    item.classList.remove(showClass);
}