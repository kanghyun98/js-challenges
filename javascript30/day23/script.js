const $voicesDropdown = document.querySelector('.voices');
const $rateInput = document.querySelector('.rate');
const $pitchInput = document.querySelector('.pitch');
const $text = document.querySelector('.text');
const $stopBtn = document.querySelector('.stop');
const $startBtn = document.querySelector('.start');

const utterThis = new SpeechSynthesisUtterance();

let voices = [];

// 음성 설정
const handleVoice = (e) => {
  utterThis.voice = voices.find((voice) => voice.name === e.target.value);
};

// 옵션 설정
const handleRate = (e) => {
  utterThis['rate'] = e.target.value;
};

const handlePitch = (e) => {
  utterThis['pitch'] = e.target.value;
};

// 시작
const handleStart = () => {
  speechSynthesis.cancel();

  utterThis.text = $text.value;
  speechSynthesis.speak(utterThis);
};

// 정지
const handleStop = () => {
  speechSynthesis.cancel();
};

// voice list 출력
const populateVoiceList = () => {
  voices = speechSynthesis.getVoices();

  const $select = document.createElement('select');
  $select.className = 'select';

  voices.forEach((voice) => {
    const $option = document.createElement('option');
    $option.textContent = `${voice.name}(${voice.lang})`;

    if (voice.default) {
      $option.textContent += ' -- DEFAULT';
    }

    $select.appendChild($option);
  });

  $select.addEventListener('change', handleVoice);

  $voicesDropdown.appendChild($select);
};

speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

$rateInput.addEventListener('change', handleRate);
$pitchInput.addEventListener('change', handlePitch);
$startBtn.addEventListener('click', handleStart);
$stopBtn.addEventListener('click', handleStop);
