const $video = document.querySelector('.video');
const $progress = document.querySelector('.video__progress');
const $progressPlay = document.querySelector('.video__progress-play');
const $play = document.querySelector('.video__player');
const $volumeButton = document.querySelector('.volume__icon');
const $volumeController = document.querySelector('.volume__controller');
const $speed = document.querySelector('.video__speed');
const $skip = document.querySelector('.video__skip');

// progress control (재생 바)
const controlProgress = () => {
  const playingRate = ($video.currentTime / $video.duration) * 100;
  $progressPlay.style.width = `${playingRate}%`;
};

const controlTime = (e) => {
  if (!$video || !$progress || !e) {
    return;
  }

  const targetTimeRate = e.offsetX / $progress.offsetWidth;
  $video.currentTime = $video.duration * targetTimeRate;
};

// play & stop control
const controlPlay = () => {
  if (!$video || !$play) {
    return;
  }

  if ($video.paused) {
    $video.play();
    $play.innerText = '🁢 🁢';
  } else {
    $video.pause();
    $play.innerText = '►';
  }
};

// volume control
const controlVolume = () => {
  if (!$video || !$volumeController) {
    return;
  }

  $video.volume = $volumeController.value;
};

// volume mute control
const controlMute = () => {
  if (!$video || !$volumeButton) {
    return;
  }

  if ($video.muted) {
    $video.muted = false;
    $volumeButton.innerText = '🔈';
  } else {
    $video.muted = true;
    $volumeButton.innerText = '🔇';
  }
};

// speed control
const controlSpeed = () => {
  if (!$video || !$speed) {
    return;
  }

  console.log($speed.value);

  $video.playbackRate = $speed.value;
};

// skip control
const controlSkip = (e) => {
  if (!$video || !e.target) {
    return;
  }

  if (e.target.classList.contains('skipprev-')) {
    $video.currentTime -= 15;
  }

  if (e.target.classList.contains('skip-next')) {
    $video.currentTime += 15;
  }
};

$video.addEventListener('timeupdate', controlProgress);

$progress.addEventListener('click', controlTime);

$video.addEventListener('click', controlPlay);
$play.addEventListener('click', controlPlay);

$volumeController.addEventListener('change', controlVolume);
$volumeButton.addEventListener('click', controlMute);

$speed.addEventListener('change', controlSpeed);

$skip.addEventListener('click', controlSkip);

document.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    controlPlay();
  }
});
