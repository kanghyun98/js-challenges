const $space = document.getElementById('input-space');
const $blur = document.getElementById('input-blur');
const $color = document.getElementById('input-color');
const $ImgWrapper = document.getElementById('img-wrapper');

const changeSpace = () => {
  const inputSpace = $space.value;
  $ImgWrapper.style.padding = `${inputSpace / 10}rem`;
  console.log(inputSpace);
};

const changeBlur = () => {
  const inputBlur = $blur.value;
  $ImgWrapper.style.filter = `blur(${inputBlur / 100}rem)`;
};

const changeColor = () => {
  const inputColor = $color.value;
  $ImgWrapper.style.backgroundColor = inputColor;
};

$space.addEventListener('change', changeSpace);
$blur.addEventListener('change', changeBlur);
$color.addEventListener('change', changeColor);
