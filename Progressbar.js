const mainContainer = document.querySelector('.progressbar-main');
const progressBarContainer = document.createElement('div');

progressBarContainer.classList.add('progressbar-container');

const progressBar = document.createElement('div');
progressBarContainer.append(progressBar);
mainContainer.append(progressBarContainer);
progressBar.classList.add('progressbar');
const displayText = document.createElement('div');
displayText.classList.add('display-text');
mainContainer.append(displayText);

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
    const width = `${(RATES[idx] / RATES[RATES.length - 1]) * 100}%`;
    progressBar.style.width = width;
    displayText.textContent = width;
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