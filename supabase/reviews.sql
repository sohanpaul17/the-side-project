-- The Side Project: customer reviews table
-- Paste this whole file into Supabase → SQL Editor → New query, then click Run.

create table if not exists public.reviews (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(btrim(name)) between 1 and 40),
  city        text check (city is null or char_length(city) <= 40),
  product     text not null check (char_length(product) between 1 and 60),
  rating      smallint not null check (rating between 1 and 5),
  body        text not null check (char_length(btrim(body)) between 10 and 800),
  -- true = shows on the website straight away.
  -- To approve reviews before they appear, run:
  --   alter table public.reviews alter column approved set default false;
  -- then tick "approved" on each review in Table Editor to publish it.
  approved    boolean not null default true
);

alter table public.reviews enable row level security;

-- Visitors may only read published reviews and add new ones.
-- They can never edit or delete anything, or mark their own review approved.
revoke all on public.reviews from anon, authenticated;
grant select on public.reviews to anon, authenticated;
grant insert (name, city, product, rating, body) on public.reviews to anon, authenticated;

drop policy if exists "Anyone can read published reviews" on public.reviews;
create policy "Anyone can read published reviews"
  on public.reviews for select
  to anon, authenticated
  using (approved = true);

drop policy if exists "Anyone can add a review" on public.reviews;
create policy "Anyone can add a review"
  on public.reviews for insert
  to anon, authenticated
  with check (true);

create index if not exists reviews_created_at_idx on public.reviews (created_at desc);
