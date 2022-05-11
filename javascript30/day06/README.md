day 6 학습 내용

#### HTML

- form 요소를 사용하긴 했지만, 입력값에 따라서 결과가 계속 바뀌는 페이지에서는 form 요소의 활용도가 떨어지는 듯하다. 굳이 필요하지 않은 상황에서는 빼도 되는지 알아봐야겠다.



#### JavaScript

- [fetch API](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form)를 이용해서 데이터를 받아왔다. 어려운 것은 없었지만, 정신놓고 코딩하다가 전역 변수에 Promise 객체를 할당하는 실수를 범했었는데, 문득 왜 할당되는거지?라는 생각이 들었다.

  `fetch` API는 비동기 처리 함수이기 때문에, 아래 코드의 `test` 변수에 값이 할당되기 전에 `console.log(test);` 가 먼저 실행되어 `undefined`가 뜰 것으로 생각했다. 그런데 신기하게도 내부에 값이 들어있는 `Promise` 객체가 반환됐다! 비동기 동작 방식의 원리를 아무리 생각해봐도 이해할 수 없는데, 왜 그럴까? 

```js
const DATA_URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// json 데이터 가져오는 함수 (비동기)
const getData = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
};

const test = getData(DATA_URL);
console.log(test);
console.log('test');

// 예상 결과
// undefined
// test (문자열)

// 실제 결과
// Promise 객체 (내부에 값들이 다 들어있음)
// test (문자열)
```



- 검색창의 값이 바뀔 때마다 검색 결과가 바뀌게 만들었다. 입력값을 바꿀 때마다 요청을 계속 보내게 된다면, 서버에 무리가 갈텐데 프론트엔드 단에서 해결할 수 있는 방법은 없을까? (백엔드에서는 요청을 n초에 1번 받아들인다거나, 짧은 시간에 연속된 요청이 들어온다면 마지막의 요청만 처리하는 방식이 존재하는 것으로 알고 있다.)

- 전에 검색을 구현할 때는 `includes`를 사용해 구현했었는데, 대소문자 처리를 직접 진행해줬어야 했다. 이번에는 정규표현식과 match를 사용해보았는데, 대소문자 구분을 안해줘도 돼서 상당히 편리했다. 앞으로 용이하게 사용해야겠다ㅎ

  ```js
  const regex = new RegExp(keyword, 'gi');
  const matchedData = word.match(regex);
  ```

- 검색 입력이 없을 때와 검색 값이 존재하지 않을 때 '결과 없음'이 나오도록 구현하였다.



#### 구현 화면

![image](https://user-images.githubusercontent.com/70627979/144664519-beefaf99-7aaa-4537-a54e-f82c743f938c.png)

![image](https://user-images.githubusercontent.com/70627979/144664606-2be6e776-410f-4aec-af80-a1b8be34e0a6.png)