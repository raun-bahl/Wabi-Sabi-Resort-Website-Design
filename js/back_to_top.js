/* This js file handles the functionality for the back-to-top function */
$(document).ready(function(){

  /* .scrollTop() gets the vertical position
    of the scroll bar. If the scroll bar is
    at the top, it returns 0. This if statement 
    essentially checks if the window has been
    scrolled down by some amount, then .fadeIn()
    the scroll-to-top button. Once the value 
    returned drops to either equal to or less than
    200, the button fades out. */
    $(window).scroll(function(){

        if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    /* Upon clicking the scroll-to-top button,
       the  user is taken to the top using jQuery's
       .animate() with a speed of 900, and false is
       returned by the function. */
    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0}, 900);
        return false;
    });

});

