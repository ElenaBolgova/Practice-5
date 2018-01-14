$(window).ready(function() {

    ///// MODAL /////

    $('.get-modal').click(function() {
        $('.modal').fadeIn(400).css('display', 'flex');
    });

    $('.modal').click(function(event) {
        var clickedElement = event.target;
        if(!$(clickedElement).closest('.modal-inner').length) {
            $('.modal').fadeOut(400);
        }
        if($(clickedElement).hasClass('close-modal')) {
            $('.modal').fadeOut(400);
        }
    });

    ///// CUSTOM CHECK /////
    /*Глюк при нажатии на текст справа от CHECKBOX - галочка ставится и сразу пропадает,
    вне текста в этом же блоке галочка ведет себя как нужно*/

    $('.custom-check').click(function() {
        var hiddenCheck = $('.fa-check');
        $(hiddenCheck).fadeOut(100);
        hiddenCheck.show();
    });

    ///// BURGER /////

    /* ВАРИНТ1 (как делали на занятии)
     При нажатии на бургер - меню не пропадает */

    /*$('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('.menu').toggleClass('active');
    });*/

    /* ВАРИАНТ2*/

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('.menu').fadeToggle(100);
    });

    ///// CUSTOM COUNTER /////

    var defaultCounterValue = 1;
    $('.counter-value').text(defaultCounterValue); /*default value for counter*/
    $('.custom-counter input').val(defaultCounterValue);

    $('.counter-plus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        current++;
        $(this).siblings('.counter-value').text(current);
        $(this).siblings('input').val(current);
    });

    $('.counter-minus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        if(current > 1) {
            current--;
            $(this).siblings('.counter-value').text(current);
            $(this).siblings('input').val(current);
        }
    });

});