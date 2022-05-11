# day 27 학습 내용



## HTML/CSS

```css
.container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  ...
}

.item {
  flex: 0 0 auto;
  ...
}
```

`flex: 0 0 auto;` 으로 설정해주면 **flex-grow: 0, flex-shrink:0 , flex-basis: auto**로 설정되게 된다



## JavaScript

마우스를 클릭해서 움직이면 스크롤되는 것처럼 동작하는 기능을 구현하였다.

- [`MouseEvent.pageX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX) : 화면 기준 마우스의 x 좌표 반환 (스크롤 반영), `clientX`를 사용해도 무방하다.
- [`Element.offsetLeft`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft) : `position: relative` 인 요소 기준으로 요소의 좌측 거리 반환 (고정)
- [`Element.scrollLeft`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft) : 스크롤바의 위치 반환 (0 ~)





참고 자료

- https://do-first-dream-next.tistory.com/entry/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%97%90-Flex%EB%A1%9C-%EA%B0%80%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%82%BD%EC%9E%85%ED%95%98%EA%B8%B0

  
