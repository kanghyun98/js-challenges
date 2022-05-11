const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
const condition = (person) => {
  return 2021 - person.year >= 19;
};
// 1. is at least one person 19 or older?
console.log(people.some(condition));

// 2. is everyone 19 or older?
console.log(people.every(condition));

// 3. find the comment with the ID of 823423
const targetComment = comments.find((comment) => comment.id === 823423);
console.log(targetComment);

// 4. delete the comment with the ID of 823423
const targetCommentIndex = comments.findIndex(
  (comment) => comment.id === 823423
);

const filteredComments = [...comments]; // 배열 복사
filteredComments.splice(targetCommentIndex, 1);
console.log(filteredComments);
