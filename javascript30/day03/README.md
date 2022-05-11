day3 학습 내용

### CSS

[CSS Variable](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)를 강의를 통해 처음 접하였다. 처음에는 구현된 화면만 보고 만들었기 때문에, CSS Variable 없이 JavaScript만을 이용해 구현하였다.



#### CSS Variable

CSS에서 통일된 값을 사용할 때, 각각에 접근하는 방법보다 CSS Variable을 이용하면 쉽게 변경시킬 수 있다. 

아래 예시는 이번 플젝과 관계 없이 간단한 사용법을 쉽게 익히기 위한 것이다.

```css
// CSS

// 변수 선언하기 (두 개의 붙임표로 시작하는 속성의 이름과 함께)
:root {
  --base: #ffc600;
  --spacing: 1rem;
  --blur: 0.1rem;
}

// 변수 사용하기
.test1 {
  color: var(--base);
  padding: var(--spacing);
  filter:blur(var(--blur));
}

.test2 {
  color: var(--base);
}
```

```js
// JavaScript
document.documentElement.style.setProperty("--base", "#f5deb3");  // --base 변수 값 변경
```



**Input 요소의 range 타입**을 처음 사용해보았는데, [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)를 보면서 진행하니 간단했다.



구현 화면

![image](https://user-images.githubusercontent.com/70627979/143887070-88c9898b-d8ef-4ba7-9566-ff07a666035a.png)