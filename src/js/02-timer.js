import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const daysElement = document.querySelector('span[data-days]');
const hoursElement = document.querySelector('span[data-hours]');
const minutesElement = document.querySelector('span[data-minutes]');
const secondsElement = document.querySelector('span[data-seconds]');

buttonStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = Date.now();
    selectedTime = Number(selectedDates[0].getTime());
    if (+selectedTime <= +currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    else {
        buttonStart.removeAttribute('disabled');
    }
  },
};

flatpickr(input, options);

const timer = {
  start() {
    const intervalID = setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = selectedTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(timeLeft);

      updateTimer({ days, hours, minutes, seconds });

      if (timeLeft < 999) {
        clearInterval(intervalID);
      }
    }, 1000);
  },
};

buttonStart.addEventListener('click', () => {
    buttonStart.setAttribute('disabled', true);
    timer.start();
})

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}