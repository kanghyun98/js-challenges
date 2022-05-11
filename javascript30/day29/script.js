const $headerWrapper = document.querySelector('.header-wrapper');
const $formTimer = document.querySelector('.form-item');
const $inputTime = document.querySelector('.input-item');
const $lastTime = document.querySelector('.timer-last');
const $endTime = document.querySelector('.timer-end');

// 타이머 콜백 함수 (1초마다 동작)
const moveTimerFunc = () => {
  if (lastSecs === -1) {
    clearInterval(intervalTimer);

    alert('타이머 종료!');
    return;
  }

  const hours = Math.floor(lastSecs / (60 * 60));
  const mins = Math.floor((lastSecs % (60 * 60)) / 60);
  const secc = lastSecs % 60;

  const resultHours = hours < 10 ? `0${hours}` : `${hours}`;
  const resultMins = mins < 10 ? `0${mins}` : `${mins}`;
  const resultSecs = secc < 10 ? `0${secc}` : `${secc}`;

  const lastTime =
    hours <= 0
      ? `${resultMins} : ${resultSecs}`
      : `${resultHours} : ${resultMins} : ${resultSecs}`;
  $lastTime.textContent = lastTime;
  document.title = lastTime;

  lastSecs--;
};

// 타이머 실행 함수
let intervalTimer; // setInterval 함수
let lastSecs; // 남은 시간

const turnOnTimerFunc = (inputSecs) => {
  clearInterval(intervalTimer);

  // 현재 시각
  const start = new Date();
  const startHours = start.getHours();
  const startMins = start.getMinutes();
  const startSecs = start.getSeconds();

  // 종료 시각
  const sumSecs = startSecs + inputSecs;
  const endSecs = sumSecs % 60;
  const addMins = Math.floor(sumSecs / 60);

  const sumMins = startMins + addMins;
  const endMins = sumMins % 60;
  const addHours = Math.floor(sumMins / 60);
  const resultMins = endMins < 10 ? `0${endMins}` : `${endMins}`;

  const sumHours = startHours + addHours;
  const endHours = sumHours % 24;
  const resultHours = endHours < 10 ? `0${endHours}` : `${endHours}`;

  const endTime = `${resultHours}:${resultMins}`;

  $endTime.textContent = `Be Back At ${endTime}`;

  // 결과
  lastSecs = inputSecs; // 남은 시간 초기값

  moveTimerFunc(); // 초기 실행

  intervalTimer = setInterval(moveTimerFunc, 1000);
};

// 타이머 생성 (고정값)
const handleTimerFunc = (e) => {
  if (!e.target.classList.contains('fixed-item')) {
    return;
  }

  const timerSecs = Number(e.target.id);

  turnOnTimerFunc(timerSecs);
};

// 타이머 생성 (입력값)
const handleInputTimerFunc = (e) => {
  e.preventDefault();

  const timerSecs = Number($inputTime.value) * 60;

  // 입력값이 정수가 아닌 경우 처리
  if (!Number.isInteger(timerSecs)) {
    alert('숫자를 입력하세요!');
    $inputTime.value = '';
    return;
  }

  turnOnTimerFunc(timerSecs);
};

$headerWrapper.addEventListener('click', handleTimerFunc);
$formTimer.addEventListener('submit', handleInputTimerFunc);
