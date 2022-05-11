const $body = document.querySelector('body');
const $text = document.querySelector('.main');
const SIZE = 500;

const handleShadow = (e) => {
  const { offsetWidth: width, offsetHeight: height } = $body;
  let { offsetX: x, offsetY: y } = e;

  if (e.target !== $body) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xSize = Math.round((x / width) * SIZE - SIZE / 2);
  const ySize = Math.round((y / height) * SIZE - SIZE / 2);

  $text.style.textShadow = `
  ${xSize}px ${ySize}px 0 rgba(255,0,255,0.7),
  ${xSize * -1}px ${ySize}px 0 rgba(0,255,255,0.7),
  ${ySize}px ${xSize * -1}px 0 rgba(0,255,0,0.7),
  ${ySize * -1}px ${xSize}px 0 rgba(0,0,255,0.7)

  `;
};

$body.addEventListener('mousemove', handleShadow);
