import Notiflix from 'notiflix';

  const formCreatePromise = document.querySelector('.form')
  const firstDelay = document.querySelector('input[name="delay"]')
  const stepDelay = document.querySelector('input[name="step"]')
  const amount = document.querySelector('input[name="amount"]')

  
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
    });
  }

  formCreatePromise.addEventListener('submit', submitCreatePromise)
  function submitCreatePromise(event) {
    event.preventDefault();

let delay = firstDelay.valueAsNumber;
const stepDelayValue = stepDelay.valueAsNumber;
const amountValue = amount.valueAsNumber;

for (let position = 1; position <= amountValue; position++) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
   Notiflix.Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ i, delay }) => {
    Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += stepDelayValue;
}

  }
