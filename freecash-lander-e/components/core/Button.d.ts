import * as React from "react";

/**
 * Freecash primary call-to-action button.
 *
 * The signature pulsing-green conversion CTA from the landers, with
 * `gold` (viral) and `apple` (Apple-Pay) theme variants. Renders an
 * anchor when `href` is provided, otherwise a button.
 *
 * @startingPoint section="Core" subtitle="Pulsing green conversion CTA" viewport="480x120"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label. */
  children: React.ReactNode;
  /** Visual theme. @default "primary" */
  variant?: "primary" | "gold" | "apple";
  /** Padding/scale. @default "lg" */
  size?: "lg" | "md" | "sm";
  /** Show the trailing arrow glyph. @default false */
  arrow?: boolean;
  /** If set, renders an <a> with this destination (keep referral links intact). */
  href?: string;
  /** Disabled state (also used for the "REDIRECTING…" hold state). */
  disabled?: boolean;
  className?: string;
}

export function Button(props: ButtonProps): JSX.Element;
