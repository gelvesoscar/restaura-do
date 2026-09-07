/**
 * Primary call to action.
 * @startingPoint section="Core" subtitle="Pill buttons in the four Comounlulo variants" viewport="700x180"
 */
export interface ButtonProps {
  /** primary = naranja lulo, secondary = verde pulpa, outline = quiet, ghost = inline text action. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as another element, e.g. "a" for links. */
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
