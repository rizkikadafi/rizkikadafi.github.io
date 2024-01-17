const stickyNav = document.getElementById('sticky-nav');
const defaultNav = document.getElementById('default-nav');
const nav = document.getElementById('nav');
let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (lastKnownScrollPosition !== 0) {
        nav.classList.add(
          'shadow-custom-lg', 'bg-slate-800/70',
          'dark:shadow-custom', 'duration-500', 'backdrop-blur-md'
        )
      } else {
        nav.classList.remove(
          'shadow-custom-lg', 'bg-slate-800/70',
          'dark:shadow-custom', 'duration-500', 'backdrop-blur-md'
        )
      }
      ticking = false;
    });

    ticking = true;
  }
}

document.addEventListener('scroll', handleScroll);
