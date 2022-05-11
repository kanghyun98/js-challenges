const buttonList = document.querySelectorAll('.drum-box');

const playDrum = (e) => {
  // 이벤트 발생 Element & 관련 오디오
  const selectedDom = document.querySelector(`div#${e.key}`);
  const selectedAudio = document.querySelector(`audio#${e.key}`);
  if (!(selectedAudio || selectedDom)) return;

  selectedDom.classList.add('playing');

  setTimeout(() => {
    selectedDom.classList.remove('playing');
  }, 500);

  selectedAudio.currentTime = 0;
  selectedAudio.play();
};

window.addEventListener('keydown', playDrum);
