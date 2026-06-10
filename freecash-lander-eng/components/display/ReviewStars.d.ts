import * as React from "react";

/**
 * Star rating row with optional review text. Supports fractional
 * ratings via a clipped final star.
 *
 * @startingPoint section="Display" subtitle="Star rating + review text" viewport="260x40"
 */
export interface ReviewStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–5, fractions allowed (4.6 → 60%-filled 5th star). @default 5 */
  rating?: number;
  /** Trailing muted text, e.g. "4.6 (1K Ratings)". */
  text?: React.ReactNode;
  className?: string;
}

export function ReviewStars(props: ReviewStarsProps): JSX.Element;
