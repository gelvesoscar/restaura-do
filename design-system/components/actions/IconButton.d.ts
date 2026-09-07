export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Required accessible label — also used as the tooltip. */
  label: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
