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
const allItemsNav = document.querySelectorAll('.main__service-item');
const allBurgerItems = document.querySelectorAll('.burger__item');
const allLinkNav = document.querySelectorAll('.main__service-link');
const firstInputCall = phoneTask.querySelector('.phone-task__order-input');
const secondInputCall = feedbackTask.querySelector('.phone-task__order-input');
const sendFeedback = document.querySelectorAll('.phone-task__send-btn');

openMenuBtn.addEventListener('click', () => initMenu(menuItem, 'burger-show'));
closeMenuBtn.addEventListener('click', () => destroyMenu(menuItem, 'burger-show'));
closeMenuRight.addEventListener('click', () => destroyMenu(phoneTask, 'burger-show-right'));
closeFeedback.addEventListener('click', () => destroyMenu(feedbackTask, 'burger-show-right'));
sendFeedback[0].addEventListener('click', (e) => {
    e.preventDefault();
    sendData(phoneTask);
});

sendFeedback[1].addEventListener('click', (e) => {
    e.preventDefault();
    sendData(feedbackTask);
});


blurCall.addEventListener('click', () => destroyMenu(phoneTask, 'burger-show-right'));
blurFeedback.addEventListener('click', () => destroyMenu(feedbackTask, 'burger-show-right'));
blurBlock.addEventListener('click', () => destroyMenu(menuItem, 'burger-show'));

for (let i = 0; i < phoneIcon.length; i++) {
    phoneIcon[i].addEventListener('click', () => {
        initCall(menuItem, phoneTask);
    });
    messageBtn[i].addEventListener('click', () => initCall(menuItem, feedbackTask));
}

allItemsNav.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        activateNavItem(element);
    });
})

// allItemsNav.forEach((element) => {
//     element.addEventListener('keydown', (e) => {
//         e.preventDefault();
//         if (e.keyCode === 9) {
//             activateNavItem(element);
//         }
//     });
// })

allBurgerItems.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        for (item of allBurgerItems) {
            if (item.classList.contains('burger__main-link-active')) {
                item.classList.remove('burger__main-link-active');
            }
        }
        element.classList.add('burger__main-link-active');
    });
});

function sendData(task) {
    destroyMenu(task, 'burger-show-right');
}

function activateNavItem(element) {
    for (item of allItemsNav) {
        if (item.classList.contains('main__service-active')) {
            item.classList.remove('main__service-active');
        }
    }
    element.classList.add('main__service-active');
}

function initCall(destroy, init) {
    destroyMenu(destroy, 'burger-show');
    initMenu(init, 'burger-show-right');
    firstInputCall.focus();
    secondInputCall.focus();
}

function initMenu(item, showClass) {
    bodyContainer.classList.add('container-disable');
    item.classList.add(showClass);
}

function destroyMenu(item, showClass) {
    bodyContainer.classList.remove('container-disable');
    item.classList.remove(showClass);
}