const $navLists = document.querySelectorAll('.nav-wrapper__list');
const $navBackground = document.querySelector('.nav-background');
const $nav = document.querySelector('.nav');

const handleAddMore = (e) => {
  const $dropDown = e.target.querySelector('.list-dropdown');

  $navBackground.classList.add('enter');
  $dropDown.classList.remove('hidden');

  const dropDownInfo = $dropDown.getBoundingClientRect();
  const navInfo = $nav.getBoundingClientRect();

  console.log(dropDownInfo);

  const backgroundChangeInfo = {
    width: dropDownInfo.width,
    height: dropDownInfo.height,
    left: dropDownInfo.left - navInfo.left,
    top: dropDownInfo.top - navInfo.top - 80, // ?
  };

  $navBackground.style.width = `${backgroundChangeInfo.width}px`;
  $navBackground.style.height = `${backgroundChangeInfo.height}px`;
  $navBackground.style.transform = `translate(${backgroundChangeInfo.left}px, ${backgroundChangeInfo.top}px)`;
};

const handleRemoveMore = (e) => {
  const $dropDown = e.target.querySelector('.list-dropdown');

  $navBackground.classList.remove('enter');
  $dropDown.classList.add('hidden');
};

$navLists.forEach((list) => {
  list.addEventListener('mouseenter', handleAddMore);
  list.addEventListener('mouseleave', handleRemoveMore);
});
