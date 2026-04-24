/**
 * modal.js — Sistema de modal de servicios
 * Un único modal reutilizable que se rellena dinámicamente.
 * Los botones usan data-service="id" para activar el modal correcto.
 */
import { DOCTOR_NAME, waUrl, SERVICIOS } from './config.js';

function openModal(id) {
  const s = SERVICIOS[id];
  if (!s) return;

  document.getElementById('modalEmoji').textContent  = s.emoji;
  document.getElementById('modalTitle').textContent  = s.titulo;
  document.getElementById('modalDesc').textContent   = s.desc;
  document.getElementById('modalPrice').textContent  = s.precio;

  const lista = document.getElementById('modalList');
  lista.innerHTML = s.puntos.map(p => `<li>${p}</li>`).join('');

  const waText = `Hola ${DOCTOR_NAME}! Me interesa el servicio de ${s.titulo}. ¿Podemos coordinar una visita?`;
  document.getElementById('modalWa').href = waUrl(waText);

  const header = document.getElementById('modalHeader');
  header.style.background = `linear-gradient(135deg, ${s.color}, ${s.color}cc)`;
  lista.style.setProperty('--li-color', s.color);

  const overlay = document.getElementById('modalOverlay');
  overlay.style.display = 'flex';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

export function initModal() {
  // Delegación de eventos: cualquier elemento con data-service abre el modal
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-service]');
    if (btn) openModal(btn.dataset.service);
  });

  // Botón de cerrar
  document.getElementById('modalClose')?.addEventListener('click', closeModal);

  // Clic en el overlay (fuera del modal)
  document.getElementById('modalOverlay')?.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  // Evitar cierre al hacer clic dentro del modal
  document.getElementById('modalBox')?.addEventListener('click', e => e.stopPropagation());

  // Cerrar con tecla Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}
