$(document).ready(function () {

    // Mobile menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Close mobile menu when link is clicked
    $('.navbar a').click(function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    // Close mobile menu when clicking outside
    $(document).click(function (event) {
        const menu = $('#menu');
        const navbar = $('.navbar');
        
        if (!$(event.target).closest('#menu, .navbar').length) {
            if (navbar.hasClass('nav-toggle')) {
                menu.removeClass('fa-times');
                navbar.removeClass('nav-toggle');
            }
        }
    });

    // Handle window scroll for scroll-top button and menu management
    $(window).on('scroll load', function () {
        // Don't auto-close menu on scroll on mobile
        // Only close if window is not mobile size
        if ($(window).width() > 768) {
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
        }

        // Show/hide scroll-top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy - update active nav link
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling with improved mobile support
    $('a[href*="#"]').on('click', function (e) {
        let href = $(this).attr('href');
        
        if ($(href).length) {
            e.preventDefault();
            
            // Close menu after clicking
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
            
            $('html, body').animate({
                scrollTop: $(href).offset().top - 80,
            }, 500, 'linear');
        }
    });

    // Handle window resize to reset mobile menu
    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
        }
    });

});

// Page visibility event
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Mohamed Gamal Attyia";
        $("#favicon").attr("href", "./mohamed.jpg");
    }
});

// Tilt effect initialization with error handling
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
        scale: 1.05
    });
}

// Disable developer tools
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Scroll Reveal animations
if (typeof ScrollReveal !== 'undefined') {
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL HOME */
    srtop.reveal('.home .content h2', { delay: 200 });
    srtop.reveal('.home .content p', { delay: 200 });
    srtop.reveal('.home .btn', { delay: 200 });
    srtop.reveal('.home .image', { delay: 400 });
    srtop.reveal('.socials', { delay: 600 });

    /* SCROLL ABOUT */
    srtop.reveal('.about .row .image', { delay: 200 });
    srtop.reveal('.about .row .content h3', { delay: 400 });
    srtop.reveal('.about .row .content .tag', { delay: 500 });
    srtop.reveal('.about .row .content p', { delay: 600 });
    srtop.reveal('.about .row .content .box-container', { delay: 700 });

    /* SCROLL SKILLS */
    srtop.reveal('.skill-card', { interval: 200 });

    /* SCROLL PROJECTS & CONTACT */
    srtop.reveal('.contact-card', { interval: 200 });
}