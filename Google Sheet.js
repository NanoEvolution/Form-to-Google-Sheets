const scriptURL = 'https://script.google.com/macros/s/AKfycbylk0-9m_XZbG117Ns2_ApIq3zzfkoK_4PermvqYUYKmxxY5o6faTUE-5866H9BGH5MAA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Gracias! Tu formulario se ha enviado correctamente al servidor :)." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

 // Función para cambiar el estilo del botón marcable
 function toggleAcceptButton() {
  var button = document.getElementById("accept-button");
  var checkbox = document.getElementById("accept-terms");
  if (checkbox.checked) {
      button.classList.add("clicked");
  } else {
      button.classList.remove("clicked");
  }
}