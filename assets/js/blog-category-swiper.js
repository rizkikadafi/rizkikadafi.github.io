const swiper = new Swiper('.category-swiper', {
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
});
