const $nav = document.querySelector('.navigation');
const $main = document.querySelector('.main');

const height = $nav.offsetTop;

const handleNav = () => {
  if (window.scrollY > height) {
    document.body.classList.add('sticky');
    $main.style.paddingTop = `${$nav.clientHeight}px`;
  } else {
    document.body.classList.remove('sticky');
    $main.style.paddingTop = 0;
  }
};

window.addEventListener('scroll', handleNav);
