import{ ReactNode } from 'react';

export interface ButtonProps {
    select?: boolean;
    children?:ReactNode | string;
    className?:string;
    variant?: 'text' | 'contained' | 'outlined';
    isDisabled?:boolean;
    size?:'small' | 'medium' | 'large';
    onClick?:()=>void;
}