const $body = document.querySelector('body');
const $start = document.querySelector('.start-ment');

const keyLog = [];
const secretCode = 'santa';

window.addEventListener('keyup', (e) => {
  keyLog.push(e.key);
  keyLog.splice(-secretCode.length - 1, keyLog.length - secretCode.length); // -secretCode.length - 1 을 0으로 바꿔도 된다
  console.log(keyLog.join(''));

  if (keyLog.join('') === secretCode) {
    console.log('Merry Christmas');
    $body.classList.add('santa');
    $start.innerHTML = '';
    cornify_add();
  }
});
