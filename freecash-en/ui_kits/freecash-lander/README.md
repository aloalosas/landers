# Freecash Lander — UI kit

A high-fidelity, interactive recreation of the TikTok-traffic Freecash
landing page: a two-step **age gate → offer** flow, mobile-first (480px
column), dark theme with the neon-green brand glow.

## Run it
Open `index.html`. Pick an age in the glowing gate-select:
- **I'm over 21** → standard green *"You're In!"* confirmation with the
  referral CTA and the 3-step earning roadmap.
- **I'm under 21** → the **$750 Apple Pay** reward variant (blue CTA).

Use *← Start over* to return to the gate.

## Files
| File | Role |
|---|---|
| `index.html`   | Shell, lander layout CSS, script loader |
| `LanderApp.jsx`| Top-level state machine (step + age) |
| `Step1.jsx`    | Age-gate hero — headline, bonus hook, social proof, gate-select |
| `Step2.jsx`    | `Step2Standard` (referral) + `Step2Apple` ($750) confirmation screens |

## Composition
Built entirely from the design-system components:
`Badge`, `BonusNotification`, `ReviewStars`, `StatPill`, `Select`,
`Button`, `Timeline`. Only the page-level layout (hero headline, success
header, age-description) is local CSS.

## ⚠ Placeholders & guardrails
- **`REFERRAL_LINK`** in `Step2.jsx` is a clearly-marked placeholder
  (`https://your-referral-link.example/?s1=SUBID&s2=SUBID`). Swap it for
  your real tracked referral URL and keep all SubID / `ttclid` params.
- **No tracking pixels are included.** The production lander wires a
  TikTok pixel + SubID/OS-redirect logic; that lives in your deploy, not
  in this design kit.
- Stats (`500K+`, `4.6`, `100+`) and the `$5` / `$750` figures are
  **placeholders** — replace with real, honest numbers before shipping.
