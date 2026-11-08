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
const PRODUCTS = [
  {
    id: "customised-lovebook",
    title: "Customised Lovebook",
    category: "Custom",
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
    category: "Custom",
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
      "assets/products/mini-lovebook-1.jpg",
      "assets/products/mini-lovebook-2.jpg",
      "assets/products/mini-lovebook-3.jpg",
      "assets/products/mini-lovebook-4.jpg",
      "assets/products/mini-lovebook-5.webp",
    ],
  },
  {
    id: "customised-love-letter",
    title: "Customised Love Letter",
    category: "Custom",
    price: 399,
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
    category: "Custom",
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
    category: "Custom",
    price: 399,
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
      "An illustrated map of your places, with a pin and note for each",
      "Your names and cute characters that look like you",
      "Choose A3 (29.7 × 42 cm), A4 (21 × 29.7 cm) or A5 (14.8 × 21 cm)",
      "Printed copy delivered, plus a PDF copy",
      "For couples, families and best friends",
      "Preview shared with you before it's printed",
      "Price includes shipping within India — international shipping costs extra",
    ],
    images: [
      "assets/products/map-story-1.webp",
      "assets/products/map-story-2.webp",
      "assets/products/map-story-3.webp",
      "assets/products/map-story-6.webp",
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
