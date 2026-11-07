# The Side Project — website

A multi-page static site: **Home**, **Shop**, **Product** (one page per product), **About**, and **Contact**.

## Things to change (all in `js/data.js`)

1. **Your WhatsApp number**: `whatsappNumber` (digits only with country code, e.g. `919876543210`) and `phoneDisplay`.
2. **Your Instagram**: `instagramHandle` (without the @).
3. **Email, plus founder name and photo**: `email`, `founder.name`, `founder.photo` (e.g. `assets/founder.jpg`).
4. **Products**: edit the `PRODUCTS` list for title, price, old price, description, details and category.
   - **Photos**: put images in `assets/products/` and list them, e.g.
     `images: ["assets/products/planner-1.jpg", "assets/products/planner-2.jpg"]`.
     The first image is the main photo, and every image appears in the product gallery.
     If `images` is empty, the site shows built-in illustrated previews.
   - **Delivery note**: `formats: ["print", "pdf"]` shows both options, `["pdf"]` shows PDF only, `[]` hides the note.
   - **Home page**: `featured: true` puts a product in the home-page carousel.

The Buy Now WhatsApp and Instagram links update automatically from your number and handle. On WhatsApp, the message arrives with the product, price and chosen format already filled in.

## Previewing

Open `index.html` in a browser, or run a local server from this folder:

```
python -m http.server 5517
```

## Publishing

Upload the whole folder to any static host, such as Netlify (drag and drop), GitHub Pages or Vercel.
