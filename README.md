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

## Reviews

Customers post reviews on the **Reviews** page (`reviews.html`). Each review is saved to a free **Supabase** database and appears on the Reviews page and on that product's page straight away.

- **One-time setup:** in Supabase, open **SQL Editor → New query**, paste the contents of `supabase/reviews.sql`, and click **Run**.
- **Delete or edit a review:** go to Supabase → **Table Editor → reviews**.
- **Approve reviews before they appear:** run `alter table public.reviews alter column approved set default false;` in the SQL Editor. New reviews then stay hidden until you tick **approved**.
- **Supabase key:** the connection settings are `reviewsDb` in `js/data.js`. Only the *publishable* key belongs there; never the secret key.
- **Reviews from elsewhere:** you can add reviews you received another way (WhatsApp, for example) to the `REVIEWS` list at the bottom of `js/data.js`.

## Previewing

Open `index.html` in a browser, or run a local server from this folder:

```
python -m http.server 5517
```

## Publishing

Upload the whole folder to any static host, such as Netlify (drag and drop), GitHub Pages or Vercel.
