# day 25 학습 내용

매우매우 중요한 이벤트 버블링과 캡쳐 관련 내용들!

## HTML/CSS

```js
<body class="body">
  <div class="one">
    one
    <div class="two">
      two
      <div class="three">three</div>
    </div>
  </div>
  <button class="btn">button</button>
  <script type="module" src="./script.js"></script>
</body>
```

![image](https://user-images.githubusercontent.com/70627979/147852077-795ef588-21e1-430e-b137-f4847d1a076d.png)



## JavaScript

### Event Bubbling (이벤트 버블링)

##### **three -> two -> one**

이벤트 버블링은 클릭 이벤트가 **하위요소에서 상위요소**로 전달되어 가는 것

거품이 아래에서 위로 올라오듯이 이벤트가 발생한다고 생각하면 기억하기 쉬울 것 같다.

```js
function logText(e) {
  console.log(this.classList.value);
}

$divs.forEach(($div) =>
  $div.addEventListener('click', logText, {
    capture: false,  // default: false 이므로 생략 가능
  })
);
```

우선 일반 이벤트 리스너는 bubbling이 default값으로 되어있다.



### Event Capture (이벤트 캡처)

##### **one -> two -> three**

이벤트 캡쳐는 클릭 이벤트가 **상위요소에서 하위요소**로 전달되어 가는 것

`addEventListener` 메소드의 세 번째 인자로 capture 여부에 대한 설정을 추가해줄 수 있다.

```js
$divs.forEach(($div) =>
  $div.addEventListener('click', logText, {
    capture: false,
  })
);
```



### event.stopPropagation()

`event.stopPropagation()`은 단어 그대로 이벤트가 전파되는 것을 막는 것이다.

이벤트 버블링(캡쳐)가 더이상 발생하지 않게 막을 수 있으며, 버블링 시에는 최하위 요소에 대해서만 이벤트가 발생할 것이고, 캡쳐 시에는 최상위 요소에 대해서만 이벤트가 발생할 것이다.

위 예제를 예로 들면, **three**를 클릭했을 때 버블링 시에는 **three**가 출력될 것이고, 캡쳐 시에는 **one**이 출력될 것이다.

```js
function logText(e) {
  e.stopPropagation(); // stop bubbling or capture
  console.log(this.classList.value);
}
```



### Event Delegation (이벤트 위임)

이벤트 위임은 새로운 무언가가 아니라, 위에서 배운 이벤트 버블링과 캡쳐(주로 버블링)을 응용하는 것이다.

```html
<ul class="players">
  <li class="id1">player1</li>
  <li class="id2">player2</li>
  <li class="id3">player3</li>
  ...
  <li class="id11">player11</li>
</ul>
```

예를 들어 위처럼 선수 명단 리스트가 웹페이지에 존재하고, 선수를 클릭할 때마다 선수의 개인 정보가 표시되는 기능을 만든다면 이벤트 리스너를 모든 선수 이름마다 각각 추가해야 것일까? 만약 축구선수가 아니라 대학생 전체 명단이라면 어떻게 될까? 성능면에서 이벤트 리스너를 전체 리스트에 하나씩 추가해주는 것은 매우 비효율적일 것이다. 이러한 문제점을 이제 이벤트 버블링을 이용해서 해결하면 된다!

우선 이벤트를 `li`요소가 아닌 `ul`요소에 걸어주고 이벤트가 발생한 요소의 class명을 출력해주는 콜백 함수를 이벤트 리스너에 추가해준다. 그리고 `li`요소를 클릭하면 이벤트 버블링이 발생해 `li`의 class명이 출력되고, `ul`의 클래스명이 출력될 것이다.

만약 `li`요소에만 이벤트가 발생하게 구현하고 싶다면 `e.stopPropagation()` 혹은 `e.target` 을 이용하면 된다.

이렇게 이벤트 리스너를 상위요소 하나에만 추가하여 하위 요소 각각에 모두 추가하는 것과 동일한 효과를 얻는 것을 이벤트 위임이라 한다.



### Once

일반적인 이벤트 리스너는 설정한 이벤트가 발생할 때마다 콜백 함수가 반복해서 실행된다. 만약에 처음 한 번만 콜백 함수가 실행되고, 그 이후부터는 이벤트 리스너가 동작을 하지 않길 원한다면 `once` 값을 true로 변경해 구현할 수 있다.

`once`에 대한 설정은 `addEventListener` 메소드의 네 번째 인자에 넣어줄 수 있다.

```js
$button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  {
    once: true,
  }
);
```
