export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "leaf", "sparkles", "arrow-right"). */
  name: string;
  /** 16 / 20 / 24 / 32, or an explicit pixel number. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Any CSS color; defaults to currentColor so it inherits text color. */
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
