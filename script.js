/* ===========================================================
   BURU DISOM SANGAT — content + behaviour
   Edit the SONGS and GALLERY arrays below to update the site.
=========================================================== */

// ---- Popular songs (edit titles + link to update) ----
// url can point to a specific video on https://youtube.com/@buruddsomsangat_01
const SONGS = [
  { title: "Add your top song here",    note: "Full video song",  url: "https://youtube.com/@buruddsomsangat_01/videos?si=XVCbOcIsbZSrQP5g" },
  { title: "Add your second song here", note: "Traditional song", url: "https://youtube.com/@buruddsomsangat_01/videos?si=XVCbOcIsbZSrQP5g" },
  { title: "Add your third song here",  note: "New release",      url: "https://youtube.com/@buruddsomsangat_01/videos?si=XVCbOcIsbZSrQP5g" },
  { title: "Add another favourite",     note: "Status song",      url: "https://youtube.com/@buruddsomsangat_01/videos?si=XVCbOcIsbZSrQP5g" },
  { title: "Add another favourite",     note: "Entertainment",    url: "https://youtube.com/@buruddsomsangat_01/videos?si=XVCbOcIsbZSrQP5g" },
];

// ---- Gallery tiles: simple generated motifs, swap for real thumbnails any time ----
// Just replace an item's `img` with a real photo path (e.g. "images/still-1.jpg")
// and the script will use it instead of the drawn motif.
const GALLERY = [
  { label: "Live sessions",     motif: "mountain" },
  { label: "Studio shoots",     motif: "sun" },
  { label: "Festival nights",   motif: "drum" },
  { label: "Behind the scenes", motif: "leaf" },
  { label: "Community",         motif: "wave" },
  { label: "New releases",      motif: "star" },
];

const MOTIFS = {
  mountain: `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice"><rect width="200" height="160" fill="#12201a"/><path d="M0 130 L45 70 L80 105 L120 40 L160 100 L200 75 L200 160 L0 160 Z" fill="#1b2f24"/><path d="M0 150 L60 110 L110 140 L150 95 L200 130 L200 160 L0 160 Z" fill="#0e1712"/><circle cx="150" cy="35" r="18" fill="#e8a33d" opacity=".85"/></svg>`,
  sun: `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice"><rect width="200" height="160" fill="#1a140d"/><circle cx="100" cy="80" r="36" fill="#e8a33d"/><g stroke="#e8a33d" stroke-width="3" opacity=".55"><line x1="100" y1="15" x2="100" y2="32"/><line x1="100" y1="128" x2="100" y2="145"/><line x1="35" y1="80" x2="52" y2="80"/><line x1="148" y1="80" x2="165" y2="80"/></g></svg>`,
  drum: `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice"><rect width="200" height="160" fill="#171008"/><ellipse cx="100" cy="55" rx="46" ry="16" fill="#c1543c"/><rect x="54" y="55" width="92" height="55" fill="#8a3a29"/><ellipse cx="100" cy="110" rx="46" ry="16" fill="#c1543c"/><g stroke="#e8a33d" stroke-width="2" opacity=".7"><line x1="60" y1="60" x2="60" y2="105"/><line x1="100" y1="70" x2="100" y2="95"/><line x1="140" y1="60" x2="140" y2="105"/></g></svg>`,
  leaf: `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice"><rect width="200" height="160" fill="#0f1a13"/><path d="M100 20 C150 40 160 100 100 150 C40 100 50 40 100 20 Z" fill="#2c4433"/><line x1="100" y1="25" x2="100" y2="148" stroke="#e8a33d" stroke-width="2" opacity=".6"/></svg>`,
  wave: `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice"><rect width="200" height="160" fill="#111c16"/><path d="M0 90 Q50 60 100 90 T200 90 V160 H0 Z" fill="#1e3226"/><path d="M0 120 Q50 95 100 120 T200 120 V160 H0 Z" fill="#0e1712"/></svg>`,
  star: `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice"><rect width="200" height="160" fill="#0c130f"/><g fill="#e8a33d"><circle cx="40" cy="40" r="2"/><circle cx="90" cy="25" r="1.6"/><circle cx="150" cy="50" r="2.2"/><circle cx="170" cy="20" r="1.4"/><circle cx="60" cy="75" r="1.8"/><circle cx="120" cy="90" r="2"/></g><path d="M100 55 L106 75 L126 75 L110 87 L116 107 L100 95 L84 107 L90 87 L74 75 L94 75 Z" fill="#e8a33d" opacity=".9"/></svg>`
};

function renderChart(){
  const list = document.getElementById("chartList");
  if(!list) return;
  list.innerHTML = SONGS.map((song, i) => `
    <li class="chart__row reveal">
      <span class="chart__num">${String(i+1).padStart(2,"0")}</span>
      <span class="chart__info"><b>${song.title}</b><span>${song.note}</span></span>
      <a class="chart__play" href="${song.url}" target="_blank" rel="noopener" aria-label="Play ${song.title} on YouTube">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z"/></svg>
      </a>
    </li>
  `).join("");
}

function renderGallery(){
  const grid = document.getElementById("mosaicGrid");
  if(!grid) return;
  grid.innerHTML = GALLERY.map(item => `
    <div class="mosaic__item reveal">
      ${item.img ? `<img src="${item.img}" alt="${item.label}">` : MOTIFS[item.motif] || ""}
      <span>${item.label}</span>
    </div>
  `).join("");
}

function initReveal(){
  const els = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

function markSectionsForReveal(){
  document.querySelectorAll(".section__head, .latest, .about, .contact, .cta")
    .forEach(el => el.classList.add("reveal"));
}

function initMobileNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if(!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderChart();
  renderGallery();
  markSectionsForReveal();
  initReveal();
  initMobileNav();
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
