const $container = document.querySelector('.container');

let isDrag = false;
let scrollLeft, startX;

const handleMouseDown = (e) => {
  isDrag = true;
  $container.classList.add('drag');

  startX = e.pageX - $container.offsetLeft; // 클릭한 지점 좌표 (0 ~ 너비만큼)
  scrollLeft = $container.scrollLeft; // 현재 스크롤 상태
};

const handleMouseUpAndOut = () => {
  isDrag = false;
  $container.classList.remove('drag');
};

const handleMoving = (e) => {
  if (!isDrag) return;

  const x = e.pageX - $container.offsetLeft;
  const walk = (x - startX) * 3; // 마우스 클릭 후 이동 거리 * 3
  $container.scrollLeft = scrollLeft - walk; // 이동
  console.log(walk);
};

$container.addEventListener('mousedown', handleMouseDown);
$container.addEventListener('mouseup', handleMouseUpAndOut);
$container.addEventListener('mouseleave', handleMouseUpAndOut);
$container.addEventListener('mousemove', handleMoving);
