const $images = document.querySelectorAll('.slide');

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry); // 확인하기
      entry.target.style.transform = 'translateX(0)';

      observer.unobserve(entry.target); // observe 종료
    }
  });
};

const observer = new IntersectionObserver(handleIntersect);

[...$images].forEach((img) => {
  observer.observe(img);
});
