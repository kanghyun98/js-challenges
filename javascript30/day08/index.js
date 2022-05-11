const INITIAL_STROKE_COLOR = '#2c2c2c';
const INITIAL_FILL_COLOR = 'white';
const INITIAL_WIDTH = 2.5;
const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;

const $canvas = document.getElementById('jsCanvas');
const $colors = document.getElementById('jsColors');
const $range = document.getElementById('jsRange');
const $resetBtn = document.getElementById('jsReset');
const $saveBtn = document.getElementById('jsSave');

const ctx = $canvas.getContext('2d');
ctx.strokeStyle = INITIAL_STROKE_COLOR; // style 기본값
ctx.lineWidth = INITIAL_WIDTH;
ctx.fillStyle = INITIAL_FILL_COLOR;
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 저장할 때 배경 오류 해결

// 그림 그리기
let painting = false;

const stopPainting = () => {
  painting = false;
};

const startPainting = () => {
  painting = true;
};

const onMouseMove = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y); // 명학한 시작 위치 설정
  } else {
    ctx.lineTo(x, y);
    ctx.stroke(); // 선을 그림
  }
};

// 색상 고르기
const handleColorclick = (e) => {
  const color = e.target.style.backgroundColor;
  if (color) {
    ctx.strokeStyle = color;
  }
};

// 붓 사이즈 조절
const handleRangeChange = (e) => {
  const width = e.target.value;
  ctx.lineWidth = width;
};

// 모두 지우기
const reset = () => {
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

// 이미지 저장 및 복사 방지
const handleContextMenu = (e) => {
  e.preventDefault();
};

// 이미지 저장
const handleSaveImage = () => {
  const image = $canvas.toDataURL();
  const $link = document.createElement('a');
  $link.href = image;
  $link.download = 'myImage.png';
  $link.click();
  console.log($link);
};

if ($canvas) {
  $canvas.addEventListener('mousemove', onMouseMove);
  $canvas.addEventListener('mousedown', startPainting);
  $canvas.addEventListener('mouseup', stopPainting);
  $canvas.addEventListener('mouseleave', stopPainting);
  $canvas.addEventListener('contextmenu', handleContextMenu);
}

$range.addEventListener('change', handleRangeChange);
$resetBtn.addEventListener('click', reset);
$saveBtn.addEventListener('click', handleSaveImage);
$colors.addEventListener('click', handleColorclick);
