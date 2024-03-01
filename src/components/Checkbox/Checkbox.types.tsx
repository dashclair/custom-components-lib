export interface CheckboxProps {
    label?: string;
    disabled?: boolean;
    value?: boolean;
    onChange: () => void;
    size?: "small" | "medium" | "large";
}
