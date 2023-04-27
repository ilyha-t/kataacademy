document.addEventListener("DOMContentLoaded", () => {
    let showAllBrands = document.querySelector('.brands__show-wrapper');
    let resizeViewFrame = document.querySelector('.brands__list');
    let mobileSwiper = document.querySelector('.mobile-swiper');
    let swiperWrapper = mobileSwiper.querySelector('.brands__list');
    let swiperSlide = swiperWrapper.children;
    let mySwiper;
    const pageWidth = window.innerWidth;


    // Create navigation
    let navigation = document.createElement('div');
    navigation.classList.add('swiper-pagination');
    mobileSwiper.appendChild(navigation);

    // check resize window
    const mediaQuery = '(max-width: 768px)';
    const mediaQueryList = window.matchMedia(mediaQuery);

    if (pageWidth < 768) {
        mobile();
    } else {
        desktop();
    };

    // define eventListeners
    showAllBrands.addEventListener('click',()  => changeSizeContainer());
    mediaQueryList.addEventListener('change', event => {
        event.matches ? mobile() : desktop();
    });


    function changeSizeContainer() {
        if (resizeViewFrame.classList.contains('brands__list-active')) {
            showAllBrands.textContent = 'Показать все';
            resizeViewFrame.classList.remove('brands__list-active');
            showAllBrands.classList.remove('brands__show-wrapper-active');
        } else {
            showAllBrands.textContent = 'Скрыть';
            resizeViewFrame.classList.add('brands__list-active');
            showAllBrands.classList.add('brands__show-wrapper-active');
        };
    }

    function mobile() {
        showAllBrands.removeEventListener('click', changeSizeContainer);
        showAllBrands.classList.add('brands__show-wrapper--hidden');
        // Add class library
        mobileSwiper.classList.add('swiper');
        swiperWrapper.classList.add('swiper-wrapper');
        for (let i = 0; i < swiperSlide.length; i++) {
            swiperSlide[i].classList.add('swiper-slide');
        }
        navigation.classList.remove('brands__show-wrapper--hidden');

        mySwiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    };

    function desktop() {
        navigation.classList.add('brands__show-wrapper--hidden');
        mobileSwiper.classList.remove('swiper');
        swiperWrapper.classList.remove('swiper-wrapper');
        showAllBrands.classList.remove('brands__show-wrapper--hidden');
        for (let i = 0; i < swiperSlide.length; i++) {
            swiperSlide[i].classList.remove('swiper-slide');
        }
        mySwiper = null;
    };
});