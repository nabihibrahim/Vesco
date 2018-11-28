/*================================
            nice scroll
================================*/
$(function() {
   $('html').niceScroll({
        cursorcolor:'#34c6d3',
        cursorwidth: 10,
        cursorborderradius:0,
        cursorborder:'1px solid #9b59b6'
    }); 
});
/*================================
            service
================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});
/*================================
            work
================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*================================
            team        
================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            1000:{
                items: 4
            }
        }
    });
});
/*================================
            testimonials        
================================*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*================================
            stats        
================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*================================
            clients        
================================*/
$(function () {
    $("#clients-logos").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });
});
/*================================
            navigation        
================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("vesco-nav-top");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("vesco-nav-top");
            $("#back-to-top").fadeIn();
        }
    });
});
/*================================
            smooth scroll        
================================*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get / return id like #aboht , #work , #team , etc.
        var section = $(this).attr("href");
        $('body , html').animate({
            scrollTop: $(section).offset().top - 54
        }, 1250, "easeInOutExpo");
    });
});
/*================================
    close menu on mobile screen        
================================*/
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function(){
       $(".navbar-toggler").click(); 
    });
}) ;






















