$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
});

new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
new Swiper('.image-slider2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        769: {
            slidesPerView: 2,
            initialSlide:1,

        },
        900: {
            slidesPerView: 3,
            initialSlide:1,

        }
    },
    centeredSlides: true,

});