export interface RadioProps {
  label?: React.ReactNode;
  description?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
