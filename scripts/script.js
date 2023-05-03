class Slider {
    constructor(wrapperClass, sliderClass, showWrapper = null, activeClass= null) {
        this.wrapper = document.querySelector(wrapperClass);
        this.slider = this.wrapper.querySelector(sliderClass);
        this.slides = this.slider.children;
        this.pagination = document.createElement('div');
        this.pagination.classList.add('swiper-pagination');
        this.wrapper.appendChild(this.pagination);
        this.showWrapper = document.querySelector(showWrapper);
        this.activeClass = activeClass;
        this.init();
    }

    init() {
        const mediaQuery = '(max-width: 768px)';
        const mediaQueryList = window.matchMedia(mediaQuery);
        const pageWidth = window.innerWidth;

        if (pageWidth < 768) {
            this.initMobile();
        } else {
            this.initDesktop();
        };

        mediaQueryList.addEventListener('change', event => {
            event.matches ? this.initMobile() : this.initDesktop();
        });
        if (this.showWrapper !== null) {
            this.showWrapper.addEventListener('click',()  => this.changeSizeContainer());
        }
    }

    initMobile() {
        if (this.showWrapper !== null) {
            this.showWrapper.classList.add('brands__show-wrapper--hidden');
        }
        this.wrapper.classList.add('swiper');
        this.slider.classList.add('swiper-wrapper');
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add('swiper-slide');
        }
        this.pagination.classList.remove('brands__show-wrapper--hidden');
        this.swiper = new Swiper('.swiper', {
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }

    initDesktop() {
        this.showWrapper.classList.remove('brands__show-wrapper--hidden');
        this.pagination.classList.add('brands__show-wrapper--hidden');
        this.wrapper.classList.remove('swiper');
        this.slider.classList.remove('swiper-wrapper');
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove('swiper-slide');
        }
        this.swiper = null;
    }

    changeSizeContainer() {
        if (this.slider.classList.contains(this.activeClass)) {
            this.showWrapper.textContent = 'Показать все';
            this.slider.classList.remove(this.activeClass);
            this.showWrapper.classList.remove('brands__show-wrapper-active');
        } else {
            this.showWrapper.textContent = 'Скрыть';
            this.slider.classList.add(this.activeClass);
            this.showWrapper.classList.add('brands__show-wrapper-active');
        };
    }
}

const firstWrapper = new Slider('.brands__swiper', '.brands__list', '.brands__show-wrapper', 'brands__list-active');
const doubleWrapper = new Slider('.repair__swiper', '.repair__list', '.repair__show-wrapper', 'repair__list-active');
const thirdWrapper = new Slider('.services__swiper', '.services__list')