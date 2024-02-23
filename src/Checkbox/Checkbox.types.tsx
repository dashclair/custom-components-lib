export interface CheckboxTypes {
    label?: string;
    disabled?: boolean;
    value?: boolean;
    onChange: () => void;
    size?: "small" | "medium" | "large";
}
