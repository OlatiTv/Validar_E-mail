let email = document.getElementById('email')
let form = document.querySelector('form')
let textForm = document.getElementById('textForm')
let textEmail = document.getElementById('textEmail')

form.addEventListener('submit', e => {
  if (validatorEmail(email.value) === true) {
    console.log(email.value)
    textForm.textContent = ''
    textEmail.textContent = ''
    textForm.textContent = 'requisição atendida'
    email.focus()
  }

  e.preventDefault()
})

email.addEventListener('keyup', () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = 'O formato do email deve ser Ex: abc@gmail.com'
    textForm.textContent = ''
  } else {
    textEmail.textContent = ''
  }
})

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
  return emailPattern.test(email)
}
