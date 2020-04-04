// Facebook Messenger

$(document).ready(function () {
    var t = {
        delay: 125,
        overlay: $(".fb-overlay"),
        widget: $(".fb-widget"),
        button: $(".fb-button")
    };
    setTimeout(function () {
        $("div.fb-livechat").fadeIn()
    }, 8 * t.delay);
    $(".ctrlq").on("click",
        function (e) {
            e.preventDefault();
            if (t.overlay.is(":visible")) {
                t.overlay.fadeOut(t.delay);
                t.widget.stop().animate(
                    {
                        bottom: 0,
                        opacity: 0
                    }, 2 * t.delay, function () {
                        $(this).hide("slow"), t.button.show()
                    });
            } else {
                t.button.fadeOut("medium", function () {
                    t.widget.stop().show().animate(
                        {
                            bottom: "30px",
                            opacity: 1
                        }, 2 * t.delay);
                    t.overlay.fadeIn(t.delay);
                });
            }
        });
});


// Scroll Animation

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.header-heading', {
    duration: 2000,
    origin: 'left',
    distance: '70px'
});

window.sr = ScrollReveal();
sr.reveal('.header-button', {
    duration: 3000,
    delay: 1500,
    origin: 'bottom',
});

sr.reveal('.header-image', {
    duration: 2000,
    origin: 'right',
    distance: '70px'
});

sr.reveal('#image-carousel', {
    duration: 3000,
    distance: '300px',
    origin: 'right'
});

sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.testimonial-heading', {
    duration: 2000,
    delay: 500,
    origin: 'bottom'
});

sr.reveal('.div-1', {
    duration: 2000,
    delay: 800,
    origin: 'bottom'
});

sr.reveal('.div-2', {
    duration: 2000,
    delay: 1300,
    origin: 'bottom'
});

sr.reveal('.div-3', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom'
});

sr.reveal('.read-more', {
    duration: 2000,
    delay: 3000,
    origin: 'bottom',
    viewFactor: 0.2
});

sr.reveal('.facebook', {
    duration: 2000,
    delay: 2000,
    origin: 'left',
    distance: '5px'
});

sr.reveal('.instagram', {
    duration: 2000,
    delay: 2300,
    origin: 'left',
    distance: '5px'
});

sr.reveal('.phone', {
    duration: 2000,
    delay: 2600,
    origin: 'left',
    distance: '5px'
});

sr.reveal('.email', {
    duration: 2000,
    delay: 2900,
    origin: 'left',
    distance: '5px'
});

sr.reveal('.whatsapp', {
    duration: 2000,
    delay: '2000',
    origin: 'bottom',
    distance: '5px'
});

// Smooth Scrolling

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});