'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

const openModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.querySelector('h1').style.color = '#28b487';
};

const closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', openModalWindow);

closeModal.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModalWindow();
});
