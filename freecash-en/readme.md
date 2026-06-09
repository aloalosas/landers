# Freecash Lander Design System

A design system for building **Freecash conversion landers** — the kind
of fast, mobile-first pages that 18–25-year-olds hit after tapping a
TikTok ad. The whole system is engineered around one job: make the page
feel like a natural continuation of the video and get the tap through to
the referral link.

> **Product context.** Freecash is a get-paid-to platform — users earn
> real cash by completing surveys, installing apps, and doing offers.
> These landers are the bridge between a TikTok creative and the Freecash
> (or affiliate offer) sign-up. They are short, punchy, single-column,
> and dark, with one loud green call-to-action.

## Source material

This system was reverse-engineered from a real lander repo. Explore it
to build even more accurately:

- **GitHub:** [`aloalosas/landers`](https://github.com/aloalosas/landers)
  — the `freecash/` directory (`index.html`, `css/`) is the canonical
  source of the tokens, components and copy captured here. Other
  directories (`freecashapp/`, `applepay/`, `Playful/`) are sibling
  lander variants worth a look.

What we lifted verbatim: the `:root` color block, the Inter / Montserrat
/ Poppins font loading, the slanted green highlight, the pulsing CTA,
the glowing age-select, the stat pills, the bonus hook, the star strip,
and the earning-journey timeline.

What we deliberately **left out**: the TikTok pixel, the obfuscated
anti-debug scripts, and the hard-coded affiliate redirect URLs. Those
belong in your deploy, not in a design kit. See *Guardrails* below.

---

## Content fundamentals

The voice is **energetic, plain-spoken, and benefit-first** — written
for a thumb-scrolling 18–25-year-old who wants money with minimum
friction. It should read like the caption of the TikTok they just
watched, not like a bank.

- **Second person, imperative.** Talk to *you* and tell you what you get:
  *"Get Paid for Everyday Stuff."* *"Download & Start Earning."* No "we
  believe" corporate framing.
- **Concrete, everyday verbs over abstractions.** The hero proof is a
  list of things the reader already does: *"Watch Netflix. Scroll
  TikTok. Take a walk."* Short staccato sentences, period-separated.
- **Money is the headline.** Dollar figures are large and unmissable
  (`$5`, `$750`). Lead with the reward, explain the mechanic second.
- **Title Case for headlines & CTAs**, sentence case for body copy.
  CTAs are often **ALL CAPS** (`DOWNLOAD & START EARNING`) and the
  "redirecting" hold state is literally `REDIRECTING…`.
- **Micro-urgency & reassurance, not hype.** "Available for new users",
  "Takes less than 60 seconds", "Instant credit to your balance". Speed
  and ease are the recurring promises.
- **Emoji: sparingly, as punctuation.** A single 🎁 on the bonus hook, a
  ⚡ on a scarcity pill. Never a wall of emoji. The brand carries energy
  through color and motion, not emoji.
- **Honesty is a feature.** Keep earnings claims realistic. Don't invent
  testimonials, payout totals, or star counts — every number in this kit
  is a placeholder to be swapped for a real one.

Representative copy (from the source):
> *Get Paid for **Everyday Stuff*** · *$5 Sign up Bonus — Available for
> new users* · *4.6 (1K Ratings)* · *You're **In!*** · *Your device is
> confirmed compatible.* · *Claim Your $750 Reward*

---

## Visual foundations

**Overall vibe.** Near-black, high-contrast, neon-green "app store meets
crypto" energy. Everything glows a little. It reads as a slick mobile
app preview, not a web page.

- **Color.** Page is `#0a0a0a` with layered near-black surfaces
  (`#141414` → `#1a1a1a` → `#222`). One brand color does all the work:
  **neon green `#00D369`** (hover/glow `#33FF90`). Variant accents are
  scoped to specific lander themes — **gold `#CFAA56`** (viral/scarcity),
  **Apple blue `#0071E3`** (Apple-Pay reward), **red `#FF3B3B`**
  (urgency). Text is white → `#888` → `#666` → `#555`. See `tokens/colors.css`.
- **Type.** **Inter** for everything UI/body (300–800). **Montserrat**
  (700–900) for heavy viral/display headlines. **Poppins** is loaded as
  an alternate display. Mono stack for timers and the dev tag. Hero
  headlines are 40px/800 with `-1px` tracking; the big-money number hits
  72px/800 at `-2px`. See `tokens/typography.css`.
- **The signature highlight.** Key headline words sit in a **green box,
  rotated ≈ −2° to −3°**, black text on green (`.fc-hl` / `.fc-in-block`).
  This is the most recognizable brand move — use it on one phrase per
  screen, never more.
- **Backgrounds.** Flat dark base + a **dark top-down gradient** + a very
  subtle **green cross-weave SVG pattern at 5% opacity** (`--bg-page-image`).
  No photography, no large illustrations, no busy gradients.
- **Cards & surfaces.** `linear-gradient(145deg,#1a1a1a,#141414)`, a
  `1px #333` border, and **20px** radius for the big interactive cards;
  smaller callouts use 8–12px. Glassy pills use `rgba(255,255,255,.03)`
  + `1px rgba(255,255,255,.08)` + `backdrop-filter: blur(5px)`.
- **Corner radii.** 4px chips → 6px highlight → 8px callouts → 12px
  buttons/pills → 20px option cards & selects → full-round radios,
  markers and avatars. See `tokens/spacing.css`.
- **Shadows = green glow, not soft drop.** The system leans on **neon
  glow** (`0 0 20px rgba(0,211,105,.4)`, doubling up to a 60px outer
  halo) far more than conventional drop shadows. Plain dark cards get a
  modest `0 4px 12px rgba(0,0,0,.3)`. The gold CTA uses a *hard* bottom
  shadow (`0 4px 0 #8a6d2b`) for a tactile, pressable look.
- **Borders.** Hairline `#333` default, `#444` for muted/locked, a full
  **2px green** border on the primary gate-select and success icon.
  Left-accent bars (4px green) mark the bonus hook and age description.
- **Motion is constant and attention-seeking** (this is a paid-traffic
  lander). `ease`/`ease-out`, ~0.2–0.5s. The vocabulary:
  - **CTA pulse** — an expanding green box-shadow ring every 2s.
  - **Sheen sweep** — a white diagonal glint crossing the button every 3s.
  - **Select pulse** — the age-select breathes its glow on a 3s loop;
    stops on focus.
  - **Bounce** — the "Select your age" instruction nudges vertically.
  - **fadeIn** — steps enter with a 10px rise.
  - Gold CTA does a gentle `scale(1.02)` pulse.
- **Hover / press.** Cards scale to `1.02` and swap border to green on
  hover; buttons translate down 1px on `:active`. Apple/blue buttons
  darken on hover (`#0051A2`).
- **Transparency & blur** are reserved for the glassy stat pills and the
  green/white tint fills (`rgba(0,211,105,.05–.20)`). Used to suggest
  depth without lightening the dark canvas.
- **Layout.** Single **480px max** centered column, `20px 15px` page
  padding, 15–20px vertical rhythm. Mobile-first; the only breakpoint is
  `max-width:400px` (shrinks the hero). Everything stacks — no multi-column.

---

## Iconography

- **Material-style filled SVG glyphs**, drawn on a **24×24** viewBox with
  `fill: currentColor` (so they inherit green or white). This is the
  house style — solid, rounded, single-color. The recurring set: **star**
  (ratings), **check** (success/done), **arrow** (CTA trailing →),
  **people** (active users), **cash** (offers/payouts), **chevron**
  (select arrow). These ship inline inside the components — see
  `StatPill.jsx` (people/cash/bolt/check) and `ReviewStars.jsx` (star),
  and the `guidelines/brand-icons.card.html` specimen.
- **No icon font, no sprite, no CDN icon library** in the source — icons
  are hand-inlined SVG paths. If you need a glyph that isn't here, match
  the Material *filled* style (e.g. Material Symbols / Material Icons
  filled) so stroke weight and fill read consistently.
- **Emoji** appear only as occasional accents (🎁 bonus, ⚡ scarcity) —
  never as a primary icon system.
- **Unicode glyphs** stand in for a couple of micro-marks: the `→` arrow
  prefix on section eyebrows and the `✓` inside completed timeline
  markers.

### Logo

⚠ **There is no graphical Freecash logo in the source.** The lander uses
a **text wordmark** — uppercase "Freecash App" in green with a small
**pulsing green status dot** before it (`.fc-badge--logo`, see
`Badge`). This kit reproduces that treatment. If you have an official
Freecash logo SVG/PNG, drop it into `assets/` and tell me — I'll wire it
into the header in place of the wordmark.

> The image in `assets/tiktok-avatar.jpg` is a generic **TikTok** glyph
> used as a creator avatar in the viral variant — it is *not* the
> Freecash brand mark.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import manifest only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for downloading & reuse.

**`tokens/`** (all `@import`ed by `styles.css`)
- `fonts.css` — `@font-face` for Inter, Montserrat, Poppins (Google CDN).
- `colors.css` — surfaces, brand green, accents, semantic aliases, bg image.
- `typography.css` — families, weights, type scale, line-height, tracking.
- `spacing.css` — spacing scale, radii, shadows/glows, motion tokens.
- `base.css` — shared keyframes (`fc-pulse`, `fc-shine`, `fc-bounce`, …)
  and the opt-in `.fc-page` base.

**`components/`** (React primitives — `window.FreecashLanderDesignSystem_05d09e`)
- `core/` — **Button** (green / gold / apple CTA), **Badge** (logo / step / tint / alert).
- `forms/` — **OptionCard** (selectable card), **Select** (glowing age gate).
- `display/` — **StatPill**, **ReviewStars**, **Timeline** (earning journey).
- `feedback/` — **BonusNotification** (hook callout), **CountdownTimer** (gold scarcity).

**`ui_kits/freecash-lander/`** — full interactive lander recreation
(age gate → offer). See its own `README.md`.

**`guidelines/`** — Design-System-tab specimen cards (Colors, Type,
Spacing, Brand).

**`assets/`** — `tiktok-avatar.jpg`, `backblue.gif`, `fade.gif`.

---

## Guardrails (read before shipping)

- **Preserve the referral link & tracking exactly.** This kit ships a
  clearly-marked placeholder (`REFERRAL_LINK` in `ui_kits/.../Step2.jsx`).
  Replace it with your real tracked URL and keep every SubID / `ttclid`
  param. Don't let a redesign silently drop tracking.
- **No fabricated proof.** Stats, ratings, payout totals and dollar
  figures here are placeholders. Swap for real, honest numbers.
- **Keep earnings claims realistic.** No "get rich" framing.
- **Stay lightweight.** No heavy frameworks or big libraries — the
  components are dependency-free React + CSS variables. Keep it fast.
