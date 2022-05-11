const $video = document.querySelector('.player');
const $canvas = document.querySelector('.photo');
const $strip = document.querySelector('.strip');
const $snapAudio = document.querySelector('.snap');
const $photoBtn = document.querySelector('.photoBtn');

const ctx = $canvas.getContext('2d');

// 영상 송출
const getMedia = async () => {
  try {
    const constraints = { video: true, audio: false }; // 설정
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    $video.srcObject = stream;
    $video.play();
  } catch (error) {
    console.log(error);
  }
};

// 영상 편집 및 송출
const rgbSplit = (frame) => {
  for (let i = 0; i < frame.data.length; i += 4) {
    frame.data[i - 150] = frame.data[i + 0]; // RED
    frame.data[i + 500] = frame.data[i + 1]; // GREEN
    frame.data[i - 550] = frame.data[i + 2]; // Blue
  }
  return frame;
};

const showOnCanvas = () => {
  const width = $video.videoWidth;
  const height = $video.videoHeight;

  $canvas.width = width;
  $canvas.height = height;

  setInterval(() => {
    ctx.drawImage($video, 0, 0, width, height);

    const frame = ctx.getImageData(0, 0, width, height);
    changedFrame = rgbSplit(frame);
    ctx.putImageData(changedFrame, 0, 0);
  }, 100);
};

// 영상 캡쳐
const takePhoto = () => {
  // 캡쳐 사운드
  $snapAudio.currentTime = 0;
  $snapAudio.play();

  // 캡쳐 기능
  const data = $canvas.toDataURL('image/jpeg');

  const $link = document.createElement('a');
  $link.href = data;
  $link.setAttribute('download', 'handsome');
  $link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;

  $strip.insertBefore($link, $strip.firstChild);
};

getMedia();
$video.addEventListener('canplay', showOnCanvas);
$photoBtn.addEventListener('click', takePhoto);
