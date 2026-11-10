/* =========================================================
   THE SIDE PROJECT — store settings & products
   ---------------------------------------------------------
   EDIT THIS FILE to change your contact details, prices,
   descriptions and photos. Everything on the site reads
   from here.
   ========================================================= */

const STORE = {
  name: "The Side Project",
  tagline: "A little bit of everything.",
  currency: "₹",

  // ⬇️ YOUR DETAILS — replace these placeholders
  whatsappNumber: "919903890646",       // country code + number, digits only (no + or spaces)
  phoneDisplay: "+91 99038 90646",      // how your number is shown on the site
  instagramHandle: "shoptheside/",    // without the @
  email: "sanjoysohan17@gmail.com",

  // Customer reviews are stored in Supabase (see supabase/reviews.sql).
  // The publishable key is meant to be public; never put a "secret" or "service_role" key here.
  reviewsDb: {
    url: "https://gwzappsbbagutxkpuooq.supabase.co",
    key: "sb_publishable_dIhrl8wAo5oGZxNO5Ndfng_IOLidyi0",
  },

  founder: {
    name: "Sohan",
    role: "Founder & Maker",
    photo: "",                          // optional: e.g. "assets/founder.jpg"
  },
};

/* ---------------------------------------------------------
   PRODUCTS
   - id:        unique, used in the page link (product.html?id=...)
   - images:    list of photo paths, e.g. ["assets/products/planner-1.jpg", ...]
                Leave empty [] to use the built-in illustrated previews.
   - formats:   which delivery options to show on this product.
                ["print", "pdf"] = both, ["pdf"] = PDF only, [] = hide the note.
   - featured:  true = shown on the home page.
   --------------------------------------------------------- */
/* Shop categories, in the order they appear, with a short line under each heading.
   A product's `category` must match one of these names. */
const CATEGORY_INFO = {
  "Books": "Your story, page by page — illustrated books and scrapbooks.",
  "Wall Art": "Maps and skies of the moments that made you, ready to frame.",
  "Letters & Cards": "Little love notes to read again and again.",
  "Keepsakes": "Everyday things, made yours — for the desk and the fridge.",
};

const PRODUCTS = [
  {
    id: "customised-lovebook",
    // pages shown in the home page flipbook (cover first, then pages in reading order)
    flipPages: ["assets/products/lovebook-pages/cover.webp", "assets/products/lovebook-pages/p1.webp", "assets/products/lovebook-pages/p2.webp", "assets/products/lovebook-pages/p3.webp", "assets/products/lovebook-pages/p4.webp"],
    title: "Customised Lovebook",
    category: "Books",
    price: 899,
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "Bestseller",
    formats: ["print", "pdf"],
    palette: ["#1b1b1b", "#f1e7d6", "#d9653b"],
    motif: "orbit",
    short: "A one-of-a-kind book about the two of you — made just for your person.",
    description:
      "Your story, turned into a keepsake. The Customised Lovebook is an illustrated little book about you and your person — the day you met, your first trip, the big question and every moment in between, drawn as cute characters that look like the two of you. Send me your photos and memories on WhatsApp or Instagram and I'll draw every page by hand, so no two books are ever the same. Not just for couples — make one for your siblings or your grandparents too. Perfect for anniversaries, birthdays, Valentine's Day, or just because.",
    details: [
      "Up to 24 illustrated pages — your story, page by page",
      "Characters drawn to look like you — every detail just for you",
      "Printed on A4, folded into an A5 book — 14.8 × 21 cm (5.8 × 8.3 in)",
      "Comes with a PDF copy to keep and share",
      "Choose your story: Our Love Story, Best Siblings Ever or Forever & Always",
      "Preview shared with you before it's finalised",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/lovebook-1.jpg",
      "assets/products/lovebook-2.jpg",
      "assets/products/lovebook-3.jpg",
      "assets/products/lovebook-4.jpg",
      "assets/products/lovebook-5.jpg",
      "assets/products/lovebook-6.jpg",
      "assets/products/lovebook-7.jpg",
    ],
  },
  {
    id: "customised-mini-lovebook",
    title: "Customised Mini Lovebook",
    category: "Books",
    price: 649,
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print", "pdf"],
    palette: ["#f7c6d9", "#1b1b1b", "#e0456e"],
    motif: "sparkle",
    short: "Tiny pages, big love — a pocket-sized illustrated book about your story.",
    description:
      "All the love of our Lovebook, in a size that fits in a pocket, a purse or a gift box. The Customised Mini Lovebook tells your story in 12 illustrated pages — movie nights, birthdays, inside jokes — with characters drawn from your photos, outfits and all. Send me your photos and memories on WhatsApp or Instagram and I'll draw every page by hand. Perfect for monthsaries, first anniversaries and sweet surprises for your girlfriend, boyfriend, husband, wife, best friend, sister or brother.",
    details: [
      "12 illustrated pages — your story, told in your own words",
      "Characters that look like you, drawn from your photos",
      "Printed on A5, folded into a mini A6 book — 10.5 × 14.8 cm (4.1 × 5.8 in), about phone-sized",
      "Printed mini book + PDF copy",
      "Preview shared with you before it's finalised",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/mini-lovebook-2.jpg",
      "assets/products/mini-lovebook-1.jpg",
      "assets/products/mini-lovebook-3.jpg",
      "assets/products/mini-lovebook-4.jpg",
      "assets/products/mini-lovebook-5.webp",
    ],
  },
  {
    id: "customised-love-letter",
    title: "Customised Love Letter",
    category: "Letters & Cards",
    price: 399,
    framingNote: "The print is delivered without a frame",
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print", "pdf"],
    palette: ["#fde8d8", "#1b1b1b", "#e0456e"],
    motif: "lines",
    short: "Say it with a drawing — your words plus one big illustration of you two, ready to frame.",
    description:
      "Some feelings deserve more than a text. The Customised Love Letter pairs your own words with one big, hand-drawn illustration of your favourite moment together — the first trip, the proposal, an ordinary Tuesday — with characters drawn to look just like you. Write what you feel and I'll lay it out in a beautiful handwritten style, printed and ready to frame. Perfect for proposals, anniversaries and long-distance surprises, for your girlfriend, boyfriend, husband, wife, mom, dad or best friend.",
    details: [
      "Frame not included — framing costs extra",
      "One custom illustration of your favourite moment, with characters that look like you",
      "Your letter, laid out in a handwritten style",
      "Choose A4 (21 × 29.7 cm) or A3 (29.7 × 42 cm) — both fit a standard frame",
      "Printed copy delivered, plus a PDF copy",
      "Preview shared with you before it's finalised",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/love-letter-1.webp",
      "assets/products/love-letter-2.webp",
      "assets/products/love-letter-3.webp",
      "assets/products/love-letter-4.webp",
      "assets/products/love-letter-5.webp",
      "assets/products/love-letter-6.webp",
    ],
  },
  {
    id: "customised-notebook",
    title: "Customised Notebook",
    category: "Keepsakes",
    price: 799,
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print"],
    palette: ["#f7c6d9", "#1b1b1b", "#e0456e"],
    motif: "lines",
    short: "A spiral notebook with your names and cute characters that look like you on the cover.",
    description:
      "A notebook that's unmistakably yours. The cover is drawn just for you — your names, a little line of your choice, and cute characters that look like you (or the person you're gifting it to). Pick the inside pages that suit you: ruled for journaling, blank for sketching, dotted for bullet journals or planner pages to stay organised. Make one for your partner, your sibling, your grandparents — or just for you.",
    details: [
      "Custom cover with your names and characters that look like you",
      "Choose A4 (21 × 29.7 cm) or A5 (14.8 × 21 cm)",
      "Inside pages: ruled, blank, dotted or planner",
      "Spiral bound",
      "Gift-ready, delivered to your door",
      "Cover preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/notebook-1.webp",
      "assets/products/notebook-2.webp",
      "assets/products/notebook-3.webp",
      "assets/products/notebook-4.webp",
      "assets/products/notebook-5.webp",
      "assets/products/notebook-6.webp",
    ],
  },
  {
    id: "customised-journey-map",
    title: "Customised Journey Map",
    category: "Wall Art",
    price: 399,
    framingNote: "The print is delivered without a frame",
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print", "pdf"],
    palette: ["#bfe4f4", "#1b1b1b", "#e0456e"],
    motif: "orbit",
    short: "An illustrated map of your story — every place that made you, you.",
    description:
      "Where you met, the first coffee, the first date, the proposal, home — every place that matters, drawn as one illustrated map. Each place gets its own pin and a little note in your words, with cute characters that look like you and your names on top. Make one for your partner, your family or your best friends. You name the places, I draw the journey.",
    details: [
      "Frame not included — framing costs extra",
      "An illustrated map of your places, with a pin and note for each",
      "Your names and cute characters that look like you",
      "Choose A3 (29.7 × 42 cm), A4 (21 × 29.7 cm) or A5 (14.8 × 21 cm)",
      "Printed copy delivered, plus a PDF copy",
      "For couples, families and best friends",
      "Preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/journey-map-1.webp",
      "assets/products/journey-map-2.webp",
      "assets/products/journey-map-3.webp",
      "assets/products/journey-map-4.webp",
      "assets/products/journey-map-5.webp",
      "assets/products/journey-map-6.webp",
    ],
  },
  {
    id: "customised-calendar-magnet",
    title: "Customised Calendar Fridge Magnet",
    category: "Keepsakes",
    price: 599,
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print"],
    palette: ["#fde2ea", "#1b1b1b", "#e0456e"],
    motif: "grid",
    short: "A whole year on your fridge — with your names and cute characters that look like you.",
    description:
      "A 2027 calendar magnet that's all yours. Your names and a little line of your choice sit beside cute characters drawn to look like you, with all twelve months laid out in big, easy-to-read numbers, Sundays in pink and a cute doodle for every month. Your special dates — birthdays, anniversaries, date nights — are marked with little hearts. Make one for your partner, your family, your siblings or your grandparents, and see it every day.",
    details: [
      "Your names and cute characters that look like you",
      "All 12 months of 2027, with your special dates marked in hearts",
      "Horizontal (13.9 × 10.7 cm) or vertical (10.7 × 13.9 cm)",
      "About postcard-sized, 0.3 cm thick",
      "Gift-ready, delivered to your door",
      "Design preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/calendar-magnet-1.webp",
      "assets/products/calendar-magnet-2.webp",
      "assets/products/calendar-magnet-3.webp",
      "assets/products/calendar-magnet-4.webp",
      "assets/products/calendar-magnet-5.webp",
      "assets/products/calendar-magnet-6.webp",
      "assets/products/calendar-magnet-7.webp",
    ],
  },
  {
    id: "customised-52-reasons-box",
    title: "Customised 52 Reasons Box",
    category: "Letters & Cards",
    price: 399,
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print", "pdf"],
    palette: ["#fde2ea", "#1b1b1b", "#e0456e"],
    motif: "dots",
    short: "52 reasons why you love them — one little card each, in a keepsake box.",
    description:
      "Tell them all the reasons, one card at a time. The 52 Reasons Box is a deck of playing-card-sized cards, each with one of your own reasons and tiny drawings of you two that look just like you. \"Your smile fixes my worst days.\" \"Our 2 AM conversations.\" \"Simply because you're you.\" Every card is a little love note, tucked into a keepsake box that's delivered to your door — with a PDF copy of every card too.",
    details: [
      "Up to 52 reason cards — your own reasons, one per card",
      "Tiny drawings of you two, drawn to look like you",
      "Playing-card size: 63 × 88 mm, thick matte card stock with rounded corners",
      "Keepsake gift box (70 × 95 × 25 mm), delivered to your door",
      "Digital PDF copy of every card",
      "Preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/reasons-box-1.webp",
      "assets/products/reasons-box-2.webp",
      "assets/products/reasons-box-3.webp",
      "assets/products/reasons-box-4.webp",
      "assets/products/reasons-box-5.webp",
    ],
  },
  {
    id: "customised-night-sky",
    spotlight: true,   // shown in its own spotlight section on the home page
    title: "Customised Night Sky",
    category: "Wall Art",
    price: 349,
    framingNote: "The print is delivered without a frame",
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print", "pdf"],
    palette: ["#1e2549", "#f3eadb", "#e2b75a"],
    motif: "sparkle",
    short: "A star map of the night you met, with you two drawn in beneath it.",
    description:
      "The sky on your night, exactly as it was. Tell me your date and the city it happened in, and I'll map the stars as they shone that night — then draw the two of you in beneath it, with your names and a line you love. Perfect for anniversaries, proposals and birthdays, for your girlfriend, boyfriend, husband, wife — or new parents celebrating the night their little one arrived.",
    details: [
      "Frame not included — framing costs extra",
      "A star map of your special date and place",
      "You two drawn in, with your names and a line you love",
      "Printed and ready to frame, delivered to you",
      "Digital copy included",
      "Preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/night-sky-1.webp",
      "assets/products/night-sky-4.webp",
      "assets/products/night-sky-2.webp",
      "assets/products/night-sky-3.webp",
      "assets/products/night-sky-5.webp",
    ],
  },
  {
    id: "customised-scrapbook",
    title: "Customised Scrapbook",
    category: "Books",
    price: 899,
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print", "pdf"],
    palette: ["#f6c9d6", "#1b1b1b", "#e0456e"],
    motif: "grid",
    short: "All your firsts, in one book — a cute illustrated scrapbook of your photos and little notes.",
    description:
      "Your first date, your first trip, your first home and every first in between, gathered into one cute illustrated scrapbook. Send me your photos and the little things you want to remember, and I'll lay them out page by page with handwritten-style notes and cute doodles, with characters that look like you on the cover. Perfect for anniversaries, birthdays and just because — for your girlfriend, boyfriend, husband, wife, best friend or sister.",
    details: [
      "Up to 24 pages of your photos and notes",
      "Printed on A4 and folded into an A5 scrapbook — 14.8 × 21 cm",
      "Cute doodles on every page",
      "Characters that look like you on the cover",
      "Printed copy delivered, plus a PDF copy",
      "Preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/scrapbook-1.webp",
      "assets/products/scrapbook-2.webp",
      "assets/products/scrapbook-3.webp",
      "assets/products/scrapbook-4.webp",
      "assets/products/scrapbook-5.webp",
    ],
  },
  {
    id: "customised-stickers",
    title: "Customised Stickers",
    category: "Keepsakes",
    price: 249,
    // each size has its own price; the first one is selected by default
    sizes: [
      { label: "A5", dims: "14.8 × 21 cm sheet", price: 249 },
      { label: "A4", dims: "21 × 29.7 cm sheet", price: 299 },
    ],
    priceNote: "Including shipping within India",
    shippingNote: "International shipping costs extra",
    featured: true,
    badge: "New",
    formats: ["print"],
    palette: ["#e6f4ea", "#1b1b1b", "#e0456e"],
    motif: "dots",
    short: "A sheet of stickers made from your faces, your people and your inside jokes.",
    description:
      "Anything can be a sticker. Your faces drawn as cute characters, the whole family — even the grandparents — your inside jokes like \"chai date?\" and \"love you 3000\", plus little hearts, stars and doodles. Big ones, tiny ones or a mix: fill the sheet with as many as you like, then stick them on laptops, bottles, journals and phone cases.",
    details: [
      "Your faces, your people and your words, drawn as stickers",
      "Choose an A5 sheet (14.8 × 21 cm) or an A4 sheet (21 × 29.7 cm)",
      "Fill it with as many stickers as you like — big, tiny or a mix",
      "Cute doodles like hearts and stars included",
      "Great for laptops, bottles, journals and phone cases",
      "Design preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/stickers-1.webp",
      "assets/products/stickers-2.webp",
      "assets/products/stickers-3.webp",
      "assets/products/stickers-4.webp",
      "assets/products/stickers-5.webp",
      "assets/products/stickers-6.webp",
    ],
  },
];

/* ---------------------------------------------------------
   EXTRA REVIEWS (optional)
   Reviews customers post on the Reviews page are saved in Supabase
   and appear automatically. You can also add reviews you received
   elsewhere (e.g. on WhatsApp) here, newest first:

   {
     name: "Priya",                       // first name is fine
     city: "Kolkata",                     // optional
     product: "customised-lovebook",      // a product id from above
     rating: 5,                           // 1 to 5
     date: "2026-11-08",                  // YYYY-MM-DD
     text: "What the customer wrote…",
     photo: "",                           // optional, e.g. "assets/reviews/priya.jpg"
   },
   --------------------------------------------------------- */
const REVIEWS = [];
