window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const isWide = window.innerWidth >= 900; // wider than 900px?

    if (!isWide) {
        // On small screens, always remove class
        header.classList.remove('scrolled');
        return;
    }

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const swiper = new Swiper('.slider-wrapper', {
    loop: false,
    grabCursor: true,
    spaceBetween: 0,
    centeredSlides: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        }
    }
});