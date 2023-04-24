let active = false;
let showAllBrands = document.querySelector('.brands__show-wrapper');
let resizeViewFrame = document.querySelector('.brands__list');
let mobileSwiper = document.querySelector('#mobile-swiper');

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768) {
    showAllBrands.style.display = 'none';
    // Add class library
    mobileSwiper.classList.add('swiper');
    let swiperWrapper = mobileSwiper.querySelector('.brands__list');
    swiperWrapper.classList.add('swiper-wrapper');
    let swiperSlide = swiperWrapper.children;
    for (let i = 0; i < swiperSlide.length; i++) {
        swiperSlide[i].classList.add('swiper-slide');
    }

    // Create navigation
    let navigation = document.createElement('div');
    navigation.classList.add('swiper-pagination');
    mobileSwiper.appendChild(navigation);

    let mySwiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
}


showAllBrands.addEventListener('click', function () {
    active = !active;
    if (active) {
        showAllBrands.textContent = 'Скрыть';
        resizeViewFrame.classList.add('brands__list-active');
        showAllBrands.classList.add('brands__show-wrapper-active');
    } else {
        showAllBrands.textContent = 'Показать все';
        resizeViewFrame.classList.remove('brands__list-active');
        showAllBrands.classList.remove('brands__show-wrapper-active');
    };
});