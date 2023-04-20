let active = false;
let showAllBrands = document.querySelector('.brands__show-wrapper');
let resizeViewFrame = document.querySelector('.brands__list');

showAllBrands.addEventListener('click', function () {
    active = !active;
    if (active) {
        showAllBrands.textContent = 'Скрыть';
        resizeViewFrame.classList.add('brands__list-active');
    } else {
        showAllBrands.textContent = 'Показать все';
        resizeViewFrame.classList.remove('brands__list-active');
    };
});