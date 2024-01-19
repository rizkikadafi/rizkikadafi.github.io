const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: { delay: 3000 },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
  effect: 'fade',
  breakpoints: {
    640: {
      autoplay: false,
      pagination: false,
      loop: false,
      allowTouchMove: false,
    }
  },
});

const axtiveStyles = ['bg-slate-700', 'rounded-md']
const items = document.querySelectorAll('.project-item')
const arrayItems = Array.from(items)
let currentIndex = 0
arrayItems[currentIndex].classList.add(...axtiveStyles)
arrayItems.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (currentIndex > 0) {
      arrayItems[currentIndex - 1].classList.add('border-b-2')
    }
    swiper.slideTo(index, 1000)
    arrayItems[currentIndex].classList.remove(...axtiveStyles)
    currentIndex = index
    if (currentIndex > 0) {
      arrayItems[currentIndex - 1].classList.remove('border-b-2')
    }
    element.classList.add(...axtiveStyles)
  });
});

