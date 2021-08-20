const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

const timer = {
  intervalId: null,
  isActive: false,
  onStartChangeColor() {
    if (this.isActive) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.isActive = true;
      const min = 0;
      const max = colors.length - 1;
      refs.body.style.background = colors[randomIntegerFromInterval(min, max)];
     
    }, 1000);
    refs.startButton.disabled = true;
  },
  onStopChangeColor() {
    clearInterval(this.intervalId);
    refs.startButton.disabled = false;
    this.isActive = false;
  },
};

refs.startButton.addEventListener(
  'click',
  timer.onStartChangeColor.bind(timer),
);

refs.stopButton.addEventListener('click', timer.onStopChangeColor.bind(timer));
