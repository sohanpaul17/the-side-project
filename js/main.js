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
    truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h11v10H2zM13 9h4.5L21 12.5V16h-8"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>`,
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
  const buyMessage = (p, format, size) =>
    `Hi! I'd like to buy "${p.title}"${size ? ` — ${size.label} size` : ""} (${money(size ? size.price : p.price)}${p.unit ? ` for a ${p.unit}` : ""}${p.priceNote ? ", " + p.priceNote.charAt(0).toLowerCase() + p.priceNote.slice(1) : ""})${format ? ` as a ${(format === "print" ? "printed copy" : format === "digital" ? "digital download (PDF + PNG by email)" : "PDF")}` : ""}. Is it available?`;

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
  const NAV = [["index.html", "Home", "home"], ["shop.html", "Shop", "shop"], ["reviews.html", "Reviews", "reviews"], ["about.html", "About", "about"], ["contact.html", "Contact", "contact"]];
  const brandMark = `<span class="brand-mark"><svg viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="22" rx="18" ry="8" stroke="currentColor" stroke-width="2.2" transform="rotate(-18 20 22)"/><path d="${starPath(27, 11, 7)}" fill="currentColor"/><circle cx="20" cy="22" r="4" fill="currentColor"/></svg></span>`;

  function renderChrome() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="wrap nav">
        <a class="brand" href="index.html" aria-label="${esc(STORE.name)} home">${brandMark}<span>THE SIDE PROJECT.<small>A little bit of everything</small></span></a>
        <nav class="nav-links" aria-label="Main">
          ${NAV.map(([h, l, k], i) => `<a href="${h}" class="${k === page ? "active" : ""}" style="--i:${i}">${l}</a>`).join("")}
          <a href="shop.html" class="nav-cta" style="--i:${NAV.length}">Shop now</a>
          <div class="nav-extra" style="--i:${NAV.length + 1}">
            <span class="nav-tag">A little bit of everything ✦</span>
            <span class="nav-social"><a href="${waLink("Hi! I'd love to know more about your products.")}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a><a href="${igProfile()}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a></span>
          </div>
        </nav>
        <button class="menu-btn" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>`;
    document.body.prepend(header);
    const bar = document.createElement("div");
    bar.className = "top-bar";
    bar.innerHTML = `<span class="tb-truck">${I.truck}</span> <b>Free delivery</b> on every order across India`;
    header.before(bar);

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
            <p style="opacity:.7;max-width:34ch;margin:0">Customised, hand-illustrated gifts about you and your favourite people — made to order and delivered to your door.</p>
          </div>
          <div><h4>Explore</h4><ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
          <div><h4>Shop</h4><ul>${PRODUCTS.slice(0, 5).map((p) => `<li><a href="${productUrl(p)}">${esc(p.title)}</a></li>`).join("")}</ul></div>
          <div><h4>Say hi</h4><ul class="footer-social">
            <li><a class="fs-wa" href="${waLink("Hi! I found you through your website.")}" target="_blank" rel="noopener"><span class="fs-ico">${I.wa}</span>WhatsApp</a></li>
            <li><a class="fs-ig" href="${igProfile()}" target="_blank" rel="noopener"><span class="fs-ico">${I.ig}</span>Instagram</a></li>
            <li><a class="fs-mail" href="mailto:${STORE.email}" title="${esc(STORE.email)}"><span class="fs-ico">${I.mail}</span>Email</a></li>
          </ul></div>
        </div>
        <div class="footer-big" aria-hidden="true">A little bit of everything.</div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(STORE.name)}. All rights reserved.</span><span>Made with care, one project at a time.</span></div>
      </div>`;
    document.body.append(footer);


    // phone menu: a full-screen panel that opens just below the header
    const menuBtn = $(".menu-btn");
    // three bars that grow out of the button's three lines to become the panel, and fold back into them
    const morph = document.createElement("div");
    morph.className = "menu-morph";
    morph.setAttribute("aria-hidden", "true");
    morph.innerHTML = "<i></i><i></i><i></i>";
    header.append(morph);
    const placeMorph = () => {
      const top = Math.max(0, header.getBoundingClientRect().bottom);
      document.documentElement.style.setProperty("--menu-top", top + "px");
      const r = menuBtn.getBoundingClientRect(), W = innerWidth, h3 = (innerHeight - top) / 3;
      [...morph.children].forEach((bar, i) => {
        const x = r.left + 12, y = r.top + 16 + i * 5; // where this line of the icon sits
        bar.style.setProperty("--closed", `translate(${x.toFixed(1)}px, ${(y - top - i * h3).toFixed(1)}px) scale(${(20 / W).toFixed(4)}, ${(2 / h3).toFixed(4)})`);
      });
    };
    const setMenu = (open) => {
      if (open) { placeMorph(); void morph.offsetWidth; } // start from the icon's lines, wherever the header is now
      document.body.classList.toggle("menu-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    placeMorph(); addEventListener("load", placeMorph);
    addEventListener("resize", () => { if (!document.body.classList.contains("menu-open")) placeMorph(); });
    menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
    addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    addEventListener("resize", () => { if (innerWidth > 820) setMenu(false); });
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
  // card-sized copy of a product photo (assets/products/sm/*.webp), much lighter to load and decode
  const thumb = (src) => String(src).replace(/^assets\/products\/([^/]+)\.(jpe?g|webp|png)$/i, "assets/products/sm/$1.webp");

  function card(p, i = 0) {
    const imgs = imagesOf(p).map(thumb);
    return `
      <a class="card" href="${productUrl(p)}" style="--d:${(i % 8) * 0.06}s">
        <div class="card-media">
          ${p.badge ? `<span class="card-badge">${esc(p.badge)}</span>` : ""}
          <img src="${imgs[0]}" alt="${esc(p.title)}" loading="lazy" decoding="async">
          ${imgs[1] ? `<img class="alt" src="${imgs[1]}" alt="" loading="lazy" decoding="async">` : ""}
          ${p.priceNote ? `<span class="card-ship">${p.formats && p.formats.includes("digital") ? I.bolt : I.truck} ${esc(p.priceNote)}</span>` : ""}
          <span class="card-quick" data-buy="${esc(p.id)}">${I.bag} Buy now</span>
        </div>
        <div class="card-body">
          <div class="card-cat">${esc(p.category)}</div>
          <div class="card-title">${esc(p.title)}</div>
          <div class="card-row">
            <span class="price">${p.sizes ? '<small class="price-from">From</small> ' : ""}${money(p.sizes ? Math.min(...p.sizes.map((s) => s.price)) : p.price)}${p.unit ? `<small class="price-unit"> / ${esc(p.unit)}</small>` : ""}${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ""}</span>
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
          <div class="modal-format modal-size"></div>
          <div class="modal-format modal-fmt"></div>
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
    modal.addEventListener("change", (e) => {
      if (e.target.name === "mfmt") { buyState.format = e.target.value; syncPageFormat(); updateModal(); }
      if (e.target.name === "msize") { buyState.size = buyState.p.sizes[+e.target.value]; syncPageSize(); updateModal(); }
    });
  }

  function updateModal() {
    const { p, format, size } = buyState;
    $(".modal-prod .price", modal).textContent = money(size ? size.price : p.price) + (p.unit ? ` / ${p.unit}` : "");
    $(".buy-link.wa", modal).href = waLink(buyMessage(p, format, size));
    $(".buy-link.ig", modal).href = igLink();
    $(".wa-sub", modal).textContent = "Your order message is typed in for you";
    $(".ig-sub", modal).textContent = `DM @${STORE.instagramHandle} — mention “${p.title}”`;
    $(".phone-line", modal).innerHTML = `Or call / save my number: <a href="tel:+${STORE.whatsappNumber}">${esc(STORE.phoneDisplay)}</a>`;
  }

  function syncPageFormat() {
    const r = $(`.delivery input[value="${buyState.format}"]`);
    if (r) r.checked = true;
  }

  function syncPageSize() {
    const i = buyState.p.sizes ? buyState.p.sizes.indexOf(buyState.size) : -1;
    const r = $(`.size-pick input[value="${i}"]`);
    if (r && !r.checked) { r.checked = true; r.dispatchEvent(new Event("change", { bubbles: true })); }
  }

  function openBuy(p, format, size) {
    if (!modal) buildModal();
    const fmts = p.formats || [];
    buyState = { p, format: format || (fmts.length ? fmts[0] : null), size: p.sizes ? size || p.sizes[0] : null };
    $(".modal-size", modal).innerHTML = p.sizes
      ? p.sizes.map((s, i) => `<label><input type="radio" name="msize" value="${i}" ${s === buyState.size ? "checked" : ""}><span>${esc(s.label)} · ${money(s.price)}</span></label>`).join("")
      : "";
    $(".modal-prod img", modal).src = imagesOf(p)[0];
    $(".modal-prod b", modal).textContent = p.title;
    $(".modal-prod .price", modal).textContent = money(p.price);
    $(".modal-fmt", modal).innerHTML = fmts.length > 1
      ? fmts.map((f) => `<label><input type="radio" name="mfmt" value="${f}" ${f === buyState.format ? "checked" : ""}><span>${f === "print" ? I.print + " Printed copy" : f === "digital" ? I.bolt + " PDF + PNG by email" : I.pdf + " PDF"}</span></label>`).join("")
      : fmts.length ? `<label><input type="radio" name="mfmt" value="${fmts[0]}" checked><span>${fmts[0] === "print" ? I.print + " Printed copy" : fmts[0] === "digital" ? I.bolt + " PDF + PNG by email" : I.pdf + " PDF only"}</span></label>` : "";
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
      $(".carousel-controls", root).style.display = m === 0 ? "none" : ""; // everything already fits
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
      const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || "", dec = +el.dataset.decimals || 0, t0 = performance.now();
      const tick = (t) => { const k = Math.min(1, (t - t0) / 1600), e = 1 - Math.pow(1 - k, 4); el.textContent = (dec ? (end * e).toFixed(dec) : Math.round(end * e)) + suf; if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: 0.5 });
    $$("[data-count]").forEach((el) => obs.observe(el));
  }

  /* ---------- Logo star orbit ----------
     The hero logo's star circles the orbit line continuously at a steady pace
     (passing behind the wordmark), leaving a sparkle trail. */
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
    // one full lap every LAP ms, round and round without stopping
    const LAP = 14000, SPIN = 9000, TRAIL_GAP = 0.04; // trail dots sit this far (radians) behind each other
    let start = performance.now(), visible = true;

    const io2 = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io2.observe(svg);

    function frame(now) {
      requestAnimationFrame(frame);
      if (!visible) return;
      const e = now - start;
      const t = t0 + dir * ((e % LAP) / LAP) * Math.PI * 2, p = pos(t);
      const twinkle = 1 + 0.05 * Math.sin(e / 450);
      place(p.x, p.y, size(t) * twinkle, ((e % SPIN) / SPIN) * 360);
      dots.forEach((c, i) => {
        const q = pos(t - dir * TRAIL_GAP * (i + 1));
        const f = 1 - i / DOTS;
        const p = q;
        c.setAttribute("cx", p.x.toFixed(1)); c.setAttribute("cy", p.y.toFixed(1));
        c.setAttribute("r", (7 * f).toFixed(2)); c.setAttribute("opacity", (0.75 * f).toFixed(2));
      });
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Home page: moving reviews ---------- */
  async function homeReviews() {
    const sec = $("#home-reviews"); if (!sec) return;
    const list = await loadReviews();
    if (!list.length) return; // stays hidden until the first review arrives
    sec.hidden = false;
    const avg = avgRating(list);
    $("#home-rv-score").innerHTML = `${starsHtml(avg)} <b>${avg.toFixed(1)}</b> from ${list.length} review${list.length > 1 ? "s" : ""}`;
    // two rows moving in opposite directions once there are enough reviews — but always one row on phones
    const phone = matchMedia("(max-width: 600px)");
    const render = () => {
      const rows = [list]; // a single compact row
      $("#home-rv-rows").innerHTML = rows.map((items, r) => {
        let set = items.slice();
        while (set.length < 6) set = set.concat(items); // enough cards to fill wide screens
        const cards = set.map((x) => reviewCard(x)).join("");
        return `<div class="rv-row-track ${r % 2 ? "rev" : ""}" style="--dur:${set.length * 7}s"><div class="rv-row-set">${cards}</div><div class="rv-row-set" aria-hidden="true">${cards}</div></div>`;
      }).join("");
    };
    let wasPhone = phone.matches;
    render();
    addEventListener("resize", () => { if (phone.matches !== wasPhone) { wasPhone = phone.matches; render(); } });
  }

  /* ---------- Home page: bestseller spotlight with the real book, turning its pages ----------
     The book starts closed on its cover, opens, turns through its pages, closes on the
     back cover, then flips back to the front — forever. Notes scroll beneath it. */
  function bestsellerSpotlight() {
    const sec = $("#bestseller"); if (!sec) return null;
    const p = PRODUCTS.find((x) => /bestseller/i.test(x.badge || "")) || PRODUCTS[0];
    if (!p) return null;
    // the book's own pages if we have them, otherwise the product photos
    const pg = p.flipPages && p.flipPages.length ? p.flipPages : imagesOf(p);
    // pages pair up as leaves: front of each leaf is a right-hand page, back is the next left-hand page
    const leaves = [];
    for (let i = 0; i < pg.length; i += 2) leaves.push({ front: pg[i], back: pg[i + 1] || null });
    const face = (src, side) => src
      ? `<div class="bk-face bk-${side}"><img src="${src}" alt="" loading="lazy"></div>`
      : `<div class="bk-face bk-${side} bk-backcover"><span>${STAR()}</span><b>The Side Project</b><small>a little bit of everything</small></div>`;
    const N = leaves.length;

    sec.querySelector(".bs-copy").innerHTML = spotCopy(p, "Bestseller", "See the book");
    sec.querySelector(".flipbook").innerHTML = `
      <div class="bk-stage">
        <div class="bk-inner bk-inner-left"></div><div class="bk-inner bk-inner-right"></div>
        ${leaves.map((l, i) => `<div class="bk-leaf" style="z-index:${N - i}">${face(l.front, "front")}${face(l.back, "back")}</div>`).join("")}
      </div>`;
    const sky = PRODUCTS.find((x) => x.spotlight);
    const notes = [...(p.details || []), ...((sky && sky.details) || [])].filter(Boolean);
    const strip = notes.map((t) => `<span>${esc(t)}</span><i>${STAR()}</i>`).join("");
    sec.querySelector(".bs-notes").innerHTML = `<div class="bs-notes-track">${strip}${strip}</div>`;
    sec.hidden = false;

    fillRating(sec.querySelector(".spot-book"), p);
    // the Lovebook card's background: drifting glows, hearts floating up, little sparkles
    const lb = sec.querySelector(".lb-field");
    if (lb) {
      let sd = 3; const r = () => ((sd = (sd * 9301 + 49297) % 233280) / 233280);
      const HEART = '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.2C.8 8.3 3 4.5 6.7 4.5c2.2 0 3.6 1.2 5.3 3.1 1.7-1.9 3.1-3.1 5.3-3.1 3.7 0 5.9 3.8 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>';
      const colors = ["#f06b8f", "#ff9eb5", "#e0456e", "#c9b4f2", "#ffc7d6", "#f6a3c4"];
      lb.innerHTML =
        '<b class="lb-glow g1"></b><b class="lb-glow g2"></b><b class="lb-glow g3"></b>' +
        Array.from({ length: 16 }, (_, i) => `<span class="lb-heart" style="left:${(r() * 96).toFixed(1)}%;--s:${(12 + r() * 22).toFixed(0)}px;--d:${(9 + r() * 9).toFixed(1)}s;--sway:${(20 + r() * 40).toFixed(0)}px;--c:${colors[i % colors.length]};animation-delay:-${(r() * 18).toFixed(1)}s">${HEART}</span>`).join("") +
        Array.from({ length: 18 }, () => `<i class="lb-spark" style="left:${(r() * 100).toFixed(1)}%;top:${(r() * 100).toFixed(1)}%;animation-delay:-${(r() * 3).toFixed(1)}s"></i>`).join("");
    }

    const stage = $(".bk-stage", sec), els = $$(".bk-leaf", sec);
    let turned = 0;
    // closed on the front cover → shift right half to centre; closed on the back → shift the other way
    const place = () => {
      stage.style.transform = turned === 0 ? "translateX(-25%)" : turned === N ? "translateX(25%)" : "translateX(0)";
      stage.classList.toggle("is-open", turned > 0 && turned < N);
    };
    const setZ = () => els.forEach((el, i) => (el.style.zIndex = i < turned ? 10 + i : N - i));
    place();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return p.id;

    let visible = true;
    new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(sec);
    const HOLD = 2600;
    const step = () => {
      if (!visible || document.hidden) return setTimeout(step, 800);
      if (turned < N) {
        els[turned].classList.add("turned");
        turned++; place();
        setTimeout(setZ, 600);
        setTimeout(step, turned === N ? 2000 : HOLD);
      } else {
        // back to the front cover, turning the pages back one by one
        const back = () => {
          if (turned === 0) { setZ(); return setTimeout(step, HOLD); }
          turned--; const el = els[turned];
          el.style.zIndex = 50 + turned;
          el.classList.remove("turned"); place();
          setTimeout(() => { setZ(); back(); }, 520);
        };
        back();
      }
    };
    setTimeout(step, 1800);
    return p.id;
  }

  /* ---------- Home page: Night Sky spotlight card ----------
     A framed star map: bright stars sparkle, shooting stars streak across, and constellations
     draw themselves in one after another while the whole sky slowly turns. */
  // the Night Sky star-map poster (animated SVG): used by the spotlight card and the home slider
  function nightSkyArt(p, uid) {
    let seed = 7; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    const W = 400, H = 540, cx = 200, cy = 205, R = 160;
    const inCircle = (x, y, pad = 12) => (x - cx) ** 2 + (y - cy) ** 2 < (R - pad) ** 2;
    // faint background stars, some twinkling
    let dots = "";
    for (let n = 0; n < 110;) {
      const x = cx + (rnd() * 2 - 1) * R, y = cy + (rnd() * 2 - 1) * R;
      if (!inCircle(x, y)) continue; n++;
      const r = [0.7, 0.9, 1.1, 1.4][Math.floor(rnd() * 4)];
      dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="#fff" class="${n % 6 === 0 ? "tw" : "st"}" style="animation-delay:-${(rnd() * 5).toFixed(2)}s"/>`;
    }
    // bright sparkling stars (four-point glints with a glow)
    const glint = (x, y, s, d) => `<g class="glint" style="animation-delay:-${d}s;transform-origin:${x}px ${y}px"><circle cx="${x}" cy="${y}" r="${s * .55}" fill="#fff" filter="url(#${uid}-glow)"/><path d="M${x} ${y - s * 2.6}Q${x + s * .3} ${y - s * .3} ${x + s * 2.6} ${y}Q${x + s * .3} ${y + s * .3} ${x} ${y + s * 2.6}Q${x - s * .3} ${y + s * .3} ${x - s * 2.6} ${y}Q${x - s * .3} ${y - s * .3} ${x} ${y - s * 2.6}Z" fill="#fff"/></g>`;
    let glints = "";
    for (let n = 0; n < 9;) {
      const x = cx + (rnd() * 2 - 1) * R, y = cy + (rnd() * 2 - 1) * R;
      if (!inCircle(x, y, 26)) continue; n++;
      glints += glint(x.toFixed(1), y.toFixed(1), 2 + rnd() * 1.6, (rnd() * 4).toFixed(2));
    }
    // three constellations that draw in one after another
    const shapes = [
      { at: [118, 128], pts: [[0, 0], [26, 8], [50, 4], [72, 18], [80, 46], [108, 50], [104, 22], [72, 18]] },   // dipper
      { at: [205, 250], pts: [[0, 0], [22, 26], [44, 6], [66, 30], [90, 4]] },                                   // the W
      { at: [140, 210], pts: [[30, 0], [0, 40], [34, 46], [62, 44], [44, 88], [10, 84], [34, 46]] },              // the hunter
    ];
    const cons = shapes.map((c, k) => {
      const pts = c.pts.map(([x, y]) => [c.at[0] + x, c.at[1] + y]);
      const nodes = [...new Set(pts.map((q) => q.join(",")))].map((q) => { const [x, y] = q.split(","); return `<circle cx="${x}" cy="${y}" r="2.3" fill="#fff"/>`; }).join("");
      return `<g class="cons" style="animation-delay:${k * 4}s"><polyline points="${pts.map((q) => q.join(",")).join(" ")}" pathLength="1"/>${nodes}</g>`;
    }).join("");
    const shooters = [[30, 60, 26, 0], [120, 30, 34, 2.6], [40, 150, 18, 5.1]]
      .map(([x, y, a, d]) => `<g class="shoot" style="animation-delay:${d}s;--sx:${x}px;--sy:${y}px;--ang:${a}deg"><rect x="-80" y="-1.3" width="80" height="2.6" rx="1.3" fill="url(#${uid}-tail)"/><circle r="2.6" fill="#fff" filter="url(#${uid}-glow)"/></g>`).join("");
    const fw = 130, fh = fw * 312 / 462;
    return `
      <div class="ss-frame"><div class="ss-mat">
        <svg class="ss-poster" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(p.title)}">
          <defs>
            <clipPath id="${uid}-clip"><circle cx="${cx}" cy="${cy}" r="${R - 4}"/></clipPath>
            <linearGradient id="${uid}-tail" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient>
            <filter id="${uid}-glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="2.4"/></filter>
            <radialGradient id="${uid}-skyfill" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#2f3a78"/><stop offset="1" stop-color="#222a58"/></radialGradient>
          </defs>
          <rect width="${W}" height="${H}" fill="#1e2549"/>
          <circle cx="${cx}" cy="${cy}" r="${R}" fill="url(#${uid}-skyfill)"/>
          <g clip-path="url(#${uid}-clip)">
            <g class="ss-wheel" style="transform-origin:${cx}px ${cy}px">${dots}${cons}</g>
          </g>
          <g transform="translate(${cx + R * .62} ${cy - R * .62})" class="ss-moon"><circle r="15" fill="#f6dc8f" filter="url(#${uid}-glow)" opacity=".6"/><circle r="14" fill="#f6dc8f"/><circle cx="6" cy="-4" r="13" fill="#283163"/></g>
          <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#e2b75a" stroke-width="2.5"/>
          <circle cx="${cx}" cy="${cy}" r="${R - 7}" fill="none" stroke="#e2b75a" stroke-opacity=".5" stroke-width="1"/>
          <image href="assets/products/night-sky-faces.png" x="${cx - fw / 2}" y="${cy + R - fh * .42}" width="${fw}" height="${fh}"/>
          <text x="${cx}" y="458" text-anchor="middle" class="ss-t1">the night we met</text>
          <text x="${cx}" y="488" text-anchor="middle" class="ss-t2">RIYA &amp; AARAV</text>
          <text x="${cx}" y="515" text-anchor="middle" class="ss-t3">14 · 02 · 2019 · PUNE</text>
        </svg>
      </div></div>`;
  }

  function skySpotlight() {
    const card = $("#sky-spot"); if (!card) return;
    const p = PRODUCTS.find((x) => x.spotlight); if (!p) { card.hidden = true; return; }
    let seed = 11; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    card.querySelector(".ss-art").innerHTML = nightSkyArt(p, "ss");
    card.querySelector(".ss-copy").innerHTML = spotCopy(p, "New · Star map", "See the star map");
    // the card's own sky, behind the poster: twinkling dots, sparkling stars and shooting stars
    const pos = () => `left:${(rnd() * 100).toFixed(1)}%;top:${(rnd() * 100).toFixed(1)}%`;
    card.querySelector(".ss-field").innerHTML =
      Array.from({ length: 55 }, () => `<i style="${pos()};animation-delay:-${(rnd() * 4).toFixed(1)}s;transform:scale(${(0.5 + rnd()).toFixed(2)})"></i>`).join("") +
      Array.from({ length: 12 }, () => `<span class="sp" style="${pos()};animation-delay:-${(rnd() * 3.2).toFixed(1)}s;--s:${(10 + rnd() * 14).toFixed(0)}px">${STAR()}</span>`).join("") +
      [[8, 6, 22, 0], [40, 2, 28, 2.4], [-5, 30, 18, 4.6], [55, 12, 32, 6.4]].map(([x, y, a, d]) =>
        `<b class="shoot" style="left:${x}%;top:${y}%;--ang:${a}deg;animation-delay:${d}s"></b>`).join("");
    fillRating(card, p);
    return p;
  }

  // shared copy block for a spotlight card
  function spotCopy(p, pill, viewLabel) {
    return `
      <span class="bs-pill">${STAR()} ${esc(pill)}</span>
      <h3 class="h-display spot-title">${esc(p.title)}</h3>
      <p class="bs-rating"></p>
      <p class="bs-short">${esc(p.short)}</p>
      <div class="bs-price"><span class="price">${money(p.price)}${p.unit ? `<small class="price-unit"> / ${esc(p.unit)}</small>` : ""}</span>${p.priceNote ? `<span class="ship-pill">${p.formats && p.formats.includes("digital") ? I.bolt : I.truck} ${esc(p.priceNote)}</span>` : ""}</div>
      <div class="bs-actions">
        <a class="btn btn-lg bs-buy" href="${productUrl(p)}" data-buy="${esc(p.id)}">${I.bag} Buy now</a>
        <a class="btn btn-lg btn-ghost bs-view" href="${productUrl(p)}">${esc(viewLabel)} ${I.arrow}</a>
      </div>`;
  }
  function fillRating(card, p) {
    loadReviews().then((all) => {
      const list = all.filter((r) => r.product === p.id), el = card.querySelector(".bs-rating");
      if (list.length && el) { const avg = avgRating(list); el.innerHTML = `${starsHtml(avg)} <b>${avg.toFixed(1)}</b> · ${list.length} happy review${list.length > 1 ? "s" : ""}`; }
    });
  }

  /* ================= PAGES ================= */
  /* ---------- Home hero: occasion slide + product slides ----------
     The first slide is always the next upcoming gifting occasion (Christmas, Valentine's Day, …)
     with the Lovebook wrapped up as a present. The products follow. */
  const nthSunday = (y, m, n) => { const d = new Date(y, m - 1, 1); d.setDate(1 + ((7 - d.getDay()) % 7) + (n - 1) * 7); return d; };
  const OCCASIONS = [
    { key: "christmas", name: "Christmas", theme: "christmas", date: (y) => new Date(y, 11, 25),
      title: ["Wrap up your story", "this <em>Christmas.</em>"],
      lead: "Give your favourite person a Lovebook — your memories, inside jokes and little moments, drawn as a story starring the two of you. The gift they'll unwrap, read and keep.",
      tagTo: "my favourite person", today: "Merry Christmas!" },
    { key: "valentines", name: "Valentine's Day", theme: "love", date: (y) => new Date(y, 1, 14),
      title: ["Say it with", "<em>your story.</em>"],
      lead: "This Valentine's Day, give them a Lovebook — the day you met, your first trip, your silly inside jokes, all drawn as a little book about the two of you.",
      tagTo: "my valentine", today: "Happy Valentine's Day!" },
    { key: "mothers", name: "Mother's Day", theme: "love", date: (y) => nthSunday(y, 5, 2),
      title: ["A story for", "<em>Mum.</em>"],
      lead: "Turn your favourite memories with her into a Lovebook — drawn just like the two of you, page by page.",
      tagTo: "the best mum", today: "Happy Mother's Day!" },
    { key: "fathers", name: "Father's Day", theme: "love", date: (y) => nthSunday(y, 6, 3),
      title: ["A story for", "<em>Dad.</em>"],
      lead: "Turn your favourite memories with him into a Lovebook — drawn just like the two of you, page by page.",
      tagTo: "the best dad", today: "Happy Father's Day!" },
    { key: "friendship", name: "Friendship Day", theme: "love", date: (y) => nthSunday(y, 8, 1),
      title: ["For your", "<em>best friend.</em>"],
      lead: "All your inside jokes and adventures in one little book — a Lovebook drawn just like the two of you.",
      tagTo: "my best friend", today: "Happy Friendship Day!" },
  ];
  function nextOccasion(now = new Date()) {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let best = null;
    OCCASIONS.forEach((o) => [now.getFullYear(), now.getFullYear() + 1].forEach((y) => {
      const d = o.date(y);
      if (d >= today && (!best || d < best.when)) best = { ...o, when: d, days: Math.round((d - today) / 864e5) };
    }));
    return best;
  }

  const SNOWFLAKE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M12 2l-2.4 2.4M12 2l2.4 2.4M12 22l-2.4-2.4M12 22l2.4-2.4"/></svg>`;
  const HEART = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2.3 4.5 6 4.5c2.2 0 3.6 1.3 4.5 2.6.3.4.9.4 1.2 0 .9-1.3 2.3-2.6 4.5-2.6 3.7 0 5.6 3.9 4 7.2C19.5 16.4 12 21 12 21z"/></svg>`;
  const ARROW = `<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

  function occasionSlide(o, p) {
    const pages = (p.flipPages || imagesOf(p)).slice(1);
    const cover = (p.flipPages || imagesOf(p))[0];
    const xmas = o.theme === "christmas";
    // string of fairy lights: two swags across the top
    const N = 22, sag = (x) => 6 + 30 * Math.sin(Math.PI * ((x * 2) % 1));
    const wire = Array.from({ length: 81 }, (_, i) => `${i ? "L" : "M"}${(i * 100) / 80} ${sag(i / 80).toFixed(2)}`).join(" ");
    const bulbs = Array.from({ length: N }, (_, i) => {
      const x = (i + 0.5) / N;
      return `<i class="bulb b${i % 4}" style="left:${(x * 100).toFixed(2)}%;top:${sag(x).toFixed(1)}px;--i:${i};--r:${(((i * 37) % 21) - 10)}deg"></i>`;
    }).join("");
    const days = o.days === 0 ? `<b>${esc(o.today)}</b>` : `<b data-days>${o.days}</b> ${o.days === 1 ? "day" : "days"} to ${esc(o.name)}`;
    return `
      <div class="hs-slide hs-occ occ-${o.theme}" data-dur="8000" aria-roledescription="slide" aria-label="${esc(o.name)} gift">
        <canvas class="occ-fx" aria-hidden="true"></canvas>
        ${xmas ? `<div class="occ-lights" aria-hidden="true"><svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="${wire}"/></svg>${bulbs}</div>
        <div class="occ-baubles" aria-hidden="true"><span class="bauble r" style="--len:70px"></span><span class="bauble g" style="--len:120px"></span><span class="bauble y" style="--len:46px"></span></div>
        <div class="occ-drift" aria-hidden="true"><svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <g class="trees">${[60, 130, 190, 1020, 1090, 1150].map((x, i) => { const h = [70, 95, 60, 85, 110, 65][i]; return `<path d="M${x} ${115 - h}l${h * 0.32} ${h * 0.45}h-${h * 0.13}l${h * 0.22} ${h * 0.3}h-${h * 0.14}l${h * 0.2} ${h * 0.25}H${x - h * 0.45}l${h * 0.2}-${h * 0.25}h-${h * 0.14}l${h * 0.22}-${h * 0.3}h-${h * 0.13}z"/>`; }).join("")}</g>
          <path class="snow" d="M0 92C150 70 260 104 420 88S700 64 860 86 1080 100 1200 80V120H0z"/></svg></div>` : ""}
        <div class="hs-grid">
          <div class="hs-copy">
            <span class="occ-pill hs-in" style="--d:.1s">${xmas ? SNOWFLAKE : HEART} ${days}</span>
            <h1 class="hs-title">${o.title.map((l, i) => `<span class="hs-line"><span style="--d:${0.2 + i * 0.12}s">${l}</span></span>`).join("")}</h1>
            <p class="hs-lead hs-in" style="--d:.5s">${esc(o.lead)}</p>
            <div class="hs-actions hs-in" style="--d:.62s">
              <a href="${productUrl(p)}" class="btn btn-lg occ-btn">Gift a Lovebook ${ARROW}</a>
              <a href="shop.html" class="btn btn-lg btn-ghost occ-ghost">See all gifts</a>
            </div>
            <p class="occ-note hs-in" style="--d:.74s">From <b>${money(p.price)}</b> · printed copies ship in 3–5 days, so order early — or get it as a PDF for a last-minute gift.</p>
          </div>
          <div class="hs-visual">
            <div class="xb-glow" aria-hidden="true"></div>
            <div class="xb-book" aria-label="The Lovebook, wrapped as a gift">
              <div class="xb-page">${pages.map((src, i) => `<img src="${esc(src)}" alt="" ${i ? 'loading="lazy"' : 'class="on"'}>`).join("")}</div>
              <div class="xb-cover">
                <div class="xb-front"><img src="${esc(cover)}" alt="Lovebook cover">
                  <i class="rib v"></i><i class="rib h"></i>
                </div>
                <div class="xb-back"></div>
              </div>
              <svg class="xb-bow" viewBox="0 0 120 80" aria-hidden="true"><path d="M60 40C40 8 8 6 10 30s34 18 50 10zM60 40c20-32 52-34 50-10S76 48 60 40z"/><path d="M58 42l-22 34 12-4 6 10 6-38zM62 42l22 34-12-4-6 10-6-38z" class="tail"/><circle cx="60" cy="40" r="8"/></svg>
              <div class="xb-tag"><span>To:</span> ${esc(o.tagTo)} ${HEART}<small>From: me</small></div>
            </div>
            ${[[8, 18], [86, 10], [92, 62], [4, 70], [70, 90]].map(([x, y], i) => `<span class="xb-glint" style="left:${x}%;top:${y}%;--i:${i}">${STAR()}</span>`).join("")}
          </div>
        </div>
      </div>`;
  }

  // drifting things behind a product slide: twinkling stars + shooting stars on dark slides,
  // hearts and sparkles floating up on light ones
  function bgFx(dark) {
    const r = (a, b) => (a + Math.random() * (b - a)).toFixed(2);
    let h = "";
    if (dark) {
      for (let i = 0; i < 46; i++) h += `<i class="tw" style="left:${r(0, 100)}%;top:${r(0, 100)}%;--s:${r(1.5, 3.6)}px;--t:${r(1.8, 4.2)}s;--dl:-${r(0, 4)}s"></i>`;
      for (let i = 0; i < 6; i++) h += `<span class="tw big" style="left:${r(4, 96)}%;top:${r(4, 92)}%;--s:${r(12, 20)}px;--t:${r(2.4, 4)}s;--dl:-${r(0, 3)}s">${STAR()}</span>`;
      [[8, 6, 0], [40, 2, 1.7], [22, 30, 3.4]].forEach(([x, y, d]) => (h += `<i class="shoot" style="left:${x}%;top:${y}%;--dl:${d}s"></i>`));
    } else {
      const shapes = [HEART, STAR(), HEART, `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>`];
      for (let i = 0; i < 16; i++) h += `<span class="fl" style="left:${r(0, 96)}%;--s:${r(10, 26)}px;--t:${r(7, 13)}s;--dl:-${r(0, 13)}s;--o:${r(0.25, 0.6)};--sw:${r(-40, 40)}px">${shapes[i % shapes.length]}</span>`;
    }
    return `<div class="hs-bgfx" aria-hidden="true">${h}</div>`;
  }

  // the real product, animated, for a hero slide (falls back to the shop photos)
  function productScene(p) {
    const H = "assets/products/hero/";
    if (p.id === "customised-night-sky") return `<div class="ps ps-sky">${nightSkyArt(p, "hs")}</div>`;
    if (p.id === "customised-journey-map") {
      // pin heads on the poster (poster pixels) and the route a little heart travels
      const pins = [[108, 228], [263, 342], [408, 255], [201, 498], [433, 529]];
      const route = "M108 250 L263 362 L408 276 L263 362 L201 518 L433 548";
      return `<div class="ps ps-jm">
        <svg class="ps-string" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M8 40 L50 2 L92 40"/></svg><i class="ps-nail"></i>
        <div class="ps-frame"><div class="ps-mat"><img src="${H}journey-map-poster.webp" alt="${esc(p.title)}">
          <svg class="ps-pins" viewBox="0 0 563 798" aria-hidden="true">
            ${pins.map(([x, y], i) => `<circle class="rip" cx="${x}" cy="${y}" r="14" style="--i:${i}"/>`).join("")}
            <path class="route" d="${route}"/>
            <g class="mover"><path d="M0 7C-5 3-12-1-12-7c0-4 3-7 6.5-7 2.5 0 4.300 1.300 5.500 3.200C1.200-12.700 3-14 5.500-14 9-14 12-11 12-7 12-1 5 3 0 7z" fill="#e0456e" stroke="#fff" stroke-width="2"/>
              <animateMotion dur="4.6s" repeatCount="indefinite" path="${route}" rotate="0"/></g>
          </svg></div></div>
      </div>`;
    }
    if (p.id === "customised-love-letter") {
      const lines = ["Dear you,", "From the day we met to", "every ordinary Tuesday", "since, you've made my", "whole world softer.", "Thank you for being mine."];
      return `<div class="ps ps-ll">
        <img class="ps-print" src="${H}love-letter-print.webp" alt="">
        <div class="ps-env">
          <div class="ps-env-back"></div>
          <div class="ps-letter">${lines.map((l, i) => `<span style="--i:${i}">${esc(l)}</span>`).join("")}</div>
          <div class="ps-env-front"></div>
          <div class="ps-env-flap"></div>
          <i class="ps-seal">${HEART}</i>
        </div>
      </div>`;
    }
    if (p.id === "customised-scrapbook") {
      return `<div class="ps ps-sb">
        <div class="xb-book sb-book" aria-label="${esc(p.title)}">
          <div class="xb-page"><img class="on" src="${H}scrapbook-right.webp" alt=""></div>
          <div class="xb-cover">
            <div class="xb-front"><img src="${H}scrapbook-cover.webp" alt="${esc(p.title)} cover"></div>
            <div class="xb-back"><img src="${H}scrapbook-left.webp" alt=""></div>
          </div>
          ${[0, 1, 2, 3, 4].map((i) => `<i class="sb-pop" style="--i:${i};--x:${[-60, -20, 30, 70, 10][i]}px">${i % 2 ? STAR() : HEART}</i>`).join("")}
        </div>
      </div>`;
    }
    return "";
  }

  function productSlide(p, i) {
    const imgs = imagesOf(p).map(thumb);
    const pal = p.palette || [];
    const dark = pal[0] && parseInt(pal[0].slice(1, 3), 16) < 90;
    const price = p.sizes ? `<small>From</small> ${money(Math.min(...p.sizes.map((s) => s.price)))}` : money(p.price);
    return `
      <div class="hs-slide hs-prod ${dark ? "dark" : ""}" data-dur="8000" style="--bg:${pal[0] || "var(--cream-2)"};--ac:${pal[2] || "var(--accent)"}" aria-roledescription="slide" aria-label="${esc(p.title)}">
        <span class="hs-blob a" aria-hidden="true"></span><span class="hs-blob b" aria-hidden="true"></span>
        ${bgFx(dark)}
        <div class="hs-grid">
          <div class="hs-copy">
            <span class="hs-kicker hs-in" style="--d:.1s">${esc(p.category || "")}${p.badge ? ` · ${esc(p.badge)}` : ""}</span>
            <h2 class="hs-title"><span class="hs-line"><span style="--d:.2s">${esc(p.title)}</span></span></h2>
            <p class="hs-lead hs-in" style="--d:.38s">${esc(p.short || "")}</p>
            <div class="hs-price hs-in" style="--d:.48s"><span>${price}${p.unit ? ` <small>/ ${esc(p.unit)}</small>` : ""}</span></div>
            <div class="hs-actions hs-in" style="--d:.58s">
              <a href="${productUrl(p)}" class="btn btn-lg">See it ${ARROW}</a>
              <button type="button" class="btn btn-lg btn-ghost" data-buy="${esc(p.id)}">Buy now</button>
            </div>
          </div>
          <a class="hs-visual hs-photos" href="${productUrl(p)}" tabindex="-1" aria-hidden="true">
            <span class="hs-ring"></span>
            ${[[10, 14], [88, 20], [84, 82], [14, 78]].map(([x, y], i) => `<span class="xb-glint" style="left:${x}%;top:${y}%;--i:${i}">${STAR()}</span>`).join("")}
            ${productScene(p) || `${imgs[1] ? `<img class="ph back" src="${esc(imgs[1])}" alt="" loading="lazy">` : ""}
            <img class="ph front" src="${esc(imgs[0])}" alt="" loading="${i < 2 ? "eager" : "lazy"}">`}
          </a>
        </div>
      </div>`;
  }

  /* ---------- Hero side gutters (wide screens): floating sticker doodles, falling snow, a little note ---------- */
  function heroSides(root, theme) {
    const K = "#161513", sw = 'stroke="#161513" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"';
    const D = {
      gift: `<svg viewBox="0 0 64 64"><rect x="10" y="27" width="44" height="29" rx="3" fill="#e03049" ${sw}/><rect x="7" y="19" width="50" height="10" rx="3" fill="#f05a6e" ${sw}/><path d="M29 19h6v37h-6z" fill="#f2c46d" ${sw}/><path d="M32 19c-5-10-15-11-14-4 1 5 14 4 14 4zM32 19c5-10 15-11 14-4-1 5-14 4-14 4z" fill="#f2c46d" ${sw}/></svg>`,
      tree: `<svg viewBox="0 0 64 64"><path d="M32 8 47 29h-7l12 17H12l12-17h-7z" fill="#2f8a5c" ${sw}/><rect x="28" y="46" width="8" height="10" rx="1" fill="#a0603a" ${sw}/><path d="M32 2l2 4.5 4.6.6-3.4 3.2.9 4.6L32 12.7l-4.1 2.2.9-4.6-3.4-3.2 4.6-.6z" fill="#f2c46d" ${sw} stroke-width="1.6"/><circle cx="27" cy="27" r="2.6" fill="#f2c46d"/><circle cx="37" cy="36" r="2.6" fill="#e03049"/><circle cx="24" cy="41" r="2.6" fill="#6cc6ff"/><circle cx="41" cy="43" r="2.6" fill="#f2c46d"/></svg>`,
      candy: `<svg viewBox="0 0 64 64"><path d="M40 58V22a10 10 0 0 0-20 0" fill="none" stroke="${K}" stroke-width="11" stroke-linecap="round"/><path d="M40 58V22a10 10 0 0 0-20 0" fill="none" stroke="#fff" stroke-width="6.6" stroke-linecap="round"/><path d="M40 58V22a10 10 0 0 0-20 0" fill="none" stroke="#e03049" stroke-width="6.6" stroke-dasharray="5 6"/></svg>`,
      bauble: `<svg viewBox="0 0 64 64"><path d="M32 4c-4 0-4 6 0 6s4-6 0-6z" fill="none" ${sw}/><rect x="26" y="10" width="12" height="8" rx="2" fill="#f2c46d" ${sw}/><circle cx="32" cy="38" r="20" fill="#3b7bd6" ${sw}/><path d="M14 34c12 6 24 6 36 0" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/><path d="M15 42c11 5 23 5 34 0" fill="none" stroke="#f2c46d" stroke-width="3"/><ellipse cx="24" cy="30" rx="4" ry="6" fill="#fff" opacity=".6" transform="rotate(30 24 30)"/></svg>`,
      snow: `<svg viewBox="0 0 24 24" fill="none" stroke="#6aa8d8" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M12 2l-2.4 2.4M12 2l2.4 2.4M12 22l-2.4-2.4M12 22l2.4-2.4"/></svg>`,
      star: `<svg viewBox="0 0 24 24"><path d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6l-6.4 3.5L7 14l-5.3-5 7.2-.9z" fill="#f2c46d" stroke="${K}" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
      heart: `<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2.3 4.5 6 4.5c2.2 0 3.6 1.3 4.5 2.6.3.4.9.4 1.2 0 .9-1.3 2.3-2.6 4.5-2.6 3.7 0 5.6 3.9 4 7.2C19.5 16.4 12 21 12 21z" fill="#e0456e" stroke="${K}" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
      letter: `<svg viewBox="0 0 64 64"><rect x="6" y="16" width="52" height="34" rx="3" fill="#fde8d8" ${sw}/><path d="M6 18l26 19 26-19" fill="none" ${sw}/><path d="M32 33c-2-3-7-2-6 2 1 3 6 5 6 5s5-2 6-5c1-4-4-5-6-2z" fill="#e0456e"/></svg>`,
    };
    const xmas = theme === "christmas";
    // [left %, top %, width px, kind, tilt, parallax depth]
    const L = xmas
      ? [[56, 12, 66, "gift", -10, 1.4], [24, 30, 30, "star", 0, .6], [76, 34, 54, "candy", 16, 1], [30, 74, 74, "tree", -6, 1.6], [72, 90, 44, "bauble", 10, .8], [80, 64, 22, "star", 0, .5]]
      : [[56, 12, 60, "letter", -10, 1.4], [24, 30, 30, "star", 0, .6], [76, 36, 40, "heart", 12, 1], [32, 74, 46, "heart", -8, 1.6], [72, 90, 30, "star", 10, .8], [80, 62, 24, "heart", 0, .5]];
    const R = xmas
      ? [[42, 10, 50, "bauble", 8, 1], [76, 28, 36, "snow", 0, .6], [30, 44, 26, "star", 0, .5], [64, 58, 70, "tree", 6, 1.5], [30, 82, 58, "gift", 12, 1.2], [80, 88, 34, "snow", 0, .7]]
      : [[42, 10, 40, "heart", 8, 1], [76, 28, 28, "star", 0, .6], [30, 46, 58, "letter", 8, 1.5], [70, 62, 36, "heart", -6, 1], [34, 84, 30, "star", 12, 1.2], [80, 88, 26, "heart", 0, .7]];
    const r = (a, b) => (a + Math.random() * (b - a)).toFixed(2);
    const doodles = (list) => list.map(([x, y, w, k, rot, z], i) =>
      `<span class="dd" style="left:${x}%;top:${y}%;--w:${w}px;--r:${rot}deg;--z:${z};--k:${i}"><span class="dd-p"><span class="dd-f" style="--t:${r(4.5, 7)}s;--dl:-${r(0, 5)}s">${D[k]}</span></span></span>`).join("");
    const fall = () => Array.from({ length: 9 }, () =>
      `<i class="sf" style="left:${r(4, 96)}%;--s:${r(9, 16)}px;--t:${r(9, 15)}s;--dl:-${r(0, 15)}s;--sw:${r(-24, 24)}px">${xmas ? D.snow : D.heart}</i>`).join("");
    const note = `<div class="dd-note"><span>${xmas ? "psst… the perfect<br>Christmas gift!" : "made with<br>love, for you"}</span>
      <svg viewBox="0 0 120 60" aria-hidden="true"><path pathLength="1" d="M6 8c10 34 50 44 96 30"/><path pathLength="1" d="M90 26l13 12-17 6"/></svg></div>`;
    root.insertAdjacentHTML("afterbegin",
      `<div class="hs-side l" aria-hidden="true">${fall()}${doodles(L)}${note}</div><div class="hs-side r" aria-hidden="true">${fall()}${doodles(R)}</div>`);
    // a little parallax as the mouse moves
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    const sides = $$(".hs-side", root);
    if (!sides.length || !matchMedia("(min-width: 1400px)").matches) return;
    addEventListener("mousemove", (e) => {
      if (scrollY > 900) return;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const mx = ((e.clientX / innerWidth - 0.5) * 16).toFixed(1) + "px", my = ((e.clientY / innerHeight - 0.5) * 12).toFixed(1) + "px";
        sides.forEach((el) => { el.style.setProperty("--mx", mx); el.style.setProperty("--my", my); });
      });
    }, { passive: true });
  }

  function heroSlider() {
    const root = $("#hero-slider");
    if (!root) return;
    const track = $(".hs-track", root), dotsEl = $(".hs-dots", root);
    const hero = PRODUCTS.find((p) => p.id === "customised-lovebook") || PRODUCTS[0];
    const occ = nextOccasion();
    heroSides(root, occ ? occ.theme : "");
    const order = ["customised-night-sky", "customised-scrapbook", "customised-journey-map", "customised-love-letter"];
    const rest = order.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
    PRODUCTS.forEach((p) => { if (p !== hero && !rest.includes(p)) rest.push(p); });
    rest.length = Math.min(rest.length, 4);
    const slides = (occ ? [occasionSlide(occ, hero)] : []).concat(rest.map(productSlide));
    track.innerHTML = slides.join("");
    const els = $$(".hs-slide", track);
    dotsEl.innerHTML = els.map((s, i) => `<button type="button" aria-label="Slide ${i + 1}: ${esc(s.getAttribute("aria-label"))}"><i></i></button>`).join("");
    const dots = $$("button", dotsEl);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let index = -1, timer = null, paused = false, flipTimers = [], heroOnScreen = true;
    new IntersectionObserver(([en]) => {
      heroOnScreen = en.isIntersecting;
      if (index >= 0) fx.toggle(els[index].classList.contains("hs-occ") && !reduce && heroOnScreen);
    }).observe(root);
    // once the cover is open, the pages turn over one by one like a real book
    function turnPages(slide) {
      flipTimers.forEach(clearTimeout); flipTimers = [];
      $$(".xb-leaf").forEach((l) => l.remove());
      const book = $(".xb-book", slide), imgs = $$(".xb-page img", slide);
      if (!book || imgs.length < 2) return;
      let k = 0;
      imgs.forEach((im, i) => im.classList.toggle("on", i === 0));
      const flip = () => {
        const leaf = document.createElement("div");
        leaf.className = "xb-leaf";
        leaf.innerHTML = `<div class="xb-leaf-f"><img src="${imgs[k].getAttribute("src")}" alt=""></div><div class="xb-leaf-b"></div>`;
        book.insertBefore(leaf, $(".xb-cover", book));
        imgs[k].classList.remove("on"); k = (k + 1) % imgs.length; imgs[k].classList.add("on");
        void leaf.offsetWidth; // start from flat, then turn
        leaf.classList.add("go");
        flipTimers.push(setTimeout(() => leaf.remove(), 1300));
        flipTimers.push(setTimeout(flip, 1150));
      };
      flipTimers.push(setTimeout(flip, reduce ? 0 : 2300));
    }
    function go(n) {
      n = (n + els.length) % els.length;
      if (n === index) return;
      els.forEach((s, i) => { s.classList.toggle("is-active", i === n); s.classList.toggle("is-prev", i === index); s.setAttribute("aria-hidden", i === n ? "false" : "true"); s.inert = i !== n; });
      dots.forEach((d, i) => { d.classList.toggle("on", i === n); d.style.setProperty("--dur", (els[n].dataset.dur || 6000) + "ms"); });
      index = n;
      // the Lovebook's pages turn over once the gift is unwrapped
      turnPages(els[n]);
      fx.toggle(els[n].classList.contains("hs-occ") && !reduce && heroOnScreen);
      schedule();
    }
    function schedule() {
      clearTimeout(timer);
      root.classList.toggle("paused", paused || reduce);
      if (paused || reduce) return;
      timer = setTimeout(() => go(index + 1), +els[index].dataset.dur || 6000);
    }
    // restart the dot's progress bar when resuming
    const setPaused = (v) => { if (paused === v) return; paused = v; if (!v) { const d = dots[index]; d.classList.remove("on"); void d.offsetWidth; d.classList.add("on"); } schedule(); };

    // snow (Christmas) or floating hearts (other occasions) on the occasion slide
    const fx = (() => {
      const cv = $(".occ-fx", track);
      if (!cv) return { toggle() {} };
      const ctx = cv.getContext("2d"), xmas = cv.parentElement.classList.contains("occ-christmas");
      let w = 0, h = 0, dpr = 1, flakes = [], raf = 0, on = false, last = 0;
      const make = (top) => ({ x: Math.random() * w, y: top ? Math.random() * h : -10, r: xmas ? 1 + Math.random() * 2.6 : 5 + Math.random() * 7, v: xmas ? 18 + Math.random() * 38 : -(14 + Math.random() * 22), a: Math.random() * 6.28, s: 0.6 + Math.random() * 1.2, o: 0.35 + Math.random() * 0.6 });
      const size = () => {
        dpr = 1; w = cv.clientWidth; h = cv.clientHeight;
        cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.round((w * h) / (xmas ? 7500 : 30000));
        flakes = Array.from({ length: n }, () => make(true));
      };
      const heart = (x, y, r) => { ctx.beginPath(); ctx.moveTo(x, y + r * 0.35); ctx.bezierCurveTo(x - r, y - r * 0.4, x - r * 0.4, y - r, x, y - r * 0.35); ctx.bezierCurveTo(x + r * 0.4, y - r, x + r, y - r * 0.4, x, y + r * 0.35); ctx.fill(); };
      const tick = (t) => {
        const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
        ctx.clearRect(0, 0, w, h);
        flakes.forEach((f, i) => {
          f.y += f.v * dt; f.a += f.s * dt; const x = f.x + Math.sin(f.a) * (xmas ? 14 : 20);
          if (xmas ? f.y > h + 10 : f.y < -20) { flakes[i] = make(false); if (!xmas) flakes[i].y = h + 15; return; }
          ctx.globalAlpha = f.o;
          if (xmas) { ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x, f.y, f.r, 0, 6.283); ctx.fill(); }
          else { ctx.fillStyle = i % 3 ? "#ff8fb0" : "#fff"; heart(x, f.y, f.r); }
        });
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(tick);
      };
      addEventListener("resize", () => { if (on) size(); });
      document.addEventListener("visibilitychange", () => { if (!on) return; cancelAnimationFrame(raf); last = 0; if (!document.hidden) raf = requestAnimationFrame(tick); });
      return { toggle(v) { if (v === on) return; on = v; cancelAnimationFrame(raf); last = 0; if (v) { size(); raf = requestAnimationFrame(tick); } else ctx.clearRect(0, 0, w, h); } };
    })();

    $(".hs-prev", root).addEventListener("click", () => go(index - 1));
    $(".hs-next", root).addEventListener("click", () => go(index + 1));
    dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
    document.addEventListener("visibilitychange", () => setPaused(document.hidden));
    root.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") go(index + 1); if (e.key === "ArrowLeft") go(index - 1); });
    // swipe
    let sx = null, sy = 0;
    track.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") { sx = e.clientX; sy = e.clientY; } });
    track.addEventListener("pointerup", (e) => {
      if (sx === null) return;
      const dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
    });
    track.addEventListener("pointercancel", () => (sx = null));
    // on phones, pause while the hero is scrolled out of view

    // wait for the page's loading curtain to lift so the first slide's animation is seen in full
    setTimeout(() => { if (index < 0) go(0); }, 650);
  }

  function homePage() {
    heroSlider();
    homeReviews();
    const words = ["Made with love", "Handcrafted", "Drawn just for you", "One of a kind", "Made to order", "Your story, illustrated", "Little things, big feelings", "Gifts that mean something"];
    const mq = words.map((w) => `<span>${w} ${STAR()}</span>`).join("");
    $("#marquee").innerHTML = mq + mq;
    const bestId = bestsellerSpotlight();
    skySpotlight();
    const featured = PRODUCTS.filter((p) => p.featured);
    const track = $("#carousel-track");
    track.innerHTML = featured.map(card).join("");
    track.classList.toggle("few", featured.length <= 2);
    initCarousel($("#featured-carousel"));
    if ($("#latest-grid")) $("#latest-grid").innerHTML = PRODUCTS.slice(0, 4).map(card).join("");
    $$(".js-wa").forEach((a) => (a.href = waLink("Hi! I'd love to know more about your products.")));
    $$(".js-ig").forEach((a) => (a.href = igProfile()));
  }

  function shopPage() {
    const params = new URLSearchParams(location.search);
    const used = [...new Set(PRODUCTS.map((p) => p.category))];
    const order = typeof CATEGORY_INFO !== "undefined" ? Object.keys(CATEGORY_INFO) : [];
    const cats = ["All", ...order.filter((c) => used.includes(c)), ...used.filter((c) => !order.includes(c))];
    let state = { cat: cats.includes(params.get("cat")) ? params.get("cat") : "All", q: "", sort: "featured" };
    const count = (c) => (c === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c).length);
    $("#chips").innerHTML = cats.length > 2 ? cats.map((c) => `<button class="chip" data-cat="${esc(c)}">${esc(c)} <small>${count(c)}</small></button>`).join("") : "";
    const blurbs = (typeof CATEGORY_INFO !== "undefined" && CATEGORY_INFO) || {};
    const render = () => {
      $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === state.cat));
      let list = PRODUCTS.filter((p) => (state.cat === "All" || p.category === state.cat) &&
        (p.title + p.short + p.category).toLowerCase().includes(state.q.toLowerCase()));
      if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
      if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);
      if (state.sort === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
      $("#count").textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
      $("#grid").classList.toggle("few", list.length > 0 && list.length <= 3);
      // "All", unsorted and unsearched → show the products grouped under category headings
      const grouped = state.cat === "All" && !state.q && state.sort === "featured" && cats.length > 2;
      let html;
      if (!list.length) html = `<div class="empty" style="grid-column:1/-1">Nothing matches that yet — try another search.</div>`;
      else if (grouped) {
        let i = 0;
        html = cats.slice(1).map((c) => {
          const items = list.filter((p) => p.category === c); if (!items.length) return "";
          return `<div class="shop-cat-head"><h2>${esc(c)}</h2>${blurbs[c] ? `<p>${esc(blurbs[c])}</p>` : ""}<button class="shop-cat-link" data-cat="${esc(c)}">See only ${esc(c)} ${I.arrow}</button></div>` + items.map((p) => card(p, i++)).join("");
        }).join("");
      } else html = list.map(card).join("");
      $("#grid").innerHTML = html;
    };
    const choose = (e) => {
      const c = e.target.closest(".chip, .shop-cat-link"); if (!c) return;
      state.cat = c.dataset.cat;
      history.replaceState(null, "", state.cat === "All" ? "shop.html" : `shop.html?cat=${encodeURIComponent(state.cat)}`);
      render();
      if (c.classList.contains("shop-cat-link")) $(".toolbar").scrollIntoView({ behavior: "smooth", block: "start" });
    };
    $("#chips").addEventListener("click", choose);
    $("#grid").addEventListener("click", choose);
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
        <div class="pdp-price reveal" style="--d:.15s"><span class="price"><span id="pdp-price-val">${money(p.sizes ? p.sizes[0].price : p.price)}</span>${p.unit ? `<small class="price-unit"> / ${esc(p.unit)}</small>` : ""}${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ""}</span>${save ? `<span class="save-tag">Save ${save}%</span>` : ""}${p.priceNote ? `<span class="ship-tag">${p.formats && p.formats.includes("digital") ? I.bolt : I.truck} ${esc(p.priceNote)}</span>` : ""}</div>
        ${p.sizes ? `<div class="size-pick reveal" style="--d:.16s"><div class="delivery-title">Choose your size</div><div class="size-opts">${p.sizes.map((s, i) => `<label class="sopt"><input type="radio" name="size" value="${i}" ${i ? "" : "checked"}><span><b>${esc(s.label)}</b>${s.dims ? `<small>${esc(s.dims)}</small>` : ""}</span><em>${money(s.price)}</em></label>`).join("")}</div></div>` : ""}
        ${p.shippingNote ? `<p class="intl-note reveal" style="--d:.17s">✈ ${esc(p.shippingNote)}</p>` : ""}
        ${p.framingNote ? `<div class="frame-note reveal" style="--d:.19s" role="note"><span class="frame-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg></span><span><b>Framing costs extra</b><small>${esc(p.framingNote)}. Want it framed? Just ask when you order.</small></span></div>` : ""}
        <p class="pdp-short reveal" style="--d:.2s">${esc(p.short)}</p>
        ${fmts.length ? `
        <div class="delivery reveal" style="--d:.25s">
          <div class="delivery-title">${I.check.replace("<svg", '<svg width="14"')} ${fmts.length > 1 ? "Delivered as a printed copy or a PDF" : fmts[0] === "pdf" ? "Delivered as a PDF" : fmts[0] === "digital" ? "Digital delivery — nothing to ship" : "Delivered as a printed copy"}</div>
          <div class="delivery-opts ${fmts.length === 1 ? "one" : ""}">
            ${fmts.includes("print") ? `<label class="dopt"><input type="radio" name="fmt" value="print" ${fmts[0] === "print" ? "checked" : ""}><span class="dico">${I.print}</span><span><b>Printed copy</b><small>Printed & delivered to your door</small></span></label>` : ""}
            ${fmts.includes("digital") ? `<label class="dopt"><input type="radio" name="fmt" value="digital" checked><span class="dico">${I.bolt}</span><span><b>PDF + PNG by email</b><small>Same-day delivery, straight to your inbox</small></span></label>` : ""}
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
          <div class="acc"><button class="acc-head">Delivery & ordering <i></i></button><div class="acc-body"><div><p>${fmts.includes("digital") ? "This is a digital product, so there's nothing to print or ship: your files (PDF and PNG) are emailed to you the same day your order is confirmed. " : ""}${fmts.includes("pdf") ? "PDF orders are sent to you on WhatsApp or email as soon as your order is confirmed. " : ""}${fmts.includes("print") ? "Printed copies are made to order and usually ship within 3–5 days. " : ""}Message me on WhatsApp or Instagram and I'll help with payment, sizes and anything else.</p></div></div></div>
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
    const pickedSize = () => (p.sizes ? p.sizes[+($(".size-pick input:checked")?.value || 0)] : null);
    $$(".size-pick input").forEach((r) => r.addEventListener("change", () => {
      const s = pickedSize(); const el = $("#pdp-price-val");
      el.textContent = money(s.price); el.animate([{ transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 300, easing: "ease-out" });
    }));
    $("#buy-now").addEventListener("click", () => openBuy(p, $(".delivery input:checked")?.value, pickedSize()));
    $("#share").addEventListener("click", async () => {
      try {
        if (navigator.share) await navigator.share({ title: p.title, url: location.href });
        else { await navigator.clipboard.writeText(location.href); toast("Link copied!"); }
      } catch {}
    });

    // related
    const related = PRODUCTS.filter((x) => x.id !== p.id).sort((a, b) => (b.category === p.category) - (a.category === p.category)).slice(0, 4);
    $("#related").innerHTML = related.map(card).join("");
    $("#related").classList.toggle("few", related.length <= 3);
  }

  function aboutPage() {
    if (STORE.founder.photo) $("#portrait").innerHTML = `<img src="${STORE.founder.photo}" alt="${esc(STORE.founder.name)}">`;
    $$(".js-founder").forEach((el) => (el.textContent = STORE.founder.name));
    $$(".js-role").forEach((el) => (el.textContent = STORE.founder.role));
    $$(".js-wa").forEach((a) => (a.href = waLink("Hi! I just read your story on the website 👋")));
    $$(".js-ig").forEach((a) => (a.href = igProfile()));
    // live numbers: happy customers = 4★+ reviews (or STORE.happyCustomers if that's higher), average rating, number of gifts
    const set = (id, v) => { const s = $(`#${id} strong`); if (s) s.dataset.count = v; };
    set("stat-gifts", PRODUCTS.length);
    loadReviews().then((list) => {
      const happy = list.filter((r) => Number(r.rating) >= 4).length;
      set("stat-happy", Math.max(happy, Number(STORE.happyCustomers) || 0));
      if (list.length) set("stat-rating", avgRating(list).toFixed(1));
    }).catch(() => {}).finally(initCounters);
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

  /* ---------- Reviews ----------
     Reviews posted on the site live in Supabase (table "reviews", see supabase/reviews.sql).
     Anything in REVIEWS (js/data.js) is shown too. */
  const DB = STORE.reviewsDb || {};
  const STATIC_REVIEWS = (typeof REVIEWS !== "undefined" ? REVIEWS : []).filter((r) => r && r.text && r.rating);
  const STAR_PATH = "M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z";
  const starsHtml = (n, cls = "") =>
    `<span class="rv-stars ${cls}" aria-label="${Number(n).toFixed(1)} out of 5 stars">${[1, 2, 3, 4, 5]
      .map((i) => `<svg viewBox="0 0 24 24" class="${i <= n + 0.25 ? "on" : ""}"><path d="${STAR_PATH}"/></svg>`).join("")}</span>`;
  const fmtDate = (d) => { const t = new Date(d); return isNaN(t) ? "" : t.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); };
  const avgRating = (list) => (list.length ? list.reduce((s, r) => s + Number(r.rating), 0) / list.length : 0);
  const dbHeaders = () => ({ apikey: DB.key, "Content-Type": "application/json" });

  let reviewsCache = null;
  async function loadReviews() {
    if (reviewsCache) return reviewsCache;
    let remote = [];
    if (DB.url && DB.key) {
      try {
        const res = await fetch(`${DB.url}/rest/v1/reviews?select=id,created_at,name,city,product,rating,body&order=created_at.desc&limit=500`, { headers: dbHeaders() });
        if (!res.ok) throw new Error(res.status + " " + (await res.text()));
        remote = (await res.json()).map((r) => ({ id: r.id, name: r.name, city: r.city, product: r.product, rating: r.rating, date: r.created_at, text: r.body }));
      } catch (err) {
        console.warn("Could not load reviews from Supabase:", err);
      }
    }
    reviewsCache = [...remote, ...STATIC_REVIEWS].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    return reviewsCache;
  }
  async function postReview(review) {
    const res = await fetch(`${DB.url}/rest/v1/reviews`, {
      method: "POST",
      headers: { ...dbHeaders(), Prefer: "return=minimal" },
      body: JSON.stringify(review),
    });
    if (!res.ok) throw new Error(res.status + " " + (await res.text()));
  }

  function reviewCard(r, i = 0) {
    const prod = PRODUCTS.find((p) => p.id === r.product);
    return `
      <article class="rv-card" style="--d:${(i % 6) * 0.06}s">
        ${starsHtml(r.rating)}
        <p class="rv-text">“${esc(r.text)}”</p>
        ${r.photo ? `<img class="rv-photo" src="${esc(r.photo)}" alt="Photo from ${esc(r.name)}" loading="lazy">` : ""}
        <footer>
          <span class="rv-avatar">${esc((r.name || "?").trim().charAt(0).toUpperCase())}</span>
          <span><b>${esc(r.name)}</b>${r.city ? `<small>${esc(r.city)}</small>` : ""}</span>
          <span class="rv-meta">${prod ? `<a href="${productUrl(prod)}">${esc(prod.title)}</a>` : "<span></span>"}${r.date ? `<small>${fmtDate(r.date)}</small>` : ""}</span>
        </footer>
      </article>`;
  }
  const skeletons = (n) => Array.from({ length: n }, () => `<div class="rv-card rv-skel"><i></i><i></i><i></i></div>`).join("");

  function reviewsPage() {
    const params = new URLSearchParams(location.search);
    let all = [], filter = "all";
    $("#rv-summary").hidden = true;
    $("#rv-chips").hidden = true;
    $("#rv-grid").innerHTML = skeletons(3);

    function renderSummary() {
      const avg = avgRating(all);
      $("#rv-summary").hidden = !all.length;
      if (!all.length) return;
      $("#rv-summary").innerHTML = `<div class="rv-score"><strong>${avg.toFixed(1)}</strong>${starsHtml(avg, "lg")}<span>${all.length} review${all.length > 1 ? "s" : ""}</span></div>
        <div class="rv-bars">${[5, 4, 3, 2, 1].map((n) => {
          const c = all.filter((r) => Math.round(r.rating) === n).length, pct = (c / all.length) * 100;
          return `<div class="rv-bar"><span>${n}★</span><i><b style="width:${pct}%"></b></i><span>${c}</span></div>`;
        }).join("")}</div>`;
    }
    function renderChips() {
      const withReviews = PRODUCTS.filter((p) => all.some((r) => r.product === p.id));
      const chips = $("#rv-chips");
      chips.hidden = withReviews.length < 2;
      if (filter !== "all" && !withReviews.some((p) => p.id === filter)) filter = "all";
      chips.innerHTML = [`<button class="chip ${filter === "all" ? "active" : ""}" data-f="all">All</button>`,
        ...withReviews.map((p) => `<button class="chip ${filter === p.id ? "active" : ""}" data-f="${esc(p.id)}">${esc(p.title)}</button>`)].join("");
    }
    function renderList() {
      const list = all.filter((r) => filter === "all" || r.product === filter);
      $("#rv-grid").innerHTML = list.length
        ? list.map(reviewCard).join("")
        : `<div class="rv-empty">${STAR()}<h3>No reviews yet</h3><p>Got something from us? You could be the very first story here.</p><a href="#write" class="btn">Write the first review</a></div>`;
    }
    const renderAll = () => { renderSummary(); renderChips(); renderList(); };
    $("#rv-chips").addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      filter = b.dataset.f; renderChips(); renderList();
    });
    loadReviews().then((list) => { all = list.slice(); renderAll(); });

    // ----- form -----
    const preselect = PRODUCTS.some((p) => p.id === params.get("product")) ? params.get("product") : "";
    setupReviewForm($("#rv-form"), {
      preselect,
      onPosted(r) {
        all.unshift(r);
        filter = "all"; renderAll();
        const first = $("#rv-grid .rv-card");
        if (first) { first.classList.add("rv-new"); setTimeout(() => first.scrollIntoView({ behavior: "smooth", block: "center" }), 250); }
      },
    });
  }

  /* Review form markup (used on product pages; reviews.html has the same fields in its HTML) */
  function reviewFormHtml(p) {
    return `
      <form class="rv-form" novalidate>
        <div class="rv-row">
          <label class="rv-field"><span>Your name *</span><input name="name" autocomplete="given-name" maxlength="40" required></label>
          <label class="rv-field"><span>City</span><input name="city" autocomplete="address-level2" maxlength="40"></label>
        </div>
        <div class="rv-field"><span>Your rating *</span><div class="rv-stars-input" role="radiogroup" aria-label="Rating"></div></div>
        <label class="rv-field"><span>Your review *</span><textarea name="text" rows="4" maxlength="800" required placeholder="What did you love about your ${esc(p.title)}?"></textarea><small class="rv-count">0 / 800</small></label>
        <label class="rv-consent"><input type="checkbox" name="consent" required><span>I'm happy for my review and first name to appear on this website.</span></label>
        <p class="rv-error" role="alert"></p>
        <label class="rv-hp" aria-hidden="true">Website <input name="website" tabindex="-1" autocomplete="off"></label>
        <button class="btn btn-lg btn-block rv-send-btn" type="submit"></button>
        <p class="rv-note">Your review appears here straight away.</p>
      </form>`;
  }

  /* Wires up a review form. opts.product = fixed product id (no dropdown); opts.preselect = dropdown default;
     opts.onPosted(review) runs after a review is saved. */
  function setupReviewForm(form, opts = {}) {
    if (!form) return;
    const q = (s) => form.querySelector(s);
    const sel = form.querySelector('select[name="product"]'); // only when the product isn't fixed
    if (sel) {
      sel.innerHTML = `<option value="">Choose a product</option>` + PRODUCTS.map((p) => `<option value="${esc(p.id)}">${esc(p.title)}</option>`).join("");
      if (opts.preselect) sel.value = opts.preselect;
    }
    let rating = 0;
    const starsEl = q(".rv-stars-input");
    const labels = ["Tap to rate", "Not for me", "It was okay", "Good", "Loved it", "Absolutely perfect"];
    starsEl.innerHTML = [1, 2, 3, 4, 5].map((i) => `<button type="button" role="radio" aria-checked="false" aria-label="${i} star${i > 1 ? "s" : ""}" data-v="${i}"><svg viewBox="0 0 24 24"><path d="${STAR_PATH}"/></svg></button>`).join("") + `<em class="rv-star-label">Tap to rate</em>`;
    const paint = (v) => $$("button", starsEl).forEach((b) => b.classList.toggle("on", +b.dataset.v <= v));
    const setRating = (v) => {
      rating = v; paint(v);
      $$("button", starsEl).forEach((x) => x.setAttribute("aria-checked", String(+x.dataset.v === v)));
      q(".rv-star-label").textContent = labels[v];
    };
    starsEl.addEventListener("mouseover", (e) => { const b = e.target.closest("button"); if (b) paint(+b.dataset.v); });
    starsEl.addEventListener("mouseleave", () => paint(rating));
    starsEl.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      setRating(+b.dataset.v);
      b.animate([{ transform: "scale(1)" }, { transform: "scale(1.35)" }, { transform: "scale(1)" }], { duration: 350, easing: "ease-out" });
    });
    const ta = form.querySelector('textarea[name="text"]'), count = q(".rv-count");
    ta.addEventListener("input", () => (count.textContent = `${ta.value.length} / 800`));
    const sendBtn = q(".rv-send-btn"), sendLabel = `${I.heart} Post my review`;
    sendBtn.innerHTML = sendLabel;
    const wa = q(".rv-wa"); if (wa) wa.href = waLink("Hi! I'd like to share some feedback about my order.");

    const err = q(".rv-error");
    const fail = (msg) => { err.textContent = msg; err.classList.remove("shake"); void err.offsetWidth; err.classList.add("shake"); };
    const RECENT_KEY = "sp-review-posted";
    const recentlyPosted = () => { try { return Date.now() - Number(localStorage.getItem(RECENT_KEY) || 0) < 864e5; } catch { return false; } };
    const field = (n) => form.querySelector(`[name="${n}"]`);
    const done = () => {
      form.reset(); setRating(0); count.textContent = "0 / 800";
      if (sel && opts.preselect) sel.value = opts.preselect;
      toast("Thank you! Your review is live 💌");
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const product = opts.product || (sel ? sel.value : "");
      const name = field("name").value.trim(), city = field("city").value.trim(), text = ta.value.trim();
      const problem = !name ? "Please add your name." : !product ? "Please choose which product you got." : !rating ? "Please choose a star rating."
        : text.length < 10 ? "Please write a few words (at least 10 characters)." : !field("consent").checked ? "Please tick the box so your review can be shown."
        : recentlyPosted() ? "Thanks — you've already posted a review today. You can post another tomorrow." : "";
      if (problem) return fail(problem);
      err.textContent = "";
      const review = { name, city: city || null, product, rating, body: text };
      if (field("website").value) { done(); return; } // hidden field: only bots fill it in

      sendBtn.disabled = true; sendBtn.innerHTML = `<span class="rv-spinner"></span> Posting…`;
      try {
        await postReview(review);
        try { localStorage.setItem(RECENT_KEY, String(Date.now())); } catch {}
        const posted = { ...review, text, date: new Date().toISOString() };
        if (reviewsCache) reviewsCache.unshift(posted);
        done();
        if (opts.onPosted) opts.onPosted(posted);
      } catch (ex) {
        console.warn(ex);
        fail("Sorry, your review couldn't be posted right now. Please try again in a moment, or message me on WhatsApp.");
      } finally {
        sendBtn.disabled = false; sendBtn.innerHTML = sendLabel;
      }
    });
  }

  // reviews block on each product page: the product's reviews, then a form to write one
  async function productReviews(p) {
    const box = $("#pdp-reviews"); if (!box) return;
    box.innerHTML = `
      <div class="section-head">
        <div><span class="eyebrow">Reviews</span><h2 class="h-display h2" style="margin-top:14px" id="pdp-rv-title">What people say</h2></div>
        <a href="#pdp-write" class="btn btn-ghost">Write a review ${I.arrow}</a>
      </div>
      <div id="pdp-rv-list"><div class="rv-grid">${skeletons(2)}</div></div>
      <div class="pdp-write" id="pdp-write">
        <div class="pdp-write-head"><span class="eyebrow">Share your experience</span><h3>Write a review for ${esc(p.title)}</h3></div>
        ${reviewFormHtml(p)}
      </div>`;
    const list = (await loadReviews()).filter((r) => r.product === p.id);
    const render = (highlight) => {
      $("#pdp-rv-title").textContent = list.length ? "What people say" : "No reviews yet";
      $("#pdp-rv-list").innerHTML = list.length
        ? `<div class="rv-grid">${list.slice(0, 6).map(reviewCard).join("")}</div>` + (list.length > 6 ? `<p style="margin-top:24px"><a class="btn" href="reviews.html">See all ${list.length} reviews ${I.arrow}</a></p>` : "")
        : `<p class="muted">Got this? Your review would be the very first — write it just below.</p>`;
      const prev = $(".pdp-rating"); if (prev) prev.parentNode.removeChild(prev);
      if (list.length) {
        const avg = avgRating(list), title = $(".pdp-title");
        if (title) title.insertAdjacentHTML("afterend", `<a class="pdp-rating" href="#pdp-reviews">${starsHtml(avg)} <span>${avg.toFixed(1)} · ${list.length} review${list.length > 1 ? "s" : ""}</span></a>`);
      }
      if (highlight) {
        const first = $("#pdp-rv-list .rv-card");
        if (first) { first.classList.add("rv-new"); setTimeout(() => first.scrollIntoView({ behavior: "smooth", block: "center" }), 250); }
      }
    };
    render();
    setupReviewForm($("#pdp-write form"), { product: p.id, onPosted(r) { list.unshift(r); render(true); } });
  }

  /* ---------- Boot ---------- */
  renderChrome();
  initTransitions();
  ({ home: homePage, shop: shopPage, product: (...a) => { productPage(...a); productReviews(PRODUCTS.find((x) => x.id === new URLSearchParams(location.search).get("id")) || PRODUCTS[0]); }, about: aboutPage, contact: contactPage, reviews: reviewsPage }[page] || (() => {}))();
  observeReveals();
  // looping animations only run while their section is on screen (keeps scrolling smooth)
  const animIO = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("anim-off", !e.isIntersecting)), { rootMargin: "120px 0px" });
  $$("main > section, main > .marquee, .site-footer").forEach((el) => animIO.observe(el));
  window.SP = { STAR, I };
})();
