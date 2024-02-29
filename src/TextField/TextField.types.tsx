import { ReactNode, RefObject } from "react";

export interface TextFieldProps {
    id: string;
    children: ReactNode | string;
    variant: "outlined" | "filled" | "standart";
    label: string;
    type: string;
    value: string;
    className: string;
    error: boolean;
    disabled: boolean;
    required: boolean;
    select: boolean;
    selectedVal: string;
    inputRef: RefObject<HTMLInputElement>;
    onBlur: () => void;
    onChange: () => void;
}
