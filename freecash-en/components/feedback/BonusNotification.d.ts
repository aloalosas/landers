import * as React from "react";

/**
 * Hook callout — dark gradient strip with green left bar, icon, bold
 * title and uppercase green sub-label.
 *
 * @startingPoint section="Feedback" subtitle="Green-accent bonus hook callout" viewport="440x70"
 */
export interface BonusNotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading emoji or short glyph. @default "🎁" */
  icon?: React.ReactNode;
  /** Bold white title, e.g. "$5 Sign up Bonus". */
  title: React.ReactNode;
  /** Uppercase green sub-line. */
  sub?: React.ReactNode;
  className?: string;
}

export function BonusNotification(props: BonusNotificationProps): JSX.Element;
