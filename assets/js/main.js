(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //--------------- SWIPER Hero ---------------
        let swiperTestimonial = new Swiper(".hero__wrap", {
            spaceBetween: 14,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
            },
        });


        //--------------- SWIPER Experience ---------------
        let swiperTestimonial2 = new Swiper(".experience__wrap", {
            spaceBetween: 35,
            loop: true,
            grabCursor: true,
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });


        //------------ Hero slider -------------
        $('.hositality__wrapper').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<i class="far fa-long-arrow-alt-left"></i>', '<i class="far fa-long-arrow-alt-right"></i>'],
            dot: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })




    }); //---document-ready-----



}(jQuery));