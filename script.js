const scriptURL = 'https://script.google.com/macros/s/AKfycbw6Op5Bw6QDwz_TGs4AhZseJQPf5oSUWYmRxfzbdyEPi20ZfaovLQZZnkxoKEAPKoOUQw/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



