
const buttonStart = document.querySelector('.buttonStart');
const buttonStop = document.querySelector('.buttonStop');
const bodyColor = document.querySelector('body');

buttonStart.addEventListener("click", onStart);
buttonStop.addEventListener("click", onStop);

buttonStop.setAttribute('disabled', true);

function onStart() {

  timerId = setInterval(() => {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  }, 1000);
  buttonStart.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled', true);
};

function onStop() {

  clearInterval(timerId);
  buttonStop.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled', true);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
