const stickyNav = document.getElementById('sticky-nav');
const defaultNav = document.getElementById('default-nav');
let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (lastKnownScrollPosition !== 0) {
        stickyNav.classList.remove('invisible', 'translate-y-5');
        stickyNav.classList.add('transform-none', '-translate-y-5');
        defaultNav.classList.add('invisible')
      } else {
        defaultNav.classList.remove('invisible')
        stickyNav.classList.add('invisible');
        stickyNav.classList.remove('transform-none');
      }
      ticking = false;
    });

    ticking = true;
  }
}

document.addEventListener('scroll', handleScroll);
