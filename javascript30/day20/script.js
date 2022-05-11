window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const $results = document.querySelector('.results');

const recognition = new SpeechRecognition();

recognition.lang = 'ko-KR'; // 영어만: en-US
recognition.interimResults = true; // 이야기를 하는 도중 번역 여부

let $resultElement = document.createElement('p');
$results.appendChild($resultElement);

const makeResult = (e) => {
  const transcript = [...e.results]
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  $resultElement.textContent = transcript;
  console.log(e.results);

  if (e.results[0].isFinal) {
    $resultElement = document.createElement('p');
    $results.appendChild($resultElement);
  }
};

recognition.addEventListener('result', makeResult);

recognition.addEventListener('end', recognition.start);
recognition.start();
