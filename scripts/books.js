(() => {
  const bookForm = document.querySelector('#bookForm');
  const inputs = document.querySelectorAll('input');
  const bookFormBtn = document.querySelector('#bookFormBtn');
  const infoAfterSubmit = document.querySelector('#infoAfterSubmit');
  const inputName = document.querySelector('#inputName');
  const inputEmail = document.querySelector('#inputEmail');

  bookForm.addEventListener('input', (e) => {
    if(Array.from(inputs).every(el => el.value != '')) {
      bookFormBtn.disabled = false;
    }
  });

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    infoAfterSubmit.innerText = `Спасибо ${inputName.value}, мы свяжемся с вами по адресу ${inputEmail.value}.`;

    e.target.reset();
    bookFormBtn.disabled = true;
  })
})();