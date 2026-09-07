export interface BadgeProps {
  tone?: 'brand' | 'pulpa' | 'neutral' | 'good' | 'warn' | 'stop' | 'solid';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
