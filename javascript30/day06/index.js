// json 데이터(배열) 가져오는 함수
const getAllData = async () => {
  try {
    const url =
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    console.log('몇번이나 데이터를 요청할까?'); // 데이터 요청 횟수 확인(개선 필요?)
    return data;
  } catch (error) {
    console.log(error);
  }
};

// keyword로 검색 결과(배열) 생성하는 함수
const getSearchedData = async (keyword) => {
  try {
    const allData = await getAllData();
    const searchedData = allData.filter((data) => {
      const regex = new RegExp(keyword, 'gi');
      return data.city.match(regex) || data.state.match(regex);
    });
    return searchedData;
  } catch (error) {
    console.log(error);
  }
};

// 하이라이트 만드는 함수
const highlight = (word, keyword) => {
  if (keyword && word) {
    const regex = new RegExp(keyword, 'gi');
    const matchedData = word.match(regex);
    return word.replace(regex, `<span class="hl">${matchedData}</span>`);
  } else {
    return word;
  }
};

// 결과 DOM 만드는 함수
const makeListItem = ($target, data, keyword) => {
  const { city, state, population } = data;

  const resultInfo = document.createElement('li');
  resultInfo.className = 'result-item';

  const resultName = document.createElement('span');
  resultName.className = 'result-name';
  resultName.innerHTML = `${highlight(city, keyword)}, ${highlight(
    state,
    keyword
  )}`;

  const resultPopulation = document.createElement('span');
  resultPopulation.className = 'result-population';
  resultPopulation.innerText = population;

  resultInfo.appendChild(resultName);
  resultInfo.appendChild(resultPopulation);
  $target.appendChild(resultInfo);
};

// 검색 결과 화면에 보여주는 함수 ($target 받을지말지 결정)
const onSearch = async (keyword, $target) => {
  try {
    const searchedData = await getSearchedData(keyword); // 검색 결과 배열

    const resultContainer = document.createElement('ul');
    resultContainer.className = 'result-list';
    if (searchedData.length > 0) {
      //  검색 결과 없을 때 처리를 위해
      searchedData.forEach((data) => {
        makeListItem(resultContainer, data, keyword);
      });
      $target.appendChild(resultContainer);
    } else {
      console.log('no result');
      $target.innerHTML = `<div class="no-result">결과 없음</div>`;
    }
  } catch (error) {
    console.log(error);
  }
};

// 검색 이벤트 콜백 함수
const searchByKeyword = (e, $target) => {
  const keyword = e.target.value;

  $target.innerHTML = ''; // 검색 결과 초기화
  if (keyword.length == 0) return; // 검색어 입력 안했을 경우

  onSearch(keyword, $target);
};

const $searchBox = document.querySelector('.search-box');
const $resultList = document.querySelector('.search-result');

$searchBox.addEventListener('input', (e) => searchByKeyword(e, $resultList));
