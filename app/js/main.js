$(function () {
    $('.mobile-bar__menu-button').on('click', function () {
        $('header.header').toggleClass('show-mobile-menu')
    });

    if($(document).outerWidth() <= 1000) {
        $('.main-menu li.has-sub-menu').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('show');

            if($(this).hasClass('show')) {
                $(this).find('.sub-menu').slideDown(200);
            }
            else {
                $(this).find('.sub-menu').slideUp(200);
            }
        });
    }
})