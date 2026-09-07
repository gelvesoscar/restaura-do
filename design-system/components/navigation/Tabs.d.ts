/**
 * Section switcher.
 * @startingPoint section="Core" subtitle="Underline and pill tab bars" viewport="700x150"
 */
export interface TabsProps {
  items?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** underline = page sections; pill = compact in-card switching. */
  variant?: 'underline' | 'pill';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
