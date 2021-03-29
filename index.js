const mainContainer = document.querySelector('.progressbar-main');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const progressBarContainer = document.createElement('div');

progressBarContainer.classList.add('progressbar-container');

const progressBar = document.createElement('div');
progressBarContainer.append(progressBar);
wrapper.append(progressBarContainer);
progressBar.classList.add('progressbar');
const displayText = document.createElement('div');
displayText.classList.add('display-text');
wrapper.append(displayText);

const progressCircularContainer = document.createElement('div');

progressCircularContainer.classList.add('progress-circular-container');

const progressCircular = document.createElement('div');
progressCircularContainer.append(progressCircular);
const circularWrapper = document.createElement('div');
circularWrapper.classList.add('circular-wrapper');
circularWrapper.append(progressCircularContainer);
wrapper.append(circularWrapper);
progressCircular.classList.add('progress-circle');
const displayTextCircle = document.createElement('div');
displayTextCircle.classList.add('display-text-circle');
circularWrapper.append(displayTextCircle);

mainContainer.append(wrapper);
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

    const circleWidth = `${(RATES[idx] / RATES[RATES.length - 1]) * 200}px`;
    const circleHeight = `${(RATES[idx] / RATES[RATES.length - 1]) * 200}px`;

    progressCircular.style.width = circleWidth;
    progressCircular.style.height = circleHeight;
    displayTextCircle.textContent = width;
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