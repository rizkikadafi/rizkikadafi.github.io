const blogNav = document.getElementById('blog-nav');
const toTopBtn = document.getElementById('top-btn');
let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    const stickyStyle = ['after:origin-bottom-left', 'after:scale-x-100', 'backdrop-blur-md']
    window.requestAnimationFrame(function() {
      if (lastKnownScrollPosition !== 0) {
        blogNav.classList.add(...stickyStyle)
        toTopBtn.classList.remove('hidden')
      } else {
        blogNav.classList.remove(...stickyStyle)
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
