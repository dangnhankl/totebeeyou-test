$(document).ready(function () {
    console.log('script init');
    $('.main-banner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive : [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    arrows: false,
                },
            },
        ]
    });

    $('.slider-product').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow :4,
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 2.1, // Show 2 items on mobile
                    centerPadding: '10px',
                    arrows: false,
                    centerMode: true,
                },
            },

            {
                breakpoint: 992, // Tablet breakpoint
                settings: {
                    slidesToShow: 4, // Show 3 items on tablet
                },
            },
            {
                breakpoint: 1200, // Desktop breakpoint
                settings: {
                    slidesToShow: 4, // Show 4 items on desktop
                },
            },
        ],
    });


    $('.review-slider').slick({
        vertical: true,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        arrows: true,
        /*prevArrow: "<div class='arrow-wrap arrow-wrap-left'><button type='button' class='slick-prev'>Previous</button></div>",
        nextArrow: "<div class='arrow-wrap arrow-wrap-right'><button type='button' class='slick-next'>Next</button></div>",*/
        prevArrow: '.arrows-wrap .prev',
        nextArrow: '.arrows-wrap .next',
        autoplay: true,
        autoplaySpeed: 2000

    });
    $('.instagram-slider').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 4.7,
        loop: true,
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1.75, // Show 2 items on mobile
                    arrows: false,
                },
            },
            {
                breakpoint: 992, // Tablet breakpoint
                settings: {
                    slidesToShow: 3, // Show 3 items on tablet
                },
            },
            {
                breakpoint: 1200, // Desktop breakpoint
                settings: {
                    slidesToShow: 6.5, // Show 4 items on desktop
                },
            },
        ],
    });
});