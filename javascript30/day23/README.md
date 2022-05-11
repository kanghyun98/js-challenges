# day 23 학습 내용

## HTML/CSS

이번에는 갖다 쓰지 않고 간단하게 만들어보았다!

시간이 좀 걸리지만 많이 하다보면 속도도 빨라지겠지..



## JavaScript

이번에 새롭게 학습한 것은 음성출력 API이다! 이전에 음성인식 API를 사용했었는데, 이번에는 사용자가 입력한 결과물을 음성으로 출력해주는 프로그램을 만들어주는 것이다.

voices, rate, pitch, text 를 직접 설정할 수 있게 구현하였으며, 음성출력 API로 [`SpeechSynthesisUtterance`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) 를 사용하였다.



SpeechSynthesisUtterance() 생성자로 새로운 객체를 생성하고, 여기에 옵션 값들을 넣어주고 `speechSynthesis.speak();` 메서드의 인자로 해당 객체를 넘겨주면 음성출력이 된다.

```js
// 기본 사용법
const utterThis = new SpeechSynthesisUtterance();

speechSynthesis.speak(utterThis);
```

자세한 내용은 `script.js` 에서 확인할 수 있다.
