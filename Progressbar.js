const progressBarContainer = document.querySelector('.progressbar-main');
const progressBar = document.createElement('div');
progressBarContainer.append(progressBar);
progressBar.classList.add('progressbar');

const RATES = [0, 100, 200, 300, 400];
let start = true;
let idx = 0;

let id;

const shift = () => {
  if (idx > RATES.length - 1) {
    clearInterval(id);
    start = true;
    idx = 0;
  } else {
    progressBar.style.width = `${(RATES[idx] / RATES[RATES.length - 1]) * 100}%`;
    idx += 1;
  }
};
const updateId = () => {
  id = setInterval(shift, 1000);
};
const showProgress = () => {
  if (start) {
    start = false;
    updateId();
  }
};

showProgress();
setInterval(showProgress, 3500);