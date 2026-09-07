export interface TagProps {
  children?: React.ReactNode;
  /** Selected filter state — inverts to ink. */
  selected?: boolean;
  /** Shows an x affordance and calls back. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Optional leading lucide glyph. */
  icon?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
