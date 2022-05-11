const domList = document.querySelectorAll('.image-wrapper');

const toggleClickImage = (e) => {
  console.log(e.target);
  e.currentTarget.classList.toggle('clicked');
};

domList.forEach((dom) => {
  dom.addEventListener('click', toggleClickImage);
});
