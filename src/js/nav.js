$('.menu-btn').on('click', function (e){
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
})
$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $('.header__container').toggleClass('header-menu')

})