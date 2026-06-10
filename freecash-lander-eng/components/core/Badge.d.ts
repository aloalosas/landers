import * as React from "react";

/**
 * Small inline labels used across the landers.
 *
 * `logo` is the Freecash wordmark with a glowing status dot; `step`
 * is the muted "1 / 2" pill; `tint` is a green chip; `alert` is the
 * gold viral scarcity pill.
 *
 * @startingPoint section="Core" subtitle="Logo wordmark, step pill, tint & alert chips" viewport="480x80"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Badge style. @default "logo" */
  variant?: "logo" | "step" | "tint" | "alert";
  /** For `logo`: render in white instead of brand green. @default false */
  white?: boolean;
  className?: string;
}

export function Badge(props: BadgeProps): JSX.Element;
