// === Configuration ===
const { SRC_DIR, SLIDE_MS, POLL_MS, EXTS } = SLIDESHOW_CONFIG;

// === Elements ===
const hud  = document.getElementById('hud');
const A    = document.getElementById('A');
const B    = document.getElementById('B');
const imgA = document.getElementById('imgA');
const imgB = document.getElementById('imgB');

// === States ===
let images = [];
let idx = -1;
let timer = null;
let usingA = true;
let firstRun = true;

// === Helper functions ===
const setHUD = text => hud.textContent = text;
const cb = () => 'cb=' + Date.now(); // Cache-Buster

function isImageName(name) {
  const lower = name.toLowerCase();
  return EXTS.some(e => lower.endsWith(e));
}

// Get all picture names from Auto-Listing
async function listDirViaAutoindex() {
  const res = await fetch(SRC_DIR + '?' + cb(), { cache: 'no-store' });
  if (!res.ok) throw new Error('Directory listing nicht erreichbar');
  const txt = await res.text();
  const doc = new DOMParser().parseFromString(txt, 'text/html');
  const anchors = [...doc.querySelectorAll('a')];
  const files = anchors
    .map(a => decodeURIComponent(a.getAttribute('href') || ''))
    .filter(href => !!href && !href.startsWith('?') && !href.startsWith('/'))
    .map(href => href.replace(/^\.\//, ''))
    .filter(isImageName)
    .map(name => SRC_DIR + encodeURIComponent(name));
  files.sort((a, b) => a.localeCompare(b));
  return files;
}

// Updates image list
async function fetchImages() {
  try {
    const list = await listDirViaAutoindex();
    const current = images[idx] || null;
    images = list;
    if (current) {
      const newIdx = images.indexOf(current);
      if (newIdx >= 0) idx = newIdx;
    }
    if (firstRun && images.length) {
      firstRun = false;
      idx = images.length - 1; // So startet showNext() bei erstem Bild
      startShow();
    }
    if (!images.length) setHUD('Keine Bilder in ./src/ gefunden.');
  } catch (e) {
    setHUD('Konnte ./src/ nicht lesen (Autoindex nötig).');
    console.warn(e);
  }
}

function nextIdx() {
  if (!images.length) return -1;
  return (idx + 1) % images.length;
}

function preload(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const u = url + (url.includes('?') ? '&' : '?') + cb();
    img.onload = () => resolve(u);
    img.onerror = reject;
    img.src = u;
  });
}

async function showNext() {
  if (!images.length) return;
  idx = nextIdx();
  const url = images[idx];
  const name = decodeURIComponent(url.split('/').pop());
  try {
    const prepared = await preload(url);
    setHUD(`${name} (${idx + 1}/${images.length})`);
    if (usingA) {
      imgB.src = prepared;
      B.classList.add('active');
      A.classList.remove('active');
    } else {
      imgA.src = prepared;
      A.classList.add('active');
      B.classList.remove('active');
    }
    usingA = !usingA;
  } catch {
    console.warn('Fehler beim Laden:', url);
    idx = (idx + 1) % images.length;
    showNext();
  }
}

function startShow() {
  if (timer) clearInterval(timer);
  showNext();
  timer = setInterval(showNext, SLIDE_MS);
}

// === Initialization ===
fetchImages();
setInterval(fetchImages, POLL_MS);
