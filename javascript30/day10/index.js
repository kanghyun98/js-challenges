const $list = document.querySelector('.list');
const $items = document.querySelectorAll('.list-item > input');

let lastChecked;

const handleCheck = (e) => {
  if (e.target.checked === undefined) {
    return;
  }

  let isBetweenItem = false;

  if (e.target.checked && e.shiftKey) {
    console.log(lastChecked, e.target);

    [...$items].forEach((item) => {
      if (e.target === item || lastChecked == item) {
        isBetweenItem = !isBetweenItem;
      }

      if (isBetweenItem) {
        item.checked = true;
      }
    });
  }

  lastChecked = e.target;
};

$list.addEventListener('click', handleCheck);
