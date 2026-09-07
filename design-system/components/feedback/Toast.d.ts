export interface ToastProps {
  tone?: 'good' | 'info' | 'warn' | 'stop';
  title?: string;
  message?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
