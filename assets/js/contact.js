document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Standard-Formular-Absenden (Seitenreload)

  const form = event.target;
  const data = new FormData(form);

  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(response => {
    if (response.ok) {
      form.style.display = 'none';  // Formular ausblenden
      const message = document.getElementById('form-message');
      message.style.display = 'block';
      message.textContent = 'Danke für deine Nachricht! Ich melde mich bald.';
    } else {
      alert('Beim Absenden ist ein Fehler aufgetreten.');
    }
  })
  .catch(error => {
    alert('Beim Absenden ist ein Fehler aufgetreten.');
    console.error(error);
  });
});
