export interface SelectProps {
  label?: string;
  hint?: string;
  /** Strings, or { value, label } pairs. */
  options?: Array<string | { value: string; label: string }>;
  size?: 'sm' | 'md';
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
