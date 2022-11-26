new WOW().init();

$(".customer-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

$(window).scroll(function () {
    if ($(window).width() < 992) {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-white shadow');
        } else {
            $('.fixed-top').removeClass('bg-white shadow');
        }
    } else {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-white shadow').css('top', -45);
        } else {
            $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
        }
    }
});

let aboutOffset=$('#about').offset().top;

$(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    if(windowScroll >aboutOffset){
        $('.back-to-top').css('display','block')
    }else{
        $('.back-to-top').css('display','none')
    }
})
$('.back-to-top').click(function(){
    // $(window).scrollTop(0)

    $('body,html').animate({scrollTop:0},3000)
})