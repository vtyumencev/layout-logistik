$(function () {
    $('.mobile-bar__menu-button').on('click', function () {
        $('header.header').toggleClass('show-mobile-menu')
    });

    if($(document).outerWidth() <= 1000) {


        $('.main-menu li.has-sub-menu > .main-menu__item-link').on('click', function (e) {
            e.preventDefault();

            let el = $(this).parent();
            el.toggleClass('show');

            if(el.hasClass('show')) {
                el.find('.sub-menu').slideDown(200);
            }
            else {
                el.find('.sub-menu').slideUp(200);
            }
        });

    }
})