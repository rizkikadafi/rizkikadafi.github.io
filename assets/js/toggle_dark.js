const darkBtn = document.getElementById('dark-mode');
const lightBtn = document.getElementById('light-mode');
const html = document.querySelector('html');

darkBtn.addEventListener('click', () => {
  html.classList.add('dark');
});

lightBtn.addEventListener('click', () => {
  html.classList.remove('dark');
});
