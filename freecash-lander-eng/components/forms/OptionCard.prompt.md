Tappable option card with a radio dot — used for multiple-choice steps.

```jsx
<OptionCard title="I'm over 21" desc="Instant payouts: PayPal, CashApp, Crypto" selected={age==='over21'} onSelect={() => setAge('over21')} />
```

Lights the border + radio green when `selected`; scales up on hover.
