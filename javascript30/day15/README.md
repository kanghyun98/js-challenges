day 15 학습 내용



### HTML

- `form` 요소를 사용해 값을 입력하는 기능을 만들었다.
  - `form` 요소 안에서 submit 이벤트 발생 시, `input` 요소의 데이터를 자동으로 전송하고 새로고침 되는데, 이를 방지하기 위해 `e.preventDefault()`를 넣어주었다. 이번 플젝은 `localStorage`를 사용해 새로고침 되어도 초기화되지 않지만, 자주 새로고침 되는 것을 방지하기 위해 넣어주었다.



### JavaScript

- `localStorage`를 사용하기 위해 두 개의 함수 `callData()`와 `saveData()`를 만들어주었다.

  ```js
  // localStorage를 위한 func
  const callData = (key) => {
    const savedData = localStorage.getItem(key);
    return JSON.parse(savedData);
  };
  
  const saveData = (key, value) => {
    const toJson = JSON.stringify(value);
    localStorage.setItem(key, toJson);
  };
  ```

  `localStorage`는 키-값의 상태를 가지며, 키와 값은 반드시 문자열이어야 한다. 하지만 이번 플젝을 구현하기 위해서는 배열 형태의 값을 저장해야 했고, 이를 위해 JSON 형태로 값을 저장해야 한다.

  물론 함수로 만들지 않고, `localStorage.setItem("key", JSON.stringify(arr));` 이렇게 구현할 수도 있지만, 코드가 복잡해보일 수 있기 때문에 함수로 만들어 구현하였다.

  `sessionStorage`도 사용 방법이 동일하며, 둘의 차이점은 `localStorage`는 브라우저 종료 후에 데이터가 사라지지만, `sessionStorage`는 사라지지 않는다는 점이다.

  - 참고자료: https://ko.javascript.info/localstorage#ref-22



처음에 `localStorage`를 사용할 것을 고려하지 않고 함수를 만들다가, 다시 만드느라 고생했다. 다음부터 초반에 코드를 짤 땐, 리액트에서처럼 상태값을 만드는 것과 같이 만들면 `localStorage`(or `sessionStorage`)를 추가하기 매우 편리할 것 같다.



디자인에 신경을 못써서 너무 아쉽다..ㅠㅠ (디자인은 참으로 어렵도다)
