// Sweepstakes JS
const modalLink = document.getElementsByClassName('modal-trigger')[0];
const modal = document.getElementsByClassName('modal-container')[0];

modalLink.addEventListener('click', e => {
  toggleVisible();
});

modal.addEventListener('click', e => {
  if (e.target.className === 'close-container' || e.target.className === 'close' || e.target.className === 'small material-icons' || e.target.className === 'modal-container') {
    toggleVisible();
  }
});

document.addEventListener('keyup', e => {
  if (e.which === 27) {
    toggleVisible();
  }
});

function toggleVisible() {
  modal.classList.toggle('invisible');
}

