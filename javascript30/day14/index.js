// primitive type(number, string, boolean)은 복사를 할 때 새롭게 생성되면서 복사가 되어 문제가 되지 않는다.

// 배열(객체)은 참조에 의한 할당 방식으로 동작하므로, 일반적인 방법으로 복사 시 두 변수가 같은 배열(객체)를 가리키게 된다.
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const arrCopy = players;
// arrCopy[1] = 'test';
// console.log(players, arrCopy);

// 방법1
const arrCopy2 = players.slice();
// arrCopy2[1] = 'test';
// console.log(players, arrCopy2);

// 방법2 (spread)
const arrCopy3 = [...players];
// arrCopy3[1] = 'test';
// console.log(players, arrCopy3);

// 객체도 동일하다.
// 얕은 복사 (spread)
const person = {
  name: 'Wes Bos',
  age: 80,
};

const objCopy = { ...person };
// objCopy.age = 24;
// console.log(person, objCopy);

// 깊은 복사 (JSON or Lodash deepclone 함수)
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};

const objCopy2 = JSON.parse(JSON.stringify(wes));
objCopy2.social.twitter = 'test';
console.log(wes, objCopy2);
