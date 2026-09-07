export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  /** Action row, right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px. */
  width?: number;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element;
