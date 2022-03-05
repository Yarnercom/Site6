$('.single-item').slick({
    centerMode: true,
    centerPadding: '230px',
    slidesToShow: 1,
    arrows: false,
    responsive:[{
        breakpoint: 425,
        settings:{
            centerPadding: '70px',
            slidesToShow: 1,
        }
    }]
});