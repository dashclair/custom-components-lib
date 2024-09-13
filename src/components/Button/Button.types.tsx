import { ReactNode } from "react";

export interface ButtonProps {
    capitalized?: boolean;
    children?: ReactNode | string;
    className?: string;
    variant?: "text" | "contained" | "outlined";
    isDisabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}
