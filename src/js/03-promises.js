import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const firstDelay = document.querySelector('[name="delay"]')
const stepDelay = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')

  
function createPromise(position, delay) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
  
  if (shouldResolve) {
    resolve({position, delay})
    } else {
    reject({position, delay})
    }
    }, delay)
    });}

form.addEventListener('submit', submitPromise)
  
function submitPromise(event) {

  event.preventDefault();

 const stepDelayValue = stepDelay.value;
 const amountValue = amount.value;
 let delay = firstDelay.value;

 for (let position = 1; position <= amountValue; position++) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
   Notiflix.Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ i, delay }) => {
    Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += stepDelayValue;
}}