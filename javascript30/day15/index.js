const $contentWrapper = document.querySelector('.content-wrapper');
const $form = document.querySelector('.input-wrapper');
const $inputText = $form.querySelector('.input-text');

// localStorage를 위한 func
const callData = (key) => {
  const savedData = localStorage.getItem(key);
  return JSON.parse(savedData);
};

const saveData = (key, value) => {
  const toJson = JSON.stringify(value);
  localStorage.setItem(key, toJson);
};

// 초기값 설정
let planNumber = 0;
let planList = callData('plans') || [];

// 초기 페이지를 위한 func
const makeInitialPage = () => {
  addItem(planList);
};

// item 하나 만드는 func
const makeItem = (text, num) => {
  return `<li class="content-item">
      <input type="checkbox" name={item${num}} id={item${num}} />
      <label for={item${num}}>${text}</label>
    </li>`;
};

// 그리기
const addItem = (arr) => {
  const $ul = document.createElement('ul');
  $ul.className = 'content-list';

  arr.forEach((item) => {
    const $li = makeItem(item, planNumber);
    $ul.innerHTML += $li;
    planNumber += 1;
  });

  $contentWrapper.appendChild($ul);
};

const handleSubmit = (e) => {
  e.preventDefault(); // form 요소 이벤트 방지
  $contentWrapper.innerHTML = ''; // 비우기

  planList.push($inputText.value); // 추가
  saveData('plans', planList); // localStroage에 저장
  addItem(planList);

  $inputText.value = '';
};

makeInitialPage();
$form.addEventListener('submit', handleSubmit);
