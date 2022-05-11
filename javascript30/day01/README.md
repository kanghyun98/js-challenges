### HTML

1. `audio` 태그를 처음 사용해봤다. (http://tcpschool.com/html-tags/audio)

   - `audio` 요소 내에 위치하는 텍스트는 사용자의 브라우저가 `audio` 요소를 지원하지 않을 경우 화면에 표시
   - MP3, WAV, Ogg 3가지 포맷의 파일 지원

   - attributes

     - `controls`  : 오디오 재생, 볼륨, 일시 정지 컨트롤을 제공

     - `loop` : 반복재생

     - `autoplay`  : 자동 실행
     - `preload` : 파일 내용 어떻게 불러올지 설정

   

2. 강사는 새로운 attribute를 준듯 (data-key=65)

3. kbd 태그 : 키보드 입력을 나타낼 때 사용



### CSS

1. flexbox에 대해 조금 더 공부해봐야할듯, 초반에 거기서 너무 막혔다.

2. `transition`  공부

   - 해당 요소에 추가할 CSS 스타일 전환(`transition`) 효과를 설정

   - 추가할 전환 효과가 지속될 시간을 설정

     ```css
     /* div요소의 넓이가 1초 동안 100px->300px로 변화 */
     
     div {
       width: 100px;
     	transition: width 1s;
     }
     
     div:hover {
       width: 300px;
     }
     ```

   - `transition` 효과와 `transform` 효과의 동시 적용 가능

     ```css
     /* div요소의 넓이가 1초 동안 100px->300px로 변화, x,y축으로 10px씩 이동 */
     
     div {
       width: 100px;
     	transition: width 1s, transform 1s; /* all 1s; */
     }
     
     div:hover {
       width: 300px;
       transform: translate(10px, 10px);
     }
     ```

3. `transform` 공부

   - `transform: translate(100px, 50px)`: x, y축 거리만큼 이동
   - `transform: rotate(30deg)`: 시계방향 회전

   - `transform: scale(0.7, 0.7)`: 해당 요소의 크기를 주어진 배율만큼 확대 및 축소

   

### JavaScript

- `audio` 요소를 불러와 `play()` 메소드로 재생 가능
- audio요소의 `currentTime` 프로퍼티 값을 이용해 audio play가 종료되기 전에 다시 처음부터 시작할 수 있다.
  - `currentTime=0`, 만약 설정을 해주지 않으면 `play()`를 오디오 종료 전에 실행시켰을 때 실행되지 않는다.

- 나는 `keydown` 이벤트가 발생했을 때 처리하는 콜백 함수 내에서 `class` 추가 및 제거를 진행해 기능을 구현했는데, 강사는 `class` 추가는 같은 방식으로 진행하고, `class` 제거는 모든 키 요소를 불러와 `transitioned` 이벤트가 발생했을 때 `transform`이 발생하는 요소에 대해 `class`가 제거되도록 만들었다. 

  ```js
  // 강사 코드 (https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/index-FINISHED.html)
  
  function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }
  
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
  
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }
  
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
  ```

  ```js
  // 내 코드
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
  ```

  

#### 구현 화면

![image](https://user-images.githubusercontent.com/70627979/143888723-e089c498-5637-4a82-8cfb-4097d0378434.png)
