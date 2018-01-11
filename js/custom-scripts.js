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

    ///// BURGER /////

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('.menu').toggleClass('active');
    });

});