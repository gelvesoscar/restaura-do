/**
 * Content container on warm cream surfaces.
 * @startingPoint section="Core" subtitle="Card tones: plain, naranja tint, verde pulpa, inverse" viewport="700x260"
 */
export interface CardProps {
  tone?: 'plain' | 'tint' | 'pulpa' | 'inverse';
  elevation?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  /** CSS padding value; defaults to --space-6. */
  padding?: string;
  /** Adds lift + pointer on hover. */
  interactive?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
