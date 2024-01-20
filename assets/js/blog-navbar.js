const blogNav = document.getElementById('blog-nav');
let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    const stickyStyle = ['after:origin-bottom-left', 'after:scale-x-100', 'dark:bg-slate-800/70', 'backdrop-blur-md']
    window.requestAnimationFrame(function() {
      if (lastKnownScrollPosition !== 0) {
        blogNav.classList.add(...stickyStyle)
      } else {
        blogNav.classList.remove(...stickyStyle)
      }
      ticking = false;
    });

    ticking = true;
  }
}

document.addEventListener('scroll', handleScroll);
