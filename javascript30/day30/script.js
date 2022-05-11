const $score = document.querySelector('.score');
const $wrapper = document.querySelector('.moles-wrapper');
const $moles = document.querySelectorAll('.mole');
const $startBtn = document.querySelector('.str-btn');
const $lastTimer = document.querySelector('.last-time');

// n개의 랜덤 두더지 구멍 선택
const getRandomMoles = (nums) => {
  const randomNums = Math.ceil(Math.random() * nums);

  const selectedIndices = [];
  for (let i = 0; i < randomNums; i++) {
    const targetIdx = Math.floor(Math.random() * $moles.length);
    if (!selectedIndices.includes(targetIdx)) {
      selectedIndices.push(targetIdx);
    }
  }

  const resultDoms = selectedIndices.map((idx) => {
    return $moles[idx].querySelector('.real-mole');
  });

  return resultDoms;
};

// 점수 측정
let score = 0;
const catchMole = () => {
  score += 1;
  $score.textContent = score;
};

// 두더지 동작
const handleMoles = () => {
  const molesDom = getRandomMoles(3);

  molesDom.forEach((mole) => {
    mole.addEventListener('click', catchMole, { once: true });
    mole.classList.add('up');
  });

  setTimeout(() => {
    molesDom.forEach((mole) => {
      mole.classList.remove('up');
    });
  }, 1000);
};

// 타이머
let lastTime = 15;
const handleTimer = () => {
  lastTime -= 1;
  console.log(lastTime);
  $lastTimer.textContent = lastTime;
};

// 게임 시작
let isPlaying = false;
let timer, lastTimer;

const startGame = () => {
  // 초기화
  clearInterval(timer);
  clearInterval(lastTimer);
  score = 0;
  lastTime = 15;
  $startBtn.textContent = 'RESTART';
  $lastTimer.textContent = lastTime;
  $score.textContent = score;

  timer = setInterval(() => {
    handleTimer();
    handleMoles();
  }, 1000);

  lastTimer = setTimeout(() => {
    clearInterval(timer);
  }, 15000);
};

$startBtn.addEventListener('click', startGame);
