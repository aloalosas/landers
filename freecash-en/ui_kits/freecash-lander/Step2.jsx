/* Freecash Lander UI kit — Step 2: the confirmation / offer screens.
   `over21` → standard green "You're In!" with referral CTA.
   `under21` → Apple-Pay reward variant with blue CTA. */
const { Badge, Button, Timeline } = window.FreecashLanderDesignSystem_05d09e;

/* ⚠ PLACEHOLDER referral link — swap for your real tracked referral URL.
   Keep all SubID / ttclid params intact when wiring production. */
const REFERRAL_LINK = "https://your-referral-link.example/?s1=SUBID&s2=SUBID";

const CHECK = (
  <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: "var(--fc-green)" }}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

function Step2Standard({ onRestart }) {
  return (
    <div className="fc-step">
      <div className="fc-header">
        <Badge variant="logo" white>Step Complete</Badge>
        <Badge variant="step">2 / 2</Badge>
      </div>

      <div className="fc-hero">
        <div className="fc-headline-row">
          <span className="fc-success-icon">{CHECK}</span>
          <h1 className="fc-youre-in">You're <span className="fc-in-block">In!</span></h1>
        </div>
        <p className="fc-sub">Your device is confirmed compatible. We have reserved a sign up bonus for you.</p>
      </div>

      <Button href={REFERRAL_LINK} arrow>Download &amp; Start Earning</Button>

      <Timeline steps={[
        { title: "Device Verified", detail: "iPhone/Android Ready", done: true },
        { title: "Install & Register", detail: "Takes less than 60 seconds" },
        { title: "Claim $5 Bonus", detail: "Instant credit to your balance" },
      ]} />

      <button className="fc-restart" onClick={onRestart}>← Start over</button>
    </div>
  );
}

function Step2Apple({ onRestart }) {
  return (
    <div className="fc-step">
      <div className="fc-header">
        <Badge variant="logo" white>Step Complete</Badge>
        <Badge variant="step">2 / 2</Badge>
      </div>

      <div className="fc-hero" style={{ textAlign: "center" }}>
        <h1 className="fc-h1" style={{ textAlign: "center" }}>Get $750 Towards <br/><span className="fc-hl">Apple Pay</span></h1>
        <p className="fc-sub" style={{ textAlign: "center" }}>Your device is confirmed compatible. We have reserved your $750 Apple Pay reward for you.</p>
      </div>

      <Button variant="apple" href={REFERRAL_LINK} arrow>Claim Your $750 Reward</Button>

      <Timeline steps={[
        { title: "Device Verified", detail: "iPhone/Android Ready", done: true },
        { title: "Complete Registration", detail: "Takes less than 60 seconds" },
        { title: "Claim $750 Apple Pay Reward", detail: "Instant credit to your balance" },
      ]} />

      <button className="fc-restart" onClick={onRestart}>← Start over</button>
    </div>
  );
}

window.Step2Standard = Step2Standard;
window.Step2Apple = Step2Apple;
