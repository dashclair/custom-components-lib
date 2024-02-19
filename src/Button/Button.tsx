import React, { FC, ReactNode } from 'react';
import buttonStyles from './buttonStyles.module.css';
import container from './container.module.css';


export interface ButtonProps {
    children?:ReactNode | string;
    className?:string;
    variant?: 'text' | 'contained' | 'outlined';
    isDisabled?:boolean;
    size?:'small' | 'medium' | 'large';
    onClick?:()=>void;
}

const Button:FC<ButtonProps> = ({children, onClick, className, variant='contained', isDisabled, size='medium', ...props}) => {
    const checkingTypes = (value:string) => {
        return buttonStyles[value]
    };
    
    const typeVariant = checkingTypes(variant);
    const typeSize =checkingTypes(size);
   
    const stringCheck = typeof children == 'string';
    
    return (
        <button  
        className = {`${container.button} ${typeVariant} ${typeSize}  ${className ?? ''}`} 
        disabled={isDisabled}
        onClick={onClick} 
        {...props}> 
            {stringCheck ? children.toUpperCase() : children}
        </button>
    )
}

export default Button;