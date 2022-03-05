$('.rev_slider').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 1,
    arrows: false,
    loop:false,
    responsive:[{
            breakpoint: 1024,
        settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    }]
});