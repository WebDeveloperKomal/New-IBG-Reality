
$(document).ready(function () {
    $(".project-active").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(document).ready(function () {
        $(".testimonial-active").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            
        });
    });

    $(".brand-active").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000, // Interval between each autoplay step
        autoplaySpeed: 1000, // Speed of the transition
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    
    $(document).ready(function() {
        // Show or hide the scroll-to-top button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) { // Show after 100px of scrolling
                $('.scroll-top').addClass('on');
            } else {
                $('.scroll-top').removeClass('on');
            }
        });

        // Scroll to top when the icon is clicked
        $('.scroll-top').click(function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            $('html, body').animate({scrollTop: 0}, 600); // 600ms scroll to top
            return false;
        });
    });
});


// $(document).ready(function () {
        //     $(".project-active").owlCarousel({
        //         loop: true,
        //         margin: 30,
        //         nav: true,
        //         items: 3,
        //         autoplay: true,
        //         autoplayTimeout: 3000,
        //         autoplayHoverPause: true,
        //         responsive: {
        //             0: {
        //                 items: 1
        //             },
        //             600: {
        //                 items: 2
        //             },
        //             1000: {
        //                 items: 3
        //             }
        //         }
        //     });
        // });
