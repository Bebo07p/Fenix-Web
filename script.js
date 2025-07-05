// Simulación de formulario
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent = 'Mensaje enviado (simulado). ¡Gracias!';
});

// Estado del servidor Discord
const serverID = '1352325078016200714';
const statusEl = document.getElementById('discord-status');

fetch(`https://discord.com/api/guilds/${serverID}/widget.json`)
  .then(res => res.json())
  .then(data => {
    statusEl.textContent = `?? "${data.name}" está en línea con ${data.presence_count} usuarios.`;
  })
  .catch(() => {
    statusEl.textContent = 'No se pudo obtener el estado del servidor.';
  });