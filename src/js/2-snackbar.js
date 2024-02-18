import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const iziToastOptions = {
  position: 'topRight',
  icon: '',
};

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delay = document.querySelector('[name="delay"]');
  const state = document.querySelector('[name="state"]:checked');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.value === `fulfilled`) {
        resolve(`✅ Fulfilled promise in ${delay.value}ms`);
      } else if (state.value === `rejected`) {
        reject(`❌ Rejected promise in ${delay.value}ms`);
      }
    }, delay);
  });

  promise
    .then(e => {
      iziToast.success({
        ...iziToastOptions,
        message: e,
      });
      console.log(e);
    })
    .catch(e => {
      iziToast.error({
        ...iziToastOptions,
        message: e,
      });
      console.log(e);
    });
});
