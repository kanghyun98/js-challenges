# day 20 학습 내용

오늘도 새롭게 배우는 음성 인식..! (플젝하면서 새로운 것들을 많이 배울 수 있어서 좋다)



## JavaScript

[SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)를 사용하여 구현하였으며, 음성 인식이 되는 도중에 결과값이 계속 변경되도록 [`interimResults`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults) 값을 `true`로 설정하였다.

```js
const recognition = new SpeechRecognition();

recognition.lang = 'ko-KR'; // 영어만: en-US
recognition.interimResults = true; // 이야기를 하는 도중 번역 여부
```



음성 인식 결과를 확인하기 위해서는 `result` 라는 이벤트를 위에서 생성한 `recognition`이 인식하도록 만들어야 한다.

```js
recognition.addEventListener('result', 콜백함수);
```



음성 인식 이벤트를 발생시켜 반환되는 결과는 `e.results` 로 확인할 수 있으며, `SpeechRecognitionResultList`  객체를 반환한다. 해당 객체에서 원하는 결과 값을 반환받기 위해서는 아래와 같은 콜백함수를 사용해야 한다.

```js
const makeResult = (e) => {
  const transcript = [...e.results]
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  $resultElement.textContent = transcript; // 결과 입력
	...
};
```



그리고 음성 인식 이벤트가 종료되지 않도록 만들기 위해, `recognition`에 `end` 이벤트가 발생하면 재시작하도록 만들었다.

```js
recognition.addEventListener('end', recognition.start);
```

