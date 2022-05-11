const $videos = document.querySelectorAll('[data-time]');

const videoTimesWithSecs = [...$videos].map((node) => {
  const videoTime = node.dataset.time;
  const [mins, secs] = videoTime.split(':');
  return Number(mins) * 60 + Number(secs);
});

const totalVideoTimes = videoTimesWithSecs.reduce((prev, cur) => prev + cur);

const HOUR_UNIT = 60 * 60;
const MIN_UNIT = 60;

const totalHours = Math.floor(totalVideoTimes / HOUR_UNIT);
const totalMins = Math.floor((totalVideoTimes % HOUR_UNIT) / MIN_UNIT);
const totalSecs = Math.floor((totalVideoTimes % HOUR_UNIT) % MIN_UNIT);

console.log(totalHours, totalMins, totalSecs);
