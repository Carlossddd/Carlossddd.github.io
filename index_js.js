// index.js - comportamiento básico para la fanpage

// Función para enviar el mensaje del formulario de contacto
function enviarMensaje() {
  const nombre = document.getElementById('nombre').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !mensaje) {
    alert('Por favor completa tu nombre y mensaje antes de enviar.');
    return;
  }

  // Aquí podrías integrar envío real vía API; por ahora mostramos confirmación
  alert(`¡Gracias, ${nombre}! Tu mensaje ha sido recibido.`);

  // Limpiar formulario
  document.getElementById('nombre').value = '';
  document.getElementById('mensaje').value = '';
}

// Smooth scroll para los enlaces del nav
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fallback para imágenes rotas: si una imagen falla, mostrar una imagen por defecto
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.src = 'https://via.placeholder.com/400x250?text=Imagen+no+disponible';
  });
});
