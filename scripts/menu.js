const openMenuBtn = document.querySelector('.header__icon');
const closeMenuBtn = document.querySelector('.burger__close-menu');
const closeMenuRight = document.querySelector('.phone-task__close');
const menuItem = document.querySelector('.burger');
const bodyContainer = document.querySelector('body');
const blurBlock = document.querySelector('.blur-menu');
const blurCall = document.querySelector('.blur-phone');
const phoneIcon = document.querySelectorAll('.phone-icon');
const phoneTask = document.querySelector('.call');
const feedbackTask = document.querySelector('.feedback');
const messageBtn = document.querySelectorAll('.main__message-btn');
const blurFeedback = document.querySelector('.blur-phone-feedback');
const closeFeedback = document.querySelector('.phone-task__close-right');

openMenuBtn.addEventListener('click', () => initMenu(menuItem, 'burger-show'));
closeMenuBtn.addEventListener('click', () => destroyMenu(menuItem, 'burger-show'));
closeMenuRight.addEventListener('click', () => destroyMenu(phoneTask, 'burger-show-right'));
closeFeedback.addEventListener('click', () => destroyMenu(feedbackTask, 'burger-show-right'));

blurCall.addEventListener('click', () => destroyMenu(phoneTask, 'burger-show-right'));
blurFeedback.addEventListener('click', () => destroyMenu(feedbackTask, 'burger-show-right'));
blurBlock.addEventListener('click', () => destroyMenu(menuItem, 'burger-show'));

for (let i = 0; i < phoneIcon.length; i++) {
    phoneIcon[i].addEventListener('click', () => initCall(menuItem, phoneTask));
    messageBtn[i].addEventListener('click', () => initCall(menuItem, feedbackTask));
}

function initCall(destroy, init) {
    destroyMenu(destroy, 'burger-show');
    initMenu(init, 'burger-show-right');
}

function initMenu(item, showClass) {
    bodyContainer.classList.add('container-disable');
    item.classList.add(showClass);
}

function destroyMenu(item, showClass) {
    bodyContainer.classList.remove('container-disable');
    item.classList.remove(showClass);
}