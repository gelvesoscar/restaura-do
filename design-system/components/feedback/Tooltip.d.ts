export interface TooltipProps {
  /** Short plain-language hint — one line, no punctuation at the end. */
  label: string;
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
