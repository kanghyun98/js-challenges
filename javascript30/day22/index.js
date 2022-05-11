const $anchors = document.querySelectorAll('a');
const $body = document.querySelector('body');

const $highlight = document.createElement('span');
$highlight.classList.add('highlight');
$body.appendChild($highlight);

const moveHighlight = (e) => {
  if (e.target.tagName !== 'A') {
    return;
  }

  const targetInfo = e.target.getBoundingClientRect();

  const highlightChangeInfo = {
    width: targetInfo.width,
    height: targetInfo.height,
    left: targetInfo.left + window.scrollX,
    top: targetInfo.top + window.scrollY,
  };

  $highlight.style.width = `${highlightChangeInfo.width}px`;
  $highlight.style.height = `${highlightChangeInfo.height}px`;
  $highlight.style.transform = `translate(${highlightChangeInfo.left}px, ${highlightChangeInfo.top}px)`;
  console.log($highlight.style.left);
};

$body.addEventListener('mouseover', moveHighlight);
