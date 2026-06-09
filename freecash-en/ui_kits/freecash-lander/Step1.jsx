/* Freecash Lander UI kit — Step 1: the age-gate hero.
   Composes Badge, BonusNotification, ReviewStars, StatPill, Select. */
const { Badge, BonusNotification, ReviewStars, StatPill, Select } =
  window.FreecashLanderDesignSystem_05d09e;

function Step1({ age, setAge, onContinue }) {
  const desc = {
    over21: "<strong>Instant Payouts:</strong> PayPal, CashApp, Venmo, Crypto & Wire",
    under21: "<strong>Limited Payouts:</strong> Wire Transfer Only",
  };
  return (
    <div className="fc-step">
      <div className="fc-header">
        <Badge variant="logo">Freecash App</Badge>
        <Badge variant="step">1 / 2</Badge>
      </div>

      <div className="fc-hero">
        <h1 className="fc-h1">Get Paid for <br/><span className="fc-hl">Everyday Stuff</span></h1>

        <BonusNotification icon="🎁" title="$5 Sign up Bonus" sub="Available for new users" />

        <div style={{ margin: "10px 0" }}>
          <ReviewStars rating={4.6} text="4.6 (1K Ratings)" />
        </div>

        <p className="fc-sub">
          <b>Watch Netflix. Scroll TikTok. Take a walk.</b><br/>
          Earn cash just by engaging with our daily offers, that you can do any time!
        </p>
      </div>

      <div className="fc-stats">
        <StatPill icon="users" value="500K+" label="Active Users" />
        <StatPill icon="cash" value="100+" label="Offers" />
      </div>

      <div className="fc-instruction">Please Select Your Age Below</div>

      <div className="fc-interaction">
        <div className="fc-eyebrow">Required: Select Your Age Range</div>
        <Select
          value={age}
          onChange={(e) => { const v = e.target.value; setAge(v); if (v) onContinue(v); }}
          placeholder="Choose your age…"
          options={[
            { value: "over21", label: "I'm over 21" },
            { value: "under21", label: "I'm under 21" },
          ]}
        />
        {age && (
          <div className="fc-age-desc" dangerouslySetInnerHTML={{ __html: desc[age] }} />
        )}
      </div>
    </div>
  );
}

window.Step1 = Step1;

