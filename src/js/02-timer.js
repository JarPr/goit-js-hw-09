import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTime = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const seconds = document.querySelector('[data-seconds]');
const minutes = document.querySelector('[data-minutes]');
const hours = document.querySelector('[data-hours]');
const days = document.querySelector('[data-days]');

startButton.disabled = true;

flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDates = new Date(selectedDates[0]).getTime();

      if (new Date > selectedDates) {
       Notify.failure('Please choose a date in the future');
        } else {
        startButton.disabled = false;
      }
    }
  });

  
function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};

startButton.addEventListener('click', () => {
  let timerCountdown = setInterval(() => {
    startButton.disabled = true;
    
    let countdown = new Date(dateTime.value) - new Date;
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      days.textContent = addLeadingZero(timeObject.days);
      hours.textContent = addLeadingZero(timeObject.hours);
      minutes.textContent = addLeadingZero(timeObject.minutes);
      seconds.textContent = addLeadingZero(timeObject.seconds);
   
      if (timeObject.days === 0 && timeObject.hours === 0 && timeObject.minutes === 0 && timeObject.seconds === 0) {
        Notify.success("The countdown is complete")
        clearInterval(timerCountdown);
        startButton.disabled = false;
      }
    }
  }, 1000)
});


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
};