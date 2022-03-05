$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.header__navbar').toggleClass('header__navbar_active')
        $('.burger').toggleClass('open')
    })
})