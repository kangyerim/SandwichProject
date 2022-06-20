const modalForm = document.querySelector('.modal');
const submitButton = document.querySelector('submit');
const liTags = document.getElementsByTagName('li');

function onClick(event) {
  event.preventDefault();
  console.log(event.target.textContent);
}

function onSubmit(event) {
  event.preventDefault();
  console.log('submit!!');
}

function addEventToliTag() {
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].addEventListener('click', onClick);
  }
}

function init() {
  modalForm.addEventListener('submit', onSubmit);
  addEventToliTag();
}

init();
