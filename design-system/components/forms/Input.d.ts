export interface InputProps {
  label?: string;
  /** Helper line under the field. */
  hint?: string;
  /** Error message — replaces hint and turns the field red. */
  error?: string;
  type?: string;
  size?: 'sm' | 'md';
  placeholder?: string;
  /** Leading node, usually an <Icon />. */
  prefix?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
