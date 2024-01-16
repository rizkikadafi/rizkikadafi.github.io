document.addEventListener('readystatechange', () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
});

const darkBtn = document.getElementById('dark-mode');
const lightBtn = document.getElementById('light-mode');
const html = document.querySelector('html');


darkBtn.addEventListener('click', () => {
  localStorage.theme = 'dark'
  html.classList.add('dark');
});

lightBtn.addEventListener('click', () => {
  localStorage.theme = 'light'
  html.classList.remove('dark');
});
