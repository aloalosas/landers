import * as React from "react";

/**
 * Vertical "earning journey" roadmap with done/locked steps.
 *
 * @startingPoint section="Display" subtitle="Earning-journey roadmap" viewport="340x260"
 */
export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase eyebrow above the steps. @default "Your Earning Journey" */
  label?: string;
  steps: TimelineStep[];
  className?: string;
}

export interface TimelineStep {
  title: React.ReactNode;
  detail: React.ReactNode;
  /** Done = green check marker; otherwise locked/numbered. */
  done?: boolean;
  /** Override the locked number. */
  index?: number;
}

export function Timeline(props: TimelineProps): JSX.Element;
