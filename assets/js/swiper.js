const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  effect: 'coverflow',
});
