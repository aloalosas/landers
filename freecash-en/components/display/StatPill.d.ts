import * as React from "react";

/**
 * Glassy social-proof stat pill — brand-green icon + value + label.
 *
 * @startingPoint section="Display" subtitle="Glassy icon + value stat pill" viewport="220x70"
 */
export interface StatPillProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Built-in glyph. @default "users" */
  icon?: "users" | "cash" | "bolt" | "check";
  /** Big value, e.g. "500K+". */
  value: React.ReactNode;
  /** Uppercase caption, e.g. "Active Users". */
  label: React.ReactNode;
  className?: string;
}

export function StatPill(props: StatPillProps): JSX.Element;
