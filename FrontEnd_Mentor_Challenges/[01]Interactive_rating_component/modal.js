const modalForm = document.querySelector('.modal');
const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit');
const thankForm = document.querySelector('.thank-you');
const liTags = document.getElementsByTagName('li');

let clickedIndex = null;

function onClick(event) {
  event.preventDefault();

  for (let i = 0; i < liTags.length; i++) {
    liTags[i].setAttribute('clicked', false);
  }

  const index = event.target.textContent - 1;
  liTags[index].setAttribute('clicked', true);
  clickedIndex = index;
}

function onSubmit(event) {
  event.preventDefault();
  if (!clickedIndex) return;
  form.classList.toggle('submit');
  thankForm.classList.toggle('none');
}

function addEventToliTag() {
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].addEventListener('click', onClick);
    liTags[i].setAttribute('clicked', false);
  }
}

function init() {
  modalForm.addEventListener('submit', onSubmit);
  addEventToliTag();
}

init();
