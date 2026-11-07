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
    price: 999,
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
    price: 699,
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
];
