/**
 * config.js — Configuración global del sitio
 * ─────────────────────────────────────────────
 * TODA la información del sitio vive aquí.
 * Cambia cualquier dato y se actualiza automáticamente en toda la app.
 */

// ════════════════════════════════════════════
// IDENTIDAD
// ════════════════════════════════════════════
export const DOCTOR_NAME      = 'Dr. Germán';
export const DOCTOR_FULL_NAME = 'Dr. Germán Velásquez Gutiérrez';
export const SPECIALTY        = 'Médico Internista Veterinario';
export const CITY             = 'Medellín, Colombia';

// ════════════════════════════════════════════
// CONTACTO
// ════════════════════════════════════════════
export const WA_NUMBER     = '573104668704';   // sin + ni espacios
export const PHONE_DISPLAY = '+57 310 466 8704';
export const WA_BASE_URL   = `https://wa.me/${WA_NUMBER}`;

// ════════════════════════════════════════════
// REDES SOCIALES
// ════════════════════════════════════════════
export const TIKTOK_URL = 'https://www.tiktok.com/@germanveterinario?_r=1&_t=ZS-95DrlZFc1Uj';

// ════════════════════════════════════════════
// SERVICIOS (modales)
// ════════════════════════════════════════════
export const SERVICIOS = {
  vacunacion: {
    color:  '#FF8C42',
    emoji:  '💉',
    titulo: 'Vacunación',
    desc:   'Voy hasta tu casa con todo el equipo listo. Tu mascota no tiene que salir ni estresarse. Yo me encargo de todo: aplico la vacuna, registro en el carné y te explico el siguiente esquema.',
    puntos: [
      'Vacunas para perros y gatos',
      'Carné de vacunación incluido y actualizado',
      'Te recuerdo cuándo es la próxima dosis',
      'Sin colas, sin estrés, desde la comodidad de tu hogar',
    ],
    precio: '$130.000 – Domicilio y revisión incluidos',
  },
  consulta: {
    color:  '#4DB6AC',
    emoji:  '🩺',
    titulo: 'Consulta General',
    desc:   'Llego a tu casa con maletín médico completo. Reviso a tu animalito de pies a cabeza: temperatura, corazón, pulmones, piel, ojos, oídos y más. Te entrego un diagnóstico claro y un plan de tratamiento.',
    puntos: [
      'Examen físico completo en casa',
      'Diagnóstico detallado y por escrito',
      'Prescripción de medicamentos si se requiere',
      'Seguimiento por WhatsApp sin costo adicional',
    ],
    precio: '$120.000',
  },
  medicinaInterna: {
    color:  '#01579B',
    emoji:  '🫀',
    titulo: 'Medicina Interna + Electrocardiograma',
    desc:   'Consulta especializada de medicina interna con electrocardiograma incluido. Evaluación profunda del corazón, órganos y sistemas internos directamente en tu hogar, sin estrés para tu mascota.',
    puntos: [
      'Examen físico completo y detallado',
      'Electrocardiograma (ECG) incluido en la visita',
      'Evaluación cardiológica y de órganos internos',
      'Diagnóstico claro con plan de tratamiento',
      'Prescripción de medicamentos si se requiere',
      'Seguimiento por WhatsApp sin costo adicional',
    ],
    precio: '$250.000 – ECG + consulta incluidos',
  },
  diagnostico: {
    color:  '#9C6FDE',
    emoji:  '🔬',
    titulo: 'Diagnóstico y Laboratorio',
    desc:   'Tomo las muestras en tu casa y las envío al laboratorio. Cuando lleguen los resultados te los explico en detalle y definimos el tratamiento.',
    puntos: [
      'Toma de muestras sin salir de casa',
      'Hemograma, química sanguínea, uroanálisis y más',
      'Resultados en 24 a 48 horas',
      'Asesoría completa sobre los resultados',
    ],
    precio: 'Desde $80.000',
  },
  cirugia: {
    color:  '#E91E8C',
    emoji:  '✂️',
    titulo: 'Cirugías Menores',
    desc:   'Realizo procedimientos quirúrgicos menores con todo el material esterilizado y los anestésicos necesarios. Tu mascota queda en casa, en su ambiente, para una recuperación más tranquila.',
    puntos: [
      'Sutura de heridas y limpieza de abscesos',
      'Todo el material quirúrgico esterilizado',
      'Seguimiento postoperatorio incluido',
    ],
    precio: 'Desde $120.000',
  },
  domicilio: {
    color:  '#FF5722',
    emoji:  '🏠',
    titulo: 'Visita a Domicilio',
    desc:   'Mi servicio es 100% a domicilio. Me movilizo por toda el Área Metropolitana de Medellín. Solo dime tu dirección y coordinamos el horario que mejor te quede.',
    puntos: [
      'Cobertura en todo Medellín y municipios del área metro',
      'Horarios flexibles: Lunes a Domingo, 7am a 7pm',
      'Llegada puntual y con todo el equipo listo',
      'Sin costo de desplazamiento dentro de la zona de cobertura',
    ],
    precio: 'Incluido en cada servicio',
  },
  odontologia: {
    color:  '#00BCD4',
    emoji:  '🦷',
    titulo: 'Odontología Veterinaria',
    desc:   'La salud oral de tu mascota es tan importante como la tuya. Realizo limpieza dental, evalúo el estado de los dientes y trato enfermedades bucales directamente en tu hogar.',
    puntos: [
      'Limpieza dental profunda',
      'Tratamiento de gingivitis y mal aliento',
      'Recomendaciones para el cuidado dental en casa',
    ],
    precio: 'Desde $120.000',
  },
  desparasitacion: {
    color:  '#8BC34A',
    emoji:  '🐾',
    titulo: 'Desparasitación',
    desc:   'Protejo a tu mascota de parásitos internos y externos. Aplico el producto adecuado según su peso, edad y estilo de vida. También te enseño cómo prevenir futuras infestaciones.',
    puntos: [
      'Desparasitación interna y externa (pipetas, collares)',
      'Productos de marcas certificadas y seguras',
      'Para perros, gatos, conejos y más',
      'Calendario de desparasitación personalizado',
    ],
    precio: 'Desde $50.000',
  },
};

// ════════════════════════════════════════════
// CASOS DE ÉXITO (modales de galería)
// ════════════════════════════════════════════
export const CASOS = {
  cooper: {
    color:      '#E65100',
    nombre:     'Cooper 🐾',
    badge:      'Urgencias · Cardiología',
    img:        'assets/images/casos/cooper.webp',
    video:      'assets/images/casos/cooper video.mp4',
    result:     'Estabilización hemodinámica exitosa',
    resultIcon: 'fas fa-heart-pulse',
    desc:       'Paciente remitido por episodio agudo de colapso posterior a vómito, con dificultad respiratoria marcada y deterioro hemodinámico severo. Al examen físico presentaba mucosas pálidas, tiempo de llenado capilar prolongado, pulso femoral débil e irregular, taquicardia sinusal y ruidos cardíacos apagados compatibles con derrame pericárdico. Se realizó electrocardiograma a domicilio que evidenció alteraciones del ritmo y cambios en la morfología del complejo QRS compatibles con compromiso miocárdico agudo. Se instauró manejo de soporte inmediato con fluidoterapia controlada, oxigenoterapia y monitoreo continuo de parámetros vitales. Cooper respondió favorablemente al tratamiento en su entorno habitual, evitando el estrés del traslado en un momento crítico para su estabilidad cardiovascular.',
    hechos: [
      { icon: 'fas fa-map-marker-alt', texto: 'Atención 100% a domicilio — sin traslado en crisis' },
      { icon: 'fas fa-heartbeat',      texto: 'ECG realizado in situ: alteraciones del ritmo detectadas' },
      { icon: 'fas fa-tint',           texto: 'Fluidoterapia IV controlada y oxigenoterapia de soporte' },
      { icon: 'fas fa-check-circle',   texto: 'Estabilización hemodinámica en menos de 2 horas' },
    ],
  },
  tokio: {
    color:      '#29B6F6',
    nombre:     'Tokio 🐕‍🦺',
    badge:      'Oftalmología',
    img:        'assets/images/casos/tokio.webp',
    result:     'Visión recuperada',
    resultIcon: 'fas fa-eye',
    desc:       'Tokio fue evaluada por presentar ojo derecho entornado, epifora marcada, fotofobia y froté ocular persistente de 2 días de evolución. A la exploración oftalmológica con test de fluoresceína se confirmó úlcera corneal superficial en el cuadrante central anterior, sin perforación ni compromiso del estroma profundo. Se instauró tratamiento con colirio antibiótico de amplio espectro (tobramicina), lubricante ocular libre de conservantes y anti-inflamatorio sistémico oral. Tokio completó el tratamiento sin complicaciones y sin ingresar a una clínica.',
    hechos: [
      { icon: 'fas fa-eye',          texto: 'Test de fluoresceína positivo — úlcera corneal superficial central' },
      { icon: 'fas fa-eye-dropper',  texto: 'Tobramicina + lubricante ocular sin conservantes cada 6 h' },
      { icon: 'fas fa-pills',        texto: 'Antiinflamatorio sistémico oral por 5 días' },
      { icon: 'fas fa-check-circle', texto: 'Epitelio corneal íntegro a las 48 horas — sin hospitalización' },
    ],
  },
  mia: {
    color:      '#E91E8C',
    nombre:     'Mia 🐶',
    badge:      'Oncología',
    img:        'assets/images/casos/mia.webp',
    video:      'assets/images/casos/mia.mp4',
    result:     'Calidad de vida preservada',
    resultIcon: 'fas fa-ribbon',
    desc:       'Mia fue presentada por pérdida de peso progresiva de 6 semanas, linfoadenopatía generalizada palpable, anorexia intermitente y decaimiento marcado. Se realizó punción aspirativa con aguja fina (PAAF) de ganglio axilar en domicilio, con resultado citológico compatible con linfoma de células grandes. Tras la confirmación diagnóstica se orientó al propietario sobre el protocolo de quimioterapia oral (clorambucilo + prednisolona), el cual fue administrado en casa bajo supervisión médica. Mia respondió favorablemente al tratamiento, manteniendo buena calidad de vida durante el proceso.',
    hechos: [
      { icon: 'fas fa-microscope',   texto: 'PAAF ganglionar en domicilio — linfoma de células grandes confirmado' },
      { icon: 'fas fa-pills',        texto: 'Quimioterapia oral: clorambucilo + prednisolona administrados en casa' },
      { icon: 'fas fa-heart',        texto: 'Seguimiento mensual con evaluación de nódulos y estado general' },
      { icon: 'fas fa-check-circle', texto: 'Buena calidad de vida mantenida durante el tratamiento' },
    ],
  },
};

// ════════════════════════════════════════════
// ZONAS DE COBERTURA (mapa Leaflet)
// ════════════════════════════════════════════
export const MAP_CENTER = [6.2442, -75.5812];  // Coordenadas principales

export const ZONES = [
  { name: 'El Poblado',      coords: [6.2086, -75.5665] },
  { name: 'Laureles',        coords: [6.2490, -75.6000] },
  { name: 'Envigado',        coords: [6.1732, -75.5870] },
  { name: 'Sabaneta',        coords: [6.1513, -75.6171] },
  { name: 'Belén',           coords: [6.2280, -75.6125] },
  { name: 'Robledo',         coords: [6.2870, -75.5980] },
  { name: 'Itagüí',          coords: [6.1846, -75.5988] },
  { name: 'La América',      coords: [6.2468, -75.5960] },
  { name: 'Buenos Aires',    coords: [6.2310, -75.5620] },
  { name: 'Bello',           coords: [6.3380, -75.5580] },
  { name: 'Centro Medellín', coords: [6.2518, -75.5636] },
  { name: 'Caldas',          coords: [6.0919, -75.6358] },
  { name: 'Copacabana',      coords: [6.3496, -75.5076] },
];

// ════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════

/** Genera una URL de WhatsApp con texto pre-cargado */
export function waUrl(text) {
  return `${WA_BASE_URL}?text=${encodeURIComponent(text)}`;
}

/**
 * Parchea en tiempo de ejecución todos los links del HTML:
 * - wa.me/...      → usa WA_NUMBER
 * - tel:+57...     → usa WA_NUMBER (formato tel:)
 * - tiktok.com/... → usa TIKTOK_URL
 */
export function patchLinks() {
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    a.href = a.href.replace(/wa\.me\/\d+/, `wa.me/${WA_NUMBER}`);
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.href = `tel:+${WA_NUMBER}`;
    if (a.textContent.match(/^\+?57/)) a.textContent = PHONE_DISPLAY;
  });
  document.querySelectorAll('a[href*="tiktok.com"]').forEach(a => {
    a.href = TIKTOK_URL;
  });
}
