import * as React from "react";

/**
 * Gold scarcity countdown from the viral lander. Live-counts from
 * `seconds` to zero in mm:ss. Cosmetic urgency only.
 *
 * @startingPoint section="Feedback" subtitle="Gold mm:ss scarcity countdown" viewport="280x90"
 */
export interface CountdownTimerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Starting seconds. @default 300 */
  seconds?: number;
  /** Uppercase gold label. @default "Offer Reserved For" */
  label?: string;
  className?: string;
}

export function CountdownTimer(props: CountdownTimerProps): JSX.Element;
