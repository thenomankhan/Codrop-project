
// owl-carousel start

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    margin:100,
    center:true,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})


// owl-carousel end

// counterup start

$(function(){
    "use strict"
    $('.counter').counterUp({
        delay: 9,
        time: 900
    });
    
});






















