// The, A, An 을 제외하고 올림차순 정렬
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const removeArticles = (word) => {
  const reg = new RegExp(/^(A |The |An )/i);
  return word.replace(reg, '').trim();
};

const handleSorting = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
};

const result = [...bands].sort((a, b) =>
  handleSorting(removeArticles(a), removeArticles(b))
);

console.log('정렬 전', bands);
console.log('artilces를 제외하고 정렬 후', result);
