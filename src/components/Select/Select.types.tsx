import { ChangeEvent, ReactNode } from "react";

export interface SelectProps {
    defaultValue?: string;
    children?: ReactNode;
    label?: string;
    selectError?:boolean;
    options:string [];
    onChange?:(event: ChangeEvent<HTMLInputElement> | string)=>void;
}