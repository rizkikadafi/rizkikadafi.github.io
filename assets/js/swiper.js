const swiper = new Swiper('.swiper', {
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
  loop: true,
  autoplay: { delay: 3000 },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  breakpoints: {
    640: {
      autoplay: false,
      pagination: false,
      loop: false,
      allowTouchMove: false,
    }
  },
});

const activeStyles = ['bg-slate-600/70', 'dark:bg-slate-700', 'rounded-md']
const items = document.querySelectorAll('.project-item')
const arrayItems = Array.from(items)
let currentIndex = 0
arrayItems[currentIndex].classList.add(...activeStyles, 'text-white')
arrayItems.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (currentIndex > 0) {
      arrayItems[currentIndex - 1].classList.add('border-b-2')
    }
    swiper.slideTo(index, 1000)
    arrayItems[currentIndex].classList.remove(...activeStyles, 'text-white')
    currentIndex = index
    if (currentIndex > 0) {
      arrayItems[currentIndex - 1].classList.remove('border-b-2')
    }
    element.classList.add(...activeStyles, 'text-white')
  });
});

