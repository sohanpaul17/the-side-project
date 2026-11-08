/* ============ THE SIDE PROJECT — site script ============ */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => STORE.currency + Number(n).toLocaleString("en-IN");
  const page = document.body.dataset.page;

  /* ---------- Icons ---------- */
  const STAR = (c = "currentColor") => `<svg viewBox="0 0 24 24" fill="${c}"><path d="M12 0c.6 7.5 4.5 11.4 12 12-7.5.6-11.4 4.5-12 12-.6-7.5-4.5-11.4-12-12C7.5 11.4 11.4 7.5 12 0z"/></svg>`;
  const I = {
    arrow: `<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    left: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,
    right: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
    bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5L6 7z"/><path d="M9 7a3 3 0 016 0"/></svg>`,
    print: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/></svg>`,
    pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6M12 18v-6M9 15l3 3 3-3"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg>`,
    chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`,
    wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zM20.5 3.5A11.8 11.8 0 002 17.7L.3 24l6.4-1.7A11.8 11.8 0 0024 12c0-3.2-1.2-6.2-3.5-8.5z"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
  };

  /* ---------- Contact links ---------- */
  const waLink = (text) => `https://wa.me/${STORE.whatsappNumber}${text ? "?text=" + encodeURIComponent(text) : ""}`;
  const igLink = () => `https://ig.me/m/${STORE.instagramHandle}`;
  const igProfile = () => `https://instagram.com/${STORE.instagramHandle}`;
  const productUrl = (p) => `product.html?id=${encodeURIComponent(p.id)}`;
  const buyMessage = (p, format) =>
    `Hi! I'd like to buy "${p.title}" (${money(p.price)}${p.priceNote ? ", " + p.priceNote.charAt(0).toLowerCase() + p.priceNote.slice(1) : ""})${format ? ` as a ${format === "print" ? "printed copy" : "PDF"}` : ""}. Is it available?`;

  /* ---------- Illustrated product previews (used when a product has no photos) ---------- */
  const starPath = (cx, cy, s) =>
    `M${cx} ${cy - s}C${cx + s * 0.05} ${cy - s * 0.35} ${cx + s * 0.35} ${cy - s * 0.05} ${cx + s} ${cy}C${cx + s * 0.35} ${cy + s * 0.05} ${cx + s * 0.05} ${cy + s * 0.35} ${cx} ${cy + s}C${cx - s * 0.05} ${cy + s * 0.35} ${cx - s * 0.35} ${cy + s * 0.05} ${cx - s} ${cy}C${cx - s * 0.35} ${cy - s * 0.05} ${cx - s * 0.05} ${cy - s * 0.35} ${cx} ${cy - s}Z`;

  function motif(m, x, y, w, h, ink, acc, seed = 1) {
    let o = "";
    const rnd = (i) => { const v = Math.sin(seed * 99 + i * 12.9898) * 43758.5453; return v - Math.floor(v); };
    switch (m) {
      case "orbit":
        o += `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w * 0.46}" ry="${h * 0.18}" fill="none" stroke="${ink}" stroke-width="5" transform="rotate(-18 ${x + w / 2} ${y + h / 2})"/>`;
        o += `<path d="${starPath(x + w * 0.72, y + h * 0.3, w * 0.09)}" fill="${acc}"/><circle cx="${x + w / 2}" cy="${y + h / 2}" r="${w * 0.14}" fill="${ink}"/>`;
        break;
      case "sparkle":
        o += `<path d="${starPath(x + w * 0.5, y + h * 0.48, w * 0.3)}" fill="${ink}"/>`;
        o += `<path d="${starPath(x + w * 0.82, y + h * 0.18, w * 0.08)}" fill="${acc}"/><path d="${starPath(x + w * 0.18, y + h * 0.8, w * 0.06)}" fill="${acc}"/>`;
        break;
      case "lines":
        for (let i = 0; i < 9; i++) o += `<line x1="${x}" x2="${x + w * (i % 3 === 2 ? 0.6 : 1)}" y1="${y + 14 + i * (h / 9.5)}" y2="${y + 14 + i * (h / 9.5)}" stroke="${ink}" stroke-opacity=".55" stroke-width="4" stroke-linecap="round"/>`;
        o += `<circle cx="${x + w * 0.85}" cy="${y + h * 0.85}" r="${w * 0.08}" fill="${acc}"/>`;
        break;
      case "grid":
        for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
          const cw = w / 3 - 10, ch = h / 3 - 10;
          o += `<rect x="${x + c * (cw + 15)}" y="${y + r * (ch + 15)}" width="${cw}" height="${ch}" rx="10" fill="${(r + c) % 4 === 0 ? acc : "none"}" stroke="${ink}" stroke-width="4"/>`;
        }
        break;
      case "bars":
        for (let i = 0; i < 6; i++) { const bh = h * (0.25 + rnd(i) * 0.7); o += `<rect x="${x + i * (w / 6) + 6}" y="${y + h - bh}" width="${w / 6 - 14}" height="${bh}" rx="8" fill="${i === 3 ? acc : ink}"/>`; }
        break;
      case "dots":
        for (let i = 0; i < 16; i++) {
          const cx = x + rnd(i) * w, cy = y + rnd(i + 40) * h, r = 10 + rnd(i + 80) * 26;
          o += i % 4 === 0 ? `<path d="${starPath(cx, cy, r)}" fill="${acc}"/>` : `<circle cx="${cx}" cy="${cy}" r="${r * 0.7}" fill="${i % 3 ? ink : "none"}" stroke="${ink}" stroke-width="4"/>`;
        }
        break;
      case "circles":
        o += `<circle cx="${x + w * 0.35}" cy="${y + h * 0.4}" r="${w * 0.25}" fill="${acc}"/><circle cx="${x + w * 0.62}" cy="${y + h * 0.58}" r="${w * 0.25}" fill="none" stroke="${ink}" stroke-width="6"/><circle cx="${x + w * 0.8}" cy="${y + h * 0.2}" r="${w * 0.07}" fill="${ink}"/>`;
        break;
    }
    return o;
  }

  function wrapText(t, max) {
    const words = t.toUpperCase().split(" "); const lines = []; let cur = "";
    words.forEach((w) => { if ((cur + " " + w).trim().length > max) { lines.push(cur.trim()); cur = w; } else cur += " " + w; });
    lines.push(cur.trim()); return lines;
  }

  function art(p, v, seed) {
    const [a, b, acc] = p.palette; // a = cover colour, b = page/background colour
    const W = 800, H = 1000;
    const ink = a, paper = b;
    const lines = wrapText(p.title, 13);
    const title = (x, y, size, fill) => lines.map((l, i) => `<text x="${x}" y="${y + i * size * 1.02}" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${size}" fill="${fill}" letter-spacing="-1">${esc(l)}</text>`).join("");
    let s = "";
    const shadow = `<filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="26" flood-color="#000" flood-opacity=".28"/></filter>`;
    if (v === 0) {
      // Cover
      s += `<rect width="${W}" height="${H}" fill="${paper === "#1b1b1b" ? "#2a2825" : "#e9dfcc"}"/>`;
      s += `<g filter="url(#sh)"><rect x="140" y="120" width="520" height="700" rx="18" fill="${ink}"/></g>`;
      s += `<rect x="140" y="120" width="26" height="700" fill="#000" fill-opacity=".15"/>`;
      s += motif(p.motif, 220, 200, 380, 330, paper, acc, seed);
      s += title(210, 620, 46, paper);
      s += `<text x="210" y="770" font-family="Arial, sans-serif" font-size="16" letter-spacing="6" fill="${paper}" fill-opacity=".7">THE SIDE PROJECT.</text>`;
    } else if (v === 1) {
      // Open spread
      s += `<rect width="${W}" height="${H}" fill="${acc}"/>`;
      s += `<g filter="url(#sh)" transform="rotate(-6 400 500)"><rect x="70" y="260" width="330" height="460" rx="10" fill="#fbf7ef"/><rect x="400" y="260" width="330" height="460" rx="10" fill="#f7f1e5"/></g>`;
      s += `<g transform="rotate(-6 400 500)"><line x1="400" y1="262" x2="400" y2="718" stroke="#000" stroke-opacity=".12" stroke-width="3"/>`;
      s += `<text x="105" y="320" font-family="Arial Black, Arial" font-size="26" fill="#1b1b1b">${esc(p.category.toUpperCase())}</text>`;
      for (let i = 0; i < 10; i++) s += `<line x1="105" x2="370" y1="${360 + i * 32}" y2="${360 + i * 32}" stroke="#1b1b1b" stroke-opacity=".18" stroke-width="2"/>`;
      s += motif(p.motif, 440, 300, 250, 250, "#1b1b1b", acc === "#1b1b1b" ? "#d9653b" : acc, seed + 3);
      for (let i = 0; i < 4; i++) s += `<rect x="440" y="${590 + i * 26}" width="${230 - i * 40}" height="10" rx="5" fill="#1b1b1b" fill-opacity=".2"/>`;
      s += `</g>`;
    } else if (v === 2) {
      // Detail close-up
      s += `<rect width="${W}" height="${H}" fill="${paper}"/>`;
      s += motif(p.motif, 120, 160, 560, 560, ink, acc, seed + 7);
      s += `<rect x="60" y="820" width="680" height="2" fill="${ink}" fill-opacity=".2"/>`;
      s += `<text x="60" y="880" font-family="Arial Black, Arial" font-size="34" fill="${ink}">DETAIL</text>`;
      s += `<text x="740" y="880" text-anchor="end" font-family="Arial, sans-serif" font-size="18" letter-spacing="5" fill="${ink}" fill-opacity=".6">${p.formats.includes("print") ? "PRINT + PDF" : "PDF"}</text>`;
    } else {
      // Lifestyle desk
      s += `<rect width="${W}" height="${H}" fill="#cdbb9c"/><rect width="${W}" height="${H}" fill="url(#wood)" opacity=".35"/>`;
      s += `<g filter="url(#sh)" transform="rotate(8 420 480)"><rect x="200" y="160" width="430" height="590" rx="14" fill="${ink}"/>`;
      s += motif(p.motif, 260, 220, 310, 280, paper, acc, seed);
      s += lines.slice(0, 3).map((l, i) => `<text x="250" y="${590 + i * 40}" font-family="Arial Black, Arial" font-size="36" fill="${paper}">${esc(l)}</text>`).join("");
      s += `</g>`;
      s += `<g filter="url(#sh)" transform="rotate(-32 160 820)"><rect x="40" y="800" width="300" height="22" rx="11" fill="#e0a43a"/><polygon points="340,800 380,811 340,822" fill="#f1d7a8"/><rect x="20" y="800" width="30" height="22" rx="6" fill="#d9653b"/></g>`;
      s += `<circle cx="660" cy="860" r="70" fill="#f4ecdf" filter="url(#sh)"/><circle cx="660" cy="860" r="52" fill="#6b4a2f"/>`;
      s += `<path d="${starPath(110, 130, 34)}" fill="#161513" fill-opacity=".85"/>`;
    }
    const defs = `<defs>${shadow}<pattern id="wood" width="800" height="40" patternUnits="userSpaceOnUse"><path d="M0 20 Q200 10 400 22 T800 18" stroke="#000" stroke-opacity=".15" fill="none" stroke-width="2"/></pattern></defs>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${defs}${s}</svg>`);
  }

  const imagesOf = (p) => {
    if (p.images && p.images.length) return p.images;
    const seed = [...p.id].reduce((n, c) => n + c.charCodeAt(0), 0);
    return (p._imgs ||= [0, 1, 2, 3].map((v) => art(p, v, seed)));
  };

  /* ---------- Shared layout ---------- */
  const NAV = [["index.html", "Home", "home"], ["shop.html", "Shop", "shop"], ["about.html", "About", "about"], ["contact.html", "Contact", "contact"]];
  const brandMark = `<span class="brand-mark"><svg viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="22" rx="18" ry="8" stroke="currentColor" stroke-width="2.2" transform="rotate(-18 20 22)"/><path d="${starPath(27, 11, 7)}" fill="currentColor"/><circle cx="20" cy="22" r="4" fill="currentColor"/></svg></span>`;

  function renderChrome() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="wrap nav">
        <a class="brand" href="index.html" aria-label="${esc(STORE.name)} home">${brandMark}<span>THE SIDE<br>PROJECT.</span></a>
        <nav class="nav-links" aria-label="Main">
          ${NAV.map(([h, l, k]) => `<a href="${h}" class="${k === page ? "active" : ""}">${l}</a>`).join("")}
          <a href="shop.html" class="nav-cta">Shop now</a>
        </nav>
        <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>`;
    document.body.prepend(header);

    const curtain = document.createElement("div");
    curtain.className = "curtain";
    curtain.innerHTML = STAR();
    document.body.prepend(curtain);

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    const cats = [...new Set(PRODUCTS.map((p) => p.category))].slice(0, 5);
    footer.innerHTML = `
      <div class="wrap">
        <div class="footer-top">
          <div>
            <img class="footer-logo" src="assets/logo-light.png" alt="${esc(STORE.name)} logo">
            <p style="opacity:.7;max-width:34ch;margin:0">Customised, hand-illustrated Lovebooks — printed, delivered, and with a PDF copy to keep.</p>
          </div>
          <div><h4>Explore</h4><ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
          <div><h4>Shop</h4><ul>${PRODUCTS.slice(0, 5).map((p) => `<li><a href="${productUrl(p)}">${esc(p.title)}</a></li>`).join("")}</ul></div>
          <div><h4>Say hi</h4><ul>
            <li><a href="${waLink("Hi! I found you through your website.")}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="${igProfile()}" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="mailto:${STORE.email}">${esc(STORE.email)}</a></li>
          </ul></div>
        </div>
        <div class="footer-big" aria-hidden="true">A little bit of everything.</div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(STORE.name)}. All rights reserved.</span><span>Made with care, one project at a time.</span></div>
      </div>`;
    document.body.append(footer);

    const fab = document.createElement("a");
    fab.className = "fab"; fab.href = waLink("Hi! I found you through your website."); fab.target = "_blank"; fab.rel = "noopener";
    fab.setAttribute("aria-label", "Chat on WhatsApp"); fab.innerHTML = I.wa;
    document.body.append(fab);

    $(".menu-btn").addEventListener("click", () => document.body.classList.toggle("menu-open"));
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 10);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- Page transitions ---------- */
  function initTransitions() {
    setTimeout(() => document.body.classList.add("is-loaded"), 80);
    addEventListener("pageshow", (e) => { if (e.persisted) document.body.classList.remove("is-leaving"); });
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) return;
      e.preventDefault();
      document.body.classList.remove("menu-open");
      document.body.classList.add("is-leaving");
      setTimeout(() => (location.href = href), 480);
    });
  }

  /* ---------- Scroll reveal ---------- */
  let io;
  function observeReveals(root = document) {
    io ||= new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal, .split-line, [data-reveal]", root).forEach((el) => io.observe(el));
  }

  /* ---------- Product card ---------- */
  function card(p, i = 0) {
    const imgs = imagesOf(p);
    return `
      <a class="card" href="${productUrl(p)}" style="--d:${(i % 8) * 0.06}s">
        <div class="card-media">
          ${p.badge ? `<span class="card-badge">${esc(p.badge)}</span>` : ""}
          <img src="${imgs[0]}" alt="${esc(p.title)}" loading="lazy">
          ${imgs[1] ? `<img class="alt" src="${imgs[1]}" alt="" loading="lazy">` : ""}
          <span class="card-quick" data-buy="${esc(p.id)}">${I.bag} Buy now</span>
        </div>
        <div class="card-body">
          <div class="card-cat">${esc(p.category)}</div>
          <div class="card-title">${esc(p.title)}</div>
          <div class="card-row">
            <span class="price">${money(p.price)}${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ""}${p.priceNote ? `<small class="price-note">${esc(p.priceNote)}</small>` : ""}</span>
            <span class="formats-mini">${p.formats.includes("print") ? "<span>Print</span>" : ""}${p.formats.includes("pdf") ? "<span>PDF</span>" : ""}</span>
          </div>
        </div>
      </a>`;
  }

  // "Buy now" on cards opens the modal instead of navigating
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-buy]");
    if (!b) return;
    e.preventDefault(); e.stopPropagation();
    const p = PRODUCTS.find((x) => x.id === b.dataset.buy);
    if (p) openBuy(p);
  }, true);

  /* ---------- Buy modal (WhatsApp / Instagram links) ---------- */
  let modal, buyState = {};
  function buildModal() {
    modal = document.createElement("div");
    modal.className = "modal"; modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-panel">
        <button class="modal-close" aria-label="Close">${I.close}</button>
        <div class="modal-side">
          <div class="modal-prod"><img alt=""><div><b></b><span class="price"></span></div></div>
          <h3>Let's make it yours.</h3>
          <p>Message me directly — I'll confirm your order, payment and delivery personally.</p>
          <ol class="steps">
            <li>Choose how you'd like it delivered.</li>
            <li>Tap WhatsApp or Instagram.</li>
            <li>Send the pre-filled message on WhatsApp or DM me on Instagram.</li>
            <li>Get your PDF instantly or your printed copy at your door.</li>
          </ol>
        </div>
        <div class="modal-main">
          <h4 class="buy-head">How would you like to order?</h4>
          <div class="modal-format"></div>
          <div class="buy-links">
            <a class="buy-link wa" target="_blank" rel="noopener">
              <span class="bl-ico">${I.wa}</span>
              <span class="bl-text"><b>Order on WhatsApp</b><small class="wa-sub"></small></span>
              <span class="bl-arrow">${I.right}</span>
            </a>
            <a class="buy-link ig" target="_blank" rel="noopener">
              <span class="bl-ico">${I.ig}</span>
              <span class="bl-text"><b>Order on Instagram</b><small class="ig-sub"></small></span>
              <span class="bl-arrow">${I.right}</span>
            </a>
          </div>
          <p class="phone-line"></p>
        </div>
      </div>`;
    document.body.append(modal);
    const close = () => { modal.classList.remove("open"); document.body.style.overflow = ""; };
    $(".modal-backdrop", modal).addEventListener("click", close);
    $(".modal-close", modal).addEventListener("click", close);
    addEventListener("keydown", (e) => e.key === "Escape" && close());
    modal.addEventListener("change", (e) => { if (e.target.name === "mfmt") { buyState.format = e.target.value; syncPageFormat(); updateModal(); } });
  }

  function updateModal() {
    const { p, format } = buyState;
    $(".buy-link.wa", modal).href = waLink(buyMessage(p, format));
    $(".buy-link.ig", modal).href = igLink();
    $(".wa-sub", modal).textContent = "Your order message is typed in for you";
    $(".ig-sub", modal).textContent = `DM @${STORE.instagramHandle} — mention “${p.title}”`;
    $(".phone-line", modal).innerHTML = `Or call / save my number: <a href="tel:+${STORE.whatsappNumber}">${esc(STORE.phoneDisplay)}</a>`;
  }

  function syncPageFormat() {
    const r = $(`.delivery input[value="${buyState.format}"]`);
    if (r) r.checked = true;
  }

  function openBuy(p, format) {
    if (!modal) buildModal();
    const fmts = p.formats || [];
    buyState = { p, format: format || (fmts.length ? fmts[0] : null) };
    $(".modal-prod img", modal).src = imagesOf(p)[0];
    $(".modal-prod b", modal).textContent = p.title;
    $(".modal-prod .price", modal).textContent = money(p.price);
    $(".modal-format", modal).innerHTML = fmts.length > 1
      ? fmts.map((f) => `<label><input type="radio" name="mfmt" value="${f}" ${f === buyState.format ? "checked" : ""}><span>${f === "print" ? I.print + " Printed copy" : I.pdf + " PDF"}</span></label>`).join("")
      : fmts.length ? `<label><input type="radio" name="mfmt" value="${fmts[0]}" checked><span>${fmts[0] === "print" ? I.print + " Printed copy" : I.pdf + " PDF only"}</span></label>` : "";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    updateModal();
  }

  /* ---------- Toast ---------- */
  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.append(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- Carousel ---------- */
  function initCarousel(root) {
    const vp = $(".carousel-viewport", root), track = $(".carousel-track", root);
    const bar = $(".carousel-progress i", root), count = $(".carousel-count", root);
    let index = 0, timer;
    const items = () => [...track.children];
    const perView = () => { const c = items()[0]; return c ? Math.max(1, Math.round(vp.clientWidth / (c.offsetWidth + 16))) : 1; };
    const maxIndex = () => Math.max(0, items().length - perView());
    const step = () => { const [a, b] = items(); return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth; };
    function go(i) {
      const m = maxIndex();
      index = i > m ? 0 : i < 0 ? m : i;
      track.style.transform = `translateX(${-index * step()}px)`;
      const pv = perView(), total = items().length;
      bar.style.width = (pv / total) * 100 + "%";
      bar.style.left = (index / total) * 100 + "%";
      count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(m + 1).padStart(2, "0")}`;
    }
    const play = () => { clearInterval(timer); timer = setInterval(() => go(index + 1), 4200); };
    const stop = () => clearInterval(timer);
    $(".prev", root).addEventListener("click", () => { go(index - 1); play(); });
    $(".next", root).addEventListener("click", () => { go(index + 1); play(); });
    root.addEventListener("mouseenter", stop); root.addEventListener("mouseleave", play);

    // drag / swipe
    let startX = 0, dx = 0, down = false, moved = false;
    vp.addEventListener("pointerdown", (e) => { down = true; moved = false; startX = e.clientX; dx = 0; track.classList.add("no-anim"); stop(); });
    addEventListener("pointermove", (e) => {
      if (!down) return; dx = e.clientX - startX;
      if (Math.abs(dx) > 6) { moved = true; vp.classList.add("dragging"); }
      track.style.transform = `translateX(${-index * step() + dx}px)`;
    });
    addEventListener("pointerup", () => {
      if (!down) return; down = false; track.classList.remove("no-anim"); vp.classList.remove("dragging");
      if (Math.abs(dx) > 60) go(index + (dx < 0 ? 1 : -1)); else go(index);
      play();
    });
    vp.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    addEventListener("resize", () => go(Math.min(index, maxIndex())));
    go(0); play();
  }

  /* ---------- Counters ---------- */
  function initCounters() {
    const obs = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (!en.isIntersecting) return; obs.unobserve(en.target);
      const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
      const tick = (t) => { const k = Math.min(1, (t - t0) / 1600), e = 1 - Math.pow(1 - k, 4); el.textContent = Math.round(end * e) + suf; if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: 0.5 });
    $$("[data-count]").forEach((el) => obs.observe(el));
  }

  /* ---------- Logo star orbit ----------
     The hero logo's star rests in its usual spot, then glides once around
     the orbit line (passing behind the wordmark), leaving a sparkle trail. */
  function initLogoOrbit() {
    const svg = $(".logo-orbit");
    if (!svg) return;
    const star = $(".orbit-star", svg), trail = $(".orbit-trail", svg);
    const NS = "http://www.w3.org/2000/svg";
    // Ellipse fitted to the orbit line in the logo (viewBox units)
    const CX = 566.44, CY = 309.78, A = 558.85, B = 141.87, TH = (-19.774 * Math.PI) / 180;
    const HOME = { x: 761, y: 120 };
    const cos = Math.cos(TH), sin = Math.sin(TH);
    const at = (t) => ({
      x: CX + A * Math.cos(t) * cos - B * Math.sin(t) * sin,
      y: CY + A * Math.cos(t) * sin + B * Math.sin(t) * cos,
    });
    // where on the ellipse the star normally sits
    let t0 = 0, best = Infinity;
    for (let i = 0; i < 3600; i++) {
      const t = (i / 3600) * Math.PI * 2, p = at(t), d = (p.x - HOME.x) ** 2 + (p.y - HOME.y) ** 2;
      if (d < best) { best = d; t0 = t; }
    }
    const off = { x: HOME.x - at(t0).x, y: HOME.y - at(t0).y };
    const dir = at(t0 + 0.01).x > at(t0).x ? 1 : -1; // set off to the right, like the swoosh
    // the drawn line isn't a perfect ellipse: nudge the path onto it near the star's home,
    // fading the correction out on the far side where the fit already matches
    const near = (t) => ((1 + Math.cos(t - t0)) / 2) ** 2;
    const pos = (t) => { const p = at(t), w = near(t); return { x: p.x + off.x * w, y: p.y + off.y * w }; };
    // full size at home, smaller in flight; a little bigger on the front (lower) side of the orbit
    const size = (t) => { const w = near(t); return 0.68 + 0.32 * w + 0.1 * (Math.sin(t) - Math.sin(t0)) * (1 - w); };
    const place = (x, y, s, r) => star.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${r.toFixed(1)}) scale(${s.toFixed(3)})`);

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // sparkle trail
    const DOTS = 16, dots = [];
    for (let i = 0; i < DOTS; i++) {
      const c = document.createElementNS(NS, "circle");
      c.setAttribute("fill", i % 3 === 0 ? "#d9653b" : "#161513");
      c.setAttribute("r", "0"); trail.appendChild(c); dots.push(c);
    }
    const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const REST = 2800, TRAVEL = 5400;
    let start = performance.now(), visible = true, history = [];

    const io2 = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io2.observe(svg);
    // hovering the logo launches the star straight away
    svg.closest(".hero-logo").addEventListener("mouseenter", () => {
      const e = (performance.now() - start) % (REST + TRAVEL);
      if (e < REST) start -= REST - e;
    });

    function frame(now) {
      requestAnimationFrame(frame);
      if (!visible) return;
      const e = (now - start) % (REST + TRAVEL);
      if (e < REST) {
        // resting: a soft twinkle
        const k = e / REST, tw = Math.sin(k * Math.PI * 4);
        place(HOME.x, HOME.y, 1 + 0.06 * tw, 6 * Math.sin(k * Math.PI * 2));
        history = [];
      } else {
        const k = ease((e - REST) / TRAVEL), t = t0 + dir * k * Math.PI * 2, p = pos(t);
        place(p.x, p.y, size(t), k * 360);
        history.unshift(p); if (history.length > DOTS * 2) history.length = DOTS * 2;
      }
      dots.forEach((c, i) => {
        const p = history[i * 2 + 2];
        if (!p) { c.setAttribute("r", "0"); return; }
        const f = 1 - i / DOTS;
        c.setAttribute("cx", p.x.toFixed(1)); c.setAttribute("cy", p.y.toFixed(1));
        c.setAttribute("r", (7 * f).toFixed(2)); c.setAttribute("opacity", (0.75 * f).toFixed(2));
      });
    }
    requestAnimationFrame(frame);
  }

  /* ================= PAGES ================= */
  function homePage() {
    initLogoOrbit();
    const words = ["Customised Lovebooks", "Hand-illustrated", "Your story", "Printed + PDF copy", "Mini Lovebooks", "Made with love"];
    const mq = words.map((w) => `<span>${w} ${STAR()}</span>`).join("");
    $("#marquee").innerHTML = mq + mq;
    const featured = PRODUCTS.filter((p) => p.featured);
    const track = $("#carousel-track");
    track.innerHTML = featured.map(card).join("");
    track.classList.toggle("few", featured.length <= 2);
    initCarousel($("#featured-carousel"));
    if (featured.length <= 2) $(".carousel-controls").style.display = "none";
    if ($("#latest-grid")) $("#latest-grid").innerHTML = PRODUCTS.slice(0, 4).map(card).join("");
    $$(".js-wa").forEach((a) => (a.href = waLink("Hi! I'd love to know more about your products.")));
    $$(".js-ig").forEach((a) => (a.href = igProfile()));
  }

  function shopPage() {
    const params = new URLSearchParams(location.search);
    const cats = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
    let state = { cat: cats.includes(params.get("cat")) ? params.get("cat") : "All", q: "", sort: "featured" };
    $("#chips").innerHTML = cats.length > 2 ? cats.map((c) => `<button class="chip" data-cat="${esc(c)}">${esc(c)}</button>`).join("") : "";
    const render = () => {
      $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === state.cat));
      let list = PRODUCTS.filter((p) => (state.cat === "All" || p.category === state.cat) &&
        (p.title + p.short + p.category).toLowerCase().includes(state.q.toLowerCase()));
      if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
      if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);
      if (state.sort === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
      $("#count").textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
      $("#grid").classList.toggle("few", list.length > 0 && list.length <= 2);
      $("#grid").innerHTML = list.length ? list.map(card).join("") : `<div class="empty" style="grid-column:1/-1">Nothing matches that yet — try another search.</div>`;
    };
    $("#chips").addEventListener("click", (e) => {
      const c = e.target.closest(".chip"); if (!c) return;
      state.cat = c.dataset.cat;
      history.replaceState(null, "", state.cat === "All" ? "shop.html" : `shop.html?cat=${encodeURIComponent(state.cat)}`);
      render();
    });
    $("#search").addEventListener("input", (e) => { state.q = e.target.value; render(); });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
    render();
  }

  function productPage() {
    const id = new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];
    document.title = `${p.title} — ${STORE.name}`;
    const imgs = imagesOf(p);
    const fmts = p.formats || [];
    const save = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    $("#pdp").innerHTML = `
      <div class="gallery reveal reveal-l ${p.images && p.images.length ? "photos" : ""}">
        <div class="thumbs">${imgs.map((src, i) => `<button class="thumb ${i ? "" : "active"}" data-i="${i}" aria-label="View image ${i + 1}"><img src="${src}" alt=""></button>`).join("")}</div>
        <div class="stage">
          <span class="stage-count">1 / ${imgs.length}</span>
          <img class="current" src="${imgs[0]}" alt="${esc(p.title)}">
          <div class="stage-nav"><button class="s-prev" aria-label="Previous image">${I.left}</button><button class="s-next" aria-label="Next image">${I.right}</button></div>
        </div>
      </div>
      <div class="pdp-info">
        <nav class="breadcrumb reveal"><a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <a href="shop.html?cat=${encodeURIComponent(p.category)}">${esc(p.category)}</a></nav>
        <span class="card-cat reveal" style="--d:.05s">${esc(p.category)}${p.badge ? " · " + esc(p.badge) : ""}</span>
        <h1 class="pdp-title reveal" style="--d:.1s">${esc(p.title)}</h1>
        <div class="pdp-price reveal" style="--d:.15s"><span class="price">${money(p.price)}${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ""}</span>${save ? `<span class="save-tag">Save ${save}%</span>` : ""}${p.priceNote ? `<span class="ship-tag">${I.check} ${esc(p.priceNote)}</span>` : ""}</div>
        ${p.shippingNote ? `<p class="intl-note reveal" style="--d:.17s">✈ ${esc(p.shippingNote)}</p>` : ""}
        <p class="pdp-short reveal" style="--d:.2s">${esc(p.short)}</p>
        ${fmts.length ? `
        <div class="delivery reveal" style="--d:.25s">
          <div class="delivery-title">${I.check.replace("<svg", '<svg width="14"')} ${fmts.length > 1 ? "Delivered as a printed copy or a PDF" : fmts[0] === "pdf" ? "Delivered as a PDF" : "Delivered as a printed copy"}</div>
          <div class="delivery-opts ${fmts.length === 1 ? "one" : ""}">
            ${fmts.includes("print") ? `<label class="dopt"><input type="radio" name="fmt" value="print" ${fmts[0] === "print" ? "checked" : ""}><span class="dico">${I.print}</span><span><b>Printed copy</b><small>Printed & delivered to your door</small></span></label>` : ""}
            ${fmts.includes("pdf") ? `<label class="dopt"><input type="radio" name="fmt" value="pdf" ${fmts[0] === "pdf" ? "checked" : ""}><span class="dico">${I.pdf}</span><span><b>PDF download</b><small>Sent to you instantly</small></span></label>` : ""}
          </div>
        </div>` : ""}
        <div class="buy-row reveal" style="--d:.3s">
          <button class="btn btn-lg" id="buy-now">${I.bag} Buy now</button>
          <button class="btn btn-ghost share-btn" id="share" aria-label="Share">${I.share}</button>
        </div>
        <p class="buy-note reveal" style="--d:.35s">${I.chat} Tap Buy now to message me on WhatsApp or Instagram and place your order.</p>
        <div class="reveal" style="--d:.4s">
          <div class="acc open"><button class="acc-head">Description <i></i></button><div class="acc-body"><div><p>${esc(p.description)}</p></div></div></div>
          <div class="acc"><button class="acc-head">What's included <i></i></button><div class="acc-body"><div><ul>${p.details.map((d) => `<li>${I.check}<span>${esc(d)}</span></li>`).join("")}</ul></div></div></div>
          <div class="acc"><button class="acc-head">Delivery & ordering <i></i></button><div class="acc-body"><div><p>${fmts.includes("pdf") ? "PDF orders are sent to you on WhatsApp or email as soon as your order is confirmed. " : ""}${fmts.includes("print") ? "Printed copies are made to order and usually ship within 3–5 days. " : ""}Message me on WhatsApp or Instagram and I'll help with payment, sizes and anything else.</p></div></div></div>
        </div>
      </div>`;

    // gallery
    const stage = $(".stage"); let cur = 0, busy = false;
    const show = (i) => {
      i = (i + imgs.length) % imgs.length; if (i === cur || busy) return; busy = true;
      const old = $("img.current", stage);
      const nu = document.createElement("img"); nu.src = imgs[i]; nu.alt = p.title; nu.className = "current entering";
      old.after(nu); old.classList.remove("current");
      requestAnimationFrame(() => requestAnimationFrame(() => { nu.classList.remove("entering"); old.classList.add("leaving"); }));
      setTimeout(() => { old.remove(); busy = false; }, 900);
      cur = i;
      $$(".thumb").forEach((t) => t.classList.toggle("active", +t.dataset.i === i));
      const at = $(`.thumb[data-i="${i}"]`), box = $(".thumbs");
      box.scrollTo({ top: at.offsetTop - box.clientHeight / 2 + at.offsetHeight / 2, left: at.offsetLeft - box.clientWidth / 2 + at.offsetWidth / 2, behavior: "smooth" });
      $(".stage-count").textContent = `${i + 1} / ${imgs.length}`;
    };
    $$(".thumb").forEach((t) => t.addEventListener("click", () => show(+t.dataset.i)));
    $(".s-prev").addEventListener("click", (e) => { e.stopPropagation(); show(cur - 1); });
    $(".s-next").addEventListener("click", (e) => { e.stopPropagation(); show(cur + 1); });
    addEventListener("keydown", (e) => { if (modal?.classList.contains("open")) return; if (e.key === "ArrowRight") show(cur + 1); if (e.key === "ArrowLeft") show(cur - 1); });
    let sx = null;
    stage.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    stage.addEventListener("touchend", (e) => { if (sx === null) return; const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 40) show(cur + (d < 0 ? 1 : -1)); sx = null; });

    // hover zoom (desktop)
    if (matchMedia("(hover: hover)").matches) {
      stage.addEventListener("mousemove", (e) => {
        if (e.target.closest(".stage-nav")) { stage.classList.remove("zoom"); return; }
        const r = stage.getBoundingClientRect(); const im = $("img.current", stage);
        stage.classList.add("zoom");
        im.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
      });
      stage.addEventListener("mouseleave", () => stage.classList.remove("zoom"));
    }
    // lightbox
    const lb = document.createElement("div"); lb.className = "lightbox";
    lb.innerHTML = `<button class="modal-close" aria-label="Close">${I.close}</button><img alt="">`;
    document.body.append(lb);
    stage.addEventListener("click", (e) => { if (e.target.closest(".stage-nav")) return; $("img", lb).src = imgs[cur]; lb.classList.add("open"); });
    lb.addEventListener("click", () => lb.classList.remove("open"));

    // accordions
    $$(".acc-head").forEach((h) => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));

    // buy + share
    $("#buy-now").addEventListener("click", () => openBuy(p, $(".delivery input:checked")?.value));
    $("#share").addEventListener("click", async () => {
      try {
        if (navigator.share) await navigator.share({ title: p.title, url: location.href });
        else { await navigator.clipboard.writeText(location.href); toast("Link copied!"); }
      } catch {}
    });

    // related
    const related = PRODUCTS.filter((x) => x.id !== p.id).sort((a, b) => (b.category === p.category) - (a.category === p.category)).slice(0, 4);
    $("#related").innerHTML = related.map(card).join("");
    $("#related").classList.toggle("few", related.length <= 2);
  }

  function aboutPage() {
    if (STORE.founder.photo) $("#portrait").innerHTML = `<img src="${STORE.founder.photo}" alt="${esc(STORE.founder.name)}">`;
    $$(".js-founder").forEach((el) => (el.textContent = STORE.founder.name));
    $$(".js-role").forEach((el) => (el.textContent = STORE.founder.role));
    $$(".js-wa").forEach((a) => (a.href = waLink("Hi! I just read your story on the website 👋")));
    $$(".js-ig").forEach((a) => (a.href = igProfile()));
    initCounters();
  }

  function contactPage() {
    $("#btn-wa").href = waLink("Hi! I found you through your website.");
    $("#btn-ig").href = igProfile();
    $("#btn-mail").href = `mailto:${STORE.email}`;
    $$(".js-phone").forEach((el) => (el.textContent = STORE.phoneDisplay));
    $$(".js-ig-handle").forEach((el) => (el.textContent = "@" + STORE.instagramHandle));
    $$(".js-email").forEach((el) => (el.textContent = STORE.email));
    $$(".acc-head").forEach((h) => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
  }

  /* ---------- Boot ---------- */
  renderChrome();
  initTransitions();
  ({ home: homePage, shop: shopPage, product: productPage, about: aboutPage, contact: contactPage }[page] || (() => {}))();
  observeReveals();
  window.SP = { STAR, I };
})();
