import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

export const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween:0,
        },
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },*/
  });
