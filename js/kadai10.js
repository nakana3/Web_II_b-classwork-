const slider = document.querySelector('#slider');
const sliderItems = slider.querySelectorAll('li');

let curtIndex = 0;
let nextIndex = 0;
const delay = 3000;
sliderItems[curtIndex].classList.add('show');

setInterval(() => {
  nextIndex = (curtIndex + 1) % sliderItems.length;

  // 表示する画像のクラスに'show'を付与と削除をして遷移させる
  // toggle -> 付与されていれば削除、削除されていれば付与
  sliderItems[curtIndex].classList.toggle('show');
  sliderItems[nextIndex].classList.toggle('show');
  curtIndex = nextIndex;
}, delay);
