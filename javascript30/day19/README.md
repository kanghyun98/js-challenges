# day 19 학습 내용

이번 강의 내용은 모르는 것들이 엄청 많아 시간이 좀 걸렸다!ㅠ

이번에도 HTML/CSS 는 스킵하고, JavaScript에 집중해서 학습하였다.



그리고 강의에서는 `browser-sync` 패키지를 다운받아 프로젝트를 실시간으로 실행시키는데, 나는 visual studio의 `live-server`를 이미 이용하므로 사용하지 않았다!



## JavaScript

이번 파트는 기능별로 정리하는게 보기 좋을 것 같아 각 기능별 사용된 함수들에 대해 정리하려 한다.



### 1. 라이브캠 기능 (줌처럼!)

우선 사용자의 카메라 영상을 가져오기 위해 [`Navigator` 객체](http://www.tcpschool.com/javascript/js_bom_navigator)를 사용한다. `Navigator` 객체는 브라우저 공급자 및 버전 정보 등을 포함한 브라우저에 대한 다양한 정보를 저장하는 객체로, `console.log(navigator);` 를 통해 확인할 수 있다.

`Navigator` 객체 내부의 `mediaDevices` 라는 프로퍼티(속성) 안에 [`MediaDevices` 객체](https://developer.mozilla.org/ko/docs/Web/API/MediaDevices)가 존재하는데, `MediaDevices` 인터페이스는 카메라, 마이크, 공유 화면 등 현재 연결된 미디어 입력 장치로의 접근 방법을 제공한다. 그래서 우리가 원하는 사용자의 카메라 영상은 `MediaDevices` 의 [`getUserMedia()`](https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia)를 이용하여 받을 수 있다.

물론 미디어 종류가 카메라 영상만 있는 것이 아니고 개발자가 요청할 미디어 유형과 각각에 대한 요구사항을 지정하기 위해서는 `constraints` 객체를 생성해서 `getUserMedia()` 메서드의 인자로 포함시키면 된다.

사용자가 미디어 입력 장치 사용 권한을 수락하면, 개발자가 요청한 미디어 종류를 포함한 `MediaStream` 객체(`Promise`)를 반환한다.

`MediaStream` 객체를 반환받았다면, 이제 이 객체를 화면에 보여주기만 하면 된다.

방법은 간단하다. `video` HTML 요소에 해당 객체를 소스로 넣어주면 되는 것이다. 이는 `video` 요소의 `srcObject` 라는 프로퍼티를 이용해서 추가해주고, `play()` 메서드를 사용하여 송출하면 된다. 

```js
const $video = document.querySelector('.player');  // video 요소

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
```



### 2. 영상 편집하기

이번 기능은 `canvas` 요소를 활용해 영상을 편집하고, 편집된 영상을 위와 동일하게 송출하는 것이다.

canvas 요소는 [`getContext('2d')`](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext) 메서드를 이용해 `CanvasRenderingContext2D` 객체를 반환받고, 이를 이용해 렌더링 컨텍스트의 여러가지 메서드들을 사용할 수 있다.

```js
const $canvas = document.querySelector('.photo');  // canvas 요소
const ctx = $canvas.getContext('2d');
```



#### 2.1 [drawImage() 메서드](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)

**`CanvasRenderingContext2D.drawImage()`** 메서드는 이미지를 canvas 위에 그릴 수 있게 해준다. 

```js
ctx.drawImage(image, dx, dy, dWidth, dHeight);
```

`drawImage()` 메서드 설명서에 나와있는 `image` 파라미터는 이미지가 될 수도 있지만, `HTMLVideoElement`도 가능하니 위처럼 실행하면 비디오 영상이 캡쳐된 것처럼 나오게 된다.

하지만 원하는 기능은 영상처럼 실시간으로 업로드 되는 것이므로, `setInterval()` 함수를 사용해 실시간으로 동작하는 것처럼 보이게 만든다.

```js
setInterval(() => {
  ctx.drawImage($video, 0, 0, width, height);	// width, height는 변수
  ...
}, 100);
```



#### 2.2 [getImageData() 메서드](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)

**`CanvasRenderingContext2D.getImageData()`** 메서드는 [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) 객체를 반환받아, 해당 이미지를 편집할 수 있게 된다. 



MDN에서는 `ImageData` 객체를 이용해, color picker 기능과 가상 배경화면 기능을 구현한 예시를 보여주었다.

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas



강의에서는 약간 분신?처럼 보이게 만드는 기능을 원했는데, 해당 기능까지 직접 만들어보는 것은 너무 많은 시간이 소요되므로 그대로 가져다가 사용하였다.

```js
const rgbSplit = (frame) => {
  for (let i = 0; i < frame.data.length; i += 4) {
    frame.data[i - 150] = frame.data[i + 0]; // RED
    frame.data[i + 500] = frame.data[i + 1]; // GREEN
    frame.data[i - 550] = frame.data[i + 2]; // Blue
  }
  return frame;
};

setInterval(() => {
  ctx.drawImage($video, 0, 0, width, height);	// width, height는 변수
  const frame = ctx.getImageData(0, 0, width, height);
  changedFrame = rgbSplit(frame);
  ...
}, 100);
```



#### 2.3 [putImageData() 메서드](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData)

위에서 이미지를 편집하였다면, 이제 편집된 이미지를 다시 화면에 송출하는 기능이 필요하다. **`CanvasRenderingContext2D.putImageData()`** 를 사용해 해당 기능을 구현할 수 있다.

```js
const showOnCanvas = () => {
	...

  setInterval(() => {
    ctx.drawImage($video, 0, 0, width, height);

    const frame = ctx.getImageData(0, 0, width, height);
    changedFrame = rgbSplit(frame);
    ctx.putImageData(changedFrame, 0, 0);
  }, 100);
};
```



#### 2.4 [`canplay` 이벤트](https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement/canplay_event)

이제 다 만들어진 함수를 실행시키면 아마 정상적으로 출력되지 않을 것이다. 왜냐하면 라이브캠 기능을 하는 `getMedia()` 함수가 비동기로 동작하기 때문에, 편집할 영상이 존재하지 않기 때문이다!

영상이 송출되고 나서 편집할 수 있도록, `video` 요소에 `canplay` 이벤트 발생 시 `showOnCanvas()` 가 동작하도록 만들었다.

```js
$video.addEventListener('canplay', showOnCanvas);
```



### 3. 영상 캡쳐하기

이번 기능은 편집되어 나타나는 화면을 캡쳐하여 영상 하단에 캡쳐된 이미지들을 나열하는 것이다.

원래 `canvas` 요소는 정적인 이미지를 화면에 보여주는 것이므로, `canvas` 요소에 보이는 이미지를 저장할 수 있게 도와주는 메서드인 [`HTMLCanvasElement.toDataURL()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) 가 있다. 해당 메서드는 data URI를 반환하며, 이를 이용해 화면에 보여주고 다운 링크를 생성할 수 있다.

```js
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
```



