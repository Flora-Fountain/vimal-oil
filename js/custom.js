$(document).ready(function(){
    $('.home-prod-sldr').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 0,    
        autoplayTimeout: 4000,
        smartSpeed: 400,
        center: true,
        navText: ['&#8592;', '&#8594;'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });
       
});