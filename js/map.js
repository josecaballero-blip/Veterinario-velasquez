/**
 * map.js — Mapa Leaflet de Medellín
 * Carga Leaflet de forma lazy solo cuando el mapa entra en viewport.
 */
import { WA_BASE_URL, DOCTOR_NAME, MAP_CENTER, ZONES } from './config.js';

function loadLeaflet() {
  return new Promise((resolve) => {
    if (window.L) return resolve();
    // CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(css);
    // JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = resolve;
    document.head.appendChild(script);
  });
}

export function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    loadLeaflet().then(setupMap);
  }, { rootMargin: '200px' });

  observer.observe(mapEl);
}

function setupMap() {
  try {
    const map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: false
    });

    // Tiles CartoDB Voyager
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Icono personalizado con huellita
    const pawIcon = L.divIcon({
      className: '',
      html: `<div style="
        background: linear-gradient(135deg, #FF8C42, #e67a2e);
        width: 46px; height: 46px;
        border-radius: 50% 50% 50% 4px;
        transform: rotate(-45deg);
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 16px rgba(255,140,66,0.5);
        border: 3px solid white;
        font-size: 20px;
      ">
        <span style="transform: rotate(45deg)">🐾</span>
      </div>`,
      iconSize: [46, 46],
      iconAnchor: [23, 46],
      popupAnchor: [0, -50]
    });

    // Marcador principal
    const marker = L.marker(MAP_CENTER, { icon: pawIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family:'Nunito',sans-serif; padding:4px 6px; min-width:180px;">
        <strong style="font-size:1rem; color:#FF8C42;">🐾 ${DOCTOR_NAME} Velásquez</strong><br/>
        <span style="font-size:0.85rem; color:#555;">Médico Internista Veterinario</span><br/>
        <span style="font-size:0.82rem; color:#888;">📍 Medellín, Colombia</span><br/>
        <a href="${WA_BASE_URL}" target="_blank"
          style="display:inline-block; margin-top:8px; background:#25D366; color:white;
                 padding:5px 12px; border-radius:20px; font-size:0.8rem; font-weight:700; text-decoration:none;">
          WhatsApp
        </a>
      </div>
    `, { maxWidth: 220 }).openPopup();

    const allMarkers = [marker];

    const smallIcon = L.divIcon({
      className: '',
      html: `<div style="
        background: #4DB6AC; width: 14px; height: 14px;
        border-radius: 50%; border: 3px solid white;
        box-shadow: 0 2px 8px rgba(77,182,172,0.6);
      "></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    ZONES.forEach(zone => {
      const m = L.marker(zone.coords, { icon: smallIcon })
        .addTo(map)
        .bindPopup(`<strong style="color:#4DB6AC">${zone.name}</strong><br/><small>Zona de cobertura</small>`);
      allMarkers.push(m);
    });

    // Círculo de cobertura
    L.circle(MAP_CENTER, {
      radius: 20000,
      color: '#FF8C42',
      fillColor: '#FF8C42',
      fillOpacity: 0.08,
      weight: 2,
      dashArray: '8 6'
    }).addTo(map);

    // Ajustar vista para que todos los marcadores quepan con padding
    const group = L.featureGroup(allMarkers);
    map.fitBounds(group.getBounds().pad(0.15));

  } catch (e) {
    console.warn('Mapa no disponible:', e);
  }
}
