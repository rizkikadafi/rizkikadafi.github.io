const swiper = new Swiper('.category-swiper', {
  spaceBetween: 16,
  autoplay: { delay: 3000 },
  breakpoints: {
    640: {
      slidesPerView: 3,
    }
  },
});
