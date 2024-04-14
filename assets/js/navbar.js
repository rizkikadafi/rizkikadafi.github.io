const nav = document.getElementById('nav');
const toTopBtn = document.getElementById('top-btn');
let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (lastKnownScrollPosition !== 0) {
        nav.classList.add(
          'shadow-custom-xl', 'bg-slate-700/70', 'dark:bg-slate-700/70', 'backdrop-blur-md',
          'dark:shadow-custom-xl', 'duration-500'
        )
        toTopBtn.classList.remove('hidden')
      } else {
        nav.classList.remove(
          'shadow-custom-xl', 'bg-slate-700/70', 'dark:bg-slate-700/70', 'backdrop-blur-md',
          'dark:shadow-custom-xl', 'duration-500'
        )
        toTopBtn.classList.add('hidden')
      }
      ticking = false;
    });

    ticking = true;
  }
}

document.addEventListener('scroll', handleScroll);

toTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
