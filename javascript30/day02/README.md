day2 학습 내용

### CSS

`transform-origin`: `transform`의 `rotate` 기준점을 설정 (자세한 내용은 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)에서)

```
tramsform-origin: bottom;
```

위와 같이 설정해주면, 기준점이 바닥부분의 가운데(50% 100%)로 설정된다.



이전 방식)

나는 00시 00분 00초를 기준으로 초기값을 설정해놨고, 처음에 `transform-origin`을 알았다면 시침, 분침, 초침에 각각 `div`요소 하나로 충분히 구현할 수 있었지만, `div>div` 로 만들고 하위 `div`가 `height`의 50%만 채우게 만들어서 구현했었다.

```html
// html
<div class="clock-body">
	<div class="clock-hour">
     <div class="real-hand"></div>
  </div>
  <div class="clock-minute">
     <div class="real-hand"></div>
  </div>
  <div class="clock-second">
     <div class="real-hand"></div>
  </div>
</div>
```

```css
// css
.real-hand {
  width: 100%;
  height: 50%;
  border: 1px solid black;
  background-color: powderblue;
}
```



### 구현 화면

![image](https://user-images.githubusercontent.com/70627979/143889366-373e508f-ddac-478e-9dd6-b13c97a26d53.png)
