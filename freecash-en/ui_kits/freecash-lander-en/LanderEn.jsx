/* Freecash — English independent REFERRAL lander.
   A standalone page (separate from the German freecash-lander). Composes
   the design-system components and uses ONLY real, user-supplied proof.

   ⚠ PLACEHOLDER referral link — swap for your real tracked referral URL
   and keep all SubID / ttclid tracking params intact. */
const REFERRAL_LINK = "https://taprkr.com/r/eyJ0IjoiZnJlZWNhc2gtY3BpIiwidGlkIjoiYzhkMmUwY2YzODM0NDg2Mzc2NDgiLCJ0cyI6MTc4MDk5MzUxNDQ4M30";

const { Button, StatPill } = window.FreecashLanderDesignSystem_05d09e;

const STAR_PATH = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function TrustpilotBadge() {
  return (
    <div className="tp">
      <div className="tp__stars">
        {[0,1,2,3,4].map((i) => (
          <span className="tp__star" key={i}>
            <svg viewBox="0 0 24 24"><path d={STAR_PATH} /></svg>
          </span>
        ))}
      </div>
      <div className="tp__txt">
        <b>Trustpilot 4.7</b> <span>· 276,000+ reviews</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="en-hero">
      <TrustpilotBadge />
      <h1 className="en-h1">Earn real cash in your <span className="en-hl">spare time</span></h1>
      <p className="en-sub">
        <b>Saw it on TikTok? It's real.</b> Freecash pays you to complete surveys,
        try new apps, and play games then cash out the same day, right from your phone.
      </p>
      <Button href={REFERRAL_LINK} arrow>Start earning on Freecash</Button>
      <p className="en-cta-note">
        A simple way to earn extra cash in your spare time.
      </p>
    </div>
  );
}

function Proof() {
  return (
    <div>
      <p className="en-eyebrow">Trusted by millions</p>
      <div className="fc-stats" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <StatPill icon="cash" value="$300M+" label="Paid Out" />
        <StatPill icon="users" value="70M+" label="Members" />
        <StatPill icon="bolt" value="#3" label="2025 FT1000" />
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Create your free account", d: "Sign up in under a minute; no purchase, no catch." },
    { t: "Complete offers, surveys & games", d: "Pick whatever you like and earn as you go, whenever you've got a few minutes." },
    { t: "Cash out your earnings", d: "Withdraw via PayPal, crypto, or a gift card once you hit the minimum." },
  ];
  return (
    <div>
      <p className="en-eyebrow">How it works</p>
      <div className="hiw">
        {steps.map((s, i) => (
          <div className="hiw__row" key={i}>
            <div className="hiw__num">{i + 1}</div>
            <div>
              <div className="hiw__t">{s.t}</div>
              <p className="hiw__d">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Payouts() {
  const methods = ["PayPal", "Crypto", "Gift cards"];
  return (
    <div>
      <p className="en-eyebrow">Get paid your way</p>
      <div className="pay">
        {methods.map((m) => (
          <div className="pay__chip" key={m}><span className="pay__dot"></span>{m}</div>
        ))}
      </div>
    </div>
  );
}

function Faq() {
  const items = [
    {
      q: "Is Freecash legit?",
      a: (<>Yes. Freecash has paid out <b>$300M+</b> to <b>70M+</b> members, holds a
        <b> 4.7/5 Trustpilot rating</b> from 276,000+ reviews, and ranked <b>#3 on the
        Financial Times' 2025 FT1000</b> list of Europe's fastest-growing companies.</>),
    },
    {
      q: "How much can I earn?",
      a: (<>It varies. Freecash is a way to <b>earn extra cash in your spare time</b>, not a
        salary or guaranteed income, what you make depends on the offers you choose to complete.</>),
    },
    {
      q: "How do I get paid?",
      a: (<>Cash out via <b>PayPal, crypto, or gift cards</b> once you reach the minimum withdrawal amount.</>),
    },
    {
      q: "Is it free to join?",
      a: (<>Yes, creating an account and completing offers is completely free.</>),
    },
  ];
  return (
    <div>
      <p className="en-eyebrow">Is Freecash legit?</p>
      <div className="faq">
        {items.map((it, i) => (
          <details className="faq__item" key={i} open={i === 0}>
            <summary className="faq__q">{it.q}<span className="faq__plus">+</span></summary>
            <p className="faq__a">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function LanderEn() {
  return (
    <div className="en">
      <div className="en-top">
        <span className="en-logo">Free<b>cash</b></span>
        
      </div>

      <Hero />
      <Proof />
      <HowItWorks />
      <Payouts />

      <Button href={REFERRAL_LINK} arrow>Start earning on Freecash</Button>

      <Faq />

      <p className="en-foot">
        This is an independent promotional / referral page and is not operated by or
        affiliated with Freecash. We may earn a commission when you sign up through our
        link. Freecash is free to join; earnings vary and are not guaranteed.
      </p>
    </div>
  );
}

window.LanderEn = LanderEn;
