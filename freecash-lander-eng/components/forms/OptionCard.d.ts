import * as React from "react";

/**
 * Tappable selection card — the lander's `.option-card`. Title +
 * optional description on the left, radio dot on the right. Scales on
 * hover; border + radio turn green when `selected`.
 *
 * @startingPoint section="Forms" subtitle="Selectable option card with radio" viewport="440x100"
 */
export interface OptionCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  /** Bold option title. */
  title: React.ReactNode;
  /** Muted supporting line. */
  desc?: React.ReactNode;
  /** Selected (green) state. @default false */
  selected?: boolean;
  /** Click handler. */
  onSelect?: () => void;
  className?: string;
}

export function OptionCard(props: OptionCardProps): JSX.Element;
