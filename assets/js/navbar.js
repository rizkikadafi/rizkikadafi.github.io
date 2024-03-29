const nav = document.getElementById('nav');
let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (lastKnownScrollPosition !== 0) {
        nav.classList.add(
          'shadow-custom-xl', 'bg-slate-800/70', 'backdrop-blur-md',
          'dark:shadow-custom-xl', 'duration-500'
        )
      } else {
        nav.classList.remove(
          'shadow-custom-xl', 'bg-slate-800/70', 'backdrop-blur-md',
          'dark:shadow-custom-xl', 'duration-500'
        )
      }
      ticking = false;
    });

    ticking = true;
  }
}

document.addEventListener('scroll', handleScroll);
