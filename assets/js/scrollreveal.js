export function startScrollreveal() {
    window.sr = ScrollReveal({
        reset: true,
        distance: '90px',
        duration: 1800,
        delay: 200,
    });

    //s-home, s-about
    ScrollReveal().reveal('.home-text, .about-text, .skills-text', { 
        origin: 'top' 
    });

    ScrollReveal().reveal('.home-img, .about-img', {
        origin: 'bottom' 
    });

    ScrollReveal().reveal('.skills-cards div', {
        delay: 500, interval: 100
    });

    //projects
    ScrollReveal().reveal('#s-projects h1', {
        origin: 'top'
    });

    ScrollReveal().reveal('.swiper', {
        origin: 'bottom'
    });

    //s-contact
    ScrollReveal().reveal('#s-contact h1', { 
        origin: 'top'
    });

    ScrollReveal().reveal('.contact', { 
        origin: 'top'
    });

    ScrollReveal().reveal('.contact-form', { 
        origin: 'left', delay: 800
    });

    ScrollReveal().reveal('.contact img', { 
        origin: 'right', delay: 800
    });

    ScrollReveal().reveal('.contact-icons a', { 
        origin: 'bottom', delay: 1000, interval: 100
    });
}
