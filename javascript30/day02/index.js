const $hourHand = document.querySelector('.clock-hour');
const $minuteHand = document.querySelector('.clock-minute');
const $secondHand = document.querySelector('.clock-second');

const runClock = () => {
  // 현재 시, 분, 초
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  const currentHourUnit12 = currentHour < 12 ? currentHour : 12 - currentHour;

  // 시계 기울기 단위
  const HOUR_DEG_UNIT = 360 / 12;
  const MINUTE_SEC_DEG_UNIT = 360 / 60;

  // 시계 기울기 계산
  const hourDeg = HOUR_DEG_UNIT * currentHourUnit12;
  const minuteDeg = MINUTE_SEC_DEG_UNIT * currentMinute;
  const secondDeg = MINUTE_SEC_DEG_UNIT * currentSecond;

  // 시계 동작(기울기 적용)
  $hourHand.style.transform = `rotate(${hourDeg}deg)`;
  $minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  $secondHand.style.transform = `rotate(${secondDeg}deg)`;
};

setInterval(runClock, 1000);
