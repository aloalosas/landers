The lander's glowing gate-select — the primary interaction that opens the offer.

```jsx
<Select value={age} onChange={(e) => setAge(e.target.value)}
  placeholder="Choose your age…"
  options={[{value:'over21',label:"I'm over 21"},{value:'under21',label:"I'm under 21"}]} />
```

A native `<select>` so it's accessible and mobile-friendly; the breathing neon glow draws the eye. Pause the animation by focusing it.
