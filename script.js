// Resalta el horario que corresponde al día de hoy
(function () {
  const today = String(new Date().getDay()); // 0 = domingo
  document.querySelectorAll('.hours [data-days]').forEach((row) => {
    if (row.dataset.days.split(' ').includes(today)) row.classList.add('today');
  });
})();

// Visor de fotos de la galería
(function () {
  const dialog = document.querySelector('.lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const img = dialog.querySelector('img');

  document.querySelectorAll('.gallery button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const thumb = btn.querySelector('img');
      img.src = btn.dataset.full;
      img.alt = thumb.alt;
      dialog.showModal();
    });
  });

  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  // Cerrar al hacer clic fuera de la foto
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
})();
