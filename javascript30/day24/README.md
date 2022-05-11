# day 24 학습 내용

내 개인 블로그 만들 때 사용했었던 스킬..!

다시 복습할 수 있는 기회였다.

## HTML/CSS

스크롤을 내리면 `nav`가 따라오는 기능인데, 내렸을 때 로고가 `nav`에 추가되는 모션을 만들기 위해 `transform`과 `flex` 를 사용하였다.

```css
.navigation .logo {
  transform: scaleX(0);
  width: 0;
  flex: 0;
  transition: all 0.1s;
}

.sticky .navigation .logo {
  transform: scaleX(1);
  flex: 1;
}
```



추가적으로 `nav`에 `sticky` class가 추가되면, `nav`의 `position: fixed;` , `top: 0;`으로 변경되는데, 이러면 화면이 밀려 `main` 이 위로 올라가지므로, `main`의 `padding-top`을 `nav` 높이만큼 추가해줘야 한다. 이는 JavaScript 코드로 추가해주었다.



## JavaScript

`window.addEventListener('scroll', handleNav);` 으로 화면이 스크롤되는 것을 감지한다.

```js
const $nav = document.querySelector('.navigation');
const $main = document.querySelector('.main');

const height = $nav.offsetTop;

const handleNav = () => {
  if (window.scrollY > height) {
    document.body.classList.add('sticky');
    $main.style.paddingTop = `${$nav.clientHeight}px`;
  } else {
    document.body.classList.remove('sticky');
    $main.style.paddingTop = 0;
  }
};

window.addEventListener('scroll', handleNav);
```

