# day 26 학습 내용

`DOM.getBoundingClientRect()` 함수를 사용해 DOM 요소가 원하는 곳에 위치하도록 구현하였는데, 정말 헷갈린다..

`offsetTop`과 함께 나중에 한 번 제대로 정리를 싹 해야겠다..!



간단하게 정리하자면, `DOM.getBoundingClientRect()`는 viewport를 기준으로 요소의 위치값을 생성해주는데, 이는 bottom, height, left, right, top, width, x, y 값을 반환한다.

![image](https://user-images.githubusercontent.com/70627979/147883872-8f5c5c1c-68e6-4df3-8b1d-d795c18a35ae.png)

https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
