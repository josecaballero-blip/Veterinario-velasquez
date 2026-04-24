/**
 * caseModal.js — Modal de casos de éxito
 */
import { DOCTOR_NAME, waUrl, CASOS } from './config.js';

export function initCaseModal() {
  const overlay   = document.getElementById('caseModalOverlay');
  const img       = document.getElementById('caseModalImg');
  const badge     = document.getElementById('caseModalBadge');
  const name      = document.getElementById('caseModalName');
  const result    = document.getElementById('caseModalResult');
  const full      = document.getElementById('caseModalFull');
  const facts     = document.getElementById('caseModalFacts');
  const wa        = document.getElementById('caseModalWa');
  const closeBtn  = document.getElementById('caseModalClose');
  const box       = document.getElementById('caseModalBox');
  const imgWrap   = document.querySelector('.case-modal-img-wrap');
  const track     = document.getElementById('cmSliderTrack');
  const arrowPrev = document.getElementById('cmArrowPrev');
  const arrowNext = document.getElementById('cmArrowNext');
  const dotsEl    = document.getElementById('cmDots');
  const video     = document.getElementById('caseModalVideo');

  if (!overlay) return;

  let slide  = 0;
  let slides = 1;
  const dotItems = dotsEl ? [...dotsEl.querySelectorAll('.cm-dot')] : [];

  function goToSlide(idx) {
    idx = Math.max(0, Math.min(idx, slides - 1));
    slide = idx;
    track.style.transform = `translateX(-${slide * 100}%)`;
    dotItems.forEach((d, i) => d.classList.toggle('active', i === slide));
    arrowPrev.classList.toggle('cm-hidden', slide === 0);
    arrowNext.classList.toggle('cm-hidden', slide >= slides - 1);
    if (slide === 1 && video.src) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  function openCase(id) {
    const c = CASOS[id];
    if (!c) return;

    slide = 0;
    track.style.transform = 'translateX(0)';

    box.style.setProperty('--cm-color', c.color);
    img.src = c.img || '';
    img.alt = c.nombre;
    badge.textContent = c.badge;
    badge.style.background = c.color;
    name.textContent = c.nombre;
    result.innerHTML = `<i class="${c.resultIcon}"></i> ${c.result}`;
    result.style.setProperty('--cm-color', c.color);
    full.textContent = c.desc;

    facts.innerHTML = c.hechos.map(h =>
      `<div class="case-modal-fact"><i class="${h.icon}"></i><span>${h.texto}</span></div>`
    ).join('');

    wa.href = waUrl(`Hola ${DOCTOR_NAME}, vi el caso de ${c.nombre.replace(/[^\w\s,]/g,'')} en su página y me gustaría agendar una consulta para mi mascota.`);

    if (c.video && c.img) {
      // Foto + video: dos slides
      slides = 2;
      video.src = c.video;
      video.load();
      dotsEl.classList.remove('cm-hidden');
      arrowNext.classList.remove('cm-hidden');
      arrowPrev.classList.add('cm-hidden');
      dotItems.forEach((d, i) => d.classList.toggle('active', i === 0));
    } else if (c.video && !c.img) {
      // Solo video: saltar directo al slide del video
      slides = 2;
      video.src = c.video;
      video.load();
      slide = 1;
      track.style.transform = 'translateX(-100%)';
      dotsEl.classList.add('cm-hidden');
      arrowPrev.classList.add('cm-hidden');
      arrowNext.classList.add('cm-hidden');
      video.play().catch(() => {});
    } else {
      slides = 1;
      video.src = '';
      dotsEl.classList.add('cm-hidden');
      arrowNext.classList.add('cm-hidden');
      arrowPrev.classList.add('cm-hidden');
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCase() {
    video.pause();
    video.currentTime = 0;
    slide = 0;
    track.style.transform = 'translateX(0)';
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  arrowPrev.addEventListener('click', () => goToSlide(slide - 1));
  arrowNext.addEventListener('click', () => goToSlide(slide + 1));
  dotsEl.addEventListener('click', e => {
    const dot = e.target.closest('.cm-dot');
    if (dot) goToSlide(dotItems.indexOf(dot));
  });

  // Swipe táctil
  let tx = 0;
  imgWrap.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  imgWrap.addEventListener('touchend',   e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goToSlide(slide + (diff > 0 ? 1 : -1));
  }, { passive: true });

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-case]');
    if (btn && !overlay.contains(btn)) openCase(btn.dataset.case);
  });

  closeBtn.addEventListener('click', closeCase);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeCase(); });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     closeCase();
    if (e.key === 'ArrowLeft')  goToSlide(slide - 1);
    if (e.key === 'ArrowRight') goToSlide(slide + 1);
  });
}
