const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// 1. Filter the list of inventors for those who were born in the 1500's
const filteredPeople = inventors.filter(
  (inventor) => inventor.year < 1600 && inventor.year >= 1500
);
console.log('1: ', filteredPeople);

// 2. Give us an array of the inventors first and last names
const onlyName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log('2: ', onlyName);

// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((a, b) => a.year - b.year);
console.log('3: ', inventors);

// 4. How many years did all the inventors live all together?
// forEach
let sumYears = 0;
inventors.forEach((inventor) => {
  const sumYear = inventor.passed - inventor.year;
  sumYears += sumYear;
});
console.log('4.1: ', sumYears);

// reduce
const sumYears2 = inventors.reduce((acc, cur) => {
  return acc + (cur.passed - cur.year);
}, 0);
console.log('4.2: ', sumYears2);

// 5. Sort the inventors by years lived
inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year));
console.log('5: ', inventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris (이 사이트에서 아래 코드 실행 시 정상 작동)
const wordList = document.querySelectorAll('.mw-category a');
const arr = [...wordList]
  .map((a) => a.innerText)
  .filter((name) => name.includes('de'));
// console.log('6: ', arr);

// 7. sort Exercise
// Sort the people alphabetically by last name
people.sort((a, b) => {
  const aNameArr = a.split(',');
  const bNameArr = b.split(',');
  return aNameArr[1] > bNameArr[1] ? 1 : -1;
});
console.log('7: ', people);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const count = data.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log('8: ', count);
