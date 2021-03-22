const progressBarContainer = document.querySelector('.progressbar-main');
const progressBar = document.createElement('div');
progressBarContainer.append(progressBar);
progressBar.classList.add('progressbar');

const RATES = [0, 100, 200, 300, 400];
let start = true;
let idx = 0;

const showProgress = () => {
  if (start) {
    start = false;
    const id = setInterval(shift, 1000);
    function shift() {
      if (idx > RATES.length - 1) {
        clearInterval(id);
        start = true;
        idx = 0;
        showProgress();
      } else {
        progressBar.style.width = `${(RATES[idx] / RATES[RATES.length - 1]) * 100}%`;
        idx += 1;
      }
    }
  }
};
showProgress();