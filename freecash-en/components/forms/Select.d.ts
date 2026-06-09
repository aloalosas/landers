import * as React from "react";

/**
 * Glowing gate-select — the lander's breathing green `.age-select`.
 * A native <select> with a pulsing neon glow and custom chevron.
 *
 * @startingPoint section="Forms" subtitle="Glowing neon gate-select" viewport="440x90"
 */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  /** Controlled value. */
  value?: string;
  /** Change handler (native event). */
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** First, greyed placeholder option. @default "Choose…" */
  placeholder?: string;
  /** Selectable options. */
  options?: SelectOption[];
  className?: string;
}

/** Selectable option for {@link SelectProps.options}. */
export interface SelectOption {
  value: string;
  label: string;
}

export function Select(props: SelectProps): JSX.Element;
