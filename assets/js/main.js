$(document).ready(function(){
    //Slick Slider banner-area active
    $('.banner-area').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        infinite: true,
        autoplay: true,
        loop: true,
    });
});


$(window).load(function(){

    // Sticky Menu
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    })
})