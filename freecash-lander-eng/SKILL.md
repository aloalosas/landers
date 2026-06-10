---
name: freecash-design
description: Use this skill to generate well-branded interfaces and assets for Freecash conversion landers (the TikTok-traffic, mobile-first, dark/neon-green get-paid-to pages), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key entry points:
- `readme.md` — full brand guide: content fundamentals, visual foundations, iconography, guardrails.
- `styles.css` — link this one file to get every token + font.
- `tokens/` — colors, typography, spacing, fonts, keyframes.
- `components/` — React primitives (Button, Badge, OptionCard, Select, StatPill, ReviewStars, Timeline, BonusNotification, CountdownTimer).
- `ui_kits/freecash-lander/` — a complete interactive lander recreation to copy from.
- `guidelines/` — specimen cards.

Guardrails to always honor:
- Preserve any referral link and tracking/analytics (SubID, ttclid) exactly — never drop them in a redesign.
- Never fabricate proof: stats, ratings, testimonials, and payout numbers are placeholders to be replaced with real, honest values.
- Keep earnings claims realistic; keep pages lightweight (no heavy frameworks).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
