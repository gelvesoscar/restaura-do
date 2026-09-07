export interface SwitchProps {
  label?: string;
  /** Controlled state. */
  on?: boolean;
  defaultOn?: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
