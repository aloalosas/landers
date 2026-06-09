/* Freecash Lander UI kit — top-level state machine.
   Step 1 (age gate) → Step 2 (standard or Apple-Pay variant). */
function LanderApp() {
  const [step, setStep] = React.useState(1);
  const [age, setAge] = React.useState("");

  function handleContinue(selected) {
    // small delay so the select's value registers visually
    setTimeout(() => { setStep(2); window.scrollTo(0, 0); }, 150);
  }
  function restart() { setStep(1); setAge(""); window.scrollTo(0, 0); }

  return (
    <div className="fc-container" key={step}>
      {step === 1 && <window.Step1 age={age} setAge={setAge} onContinue={handleContinue} />}
      {step === 2 && age === "over21" && <window.Step2Standard onRestart={restart} />}
      {step === 2 && age === "under21" && <window.Step2Apple onRestart={restart} />}
    </div>
  );
}

window.LanderApp = LanderApp;

