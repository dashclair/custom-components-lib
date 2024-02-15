import React, { FC, ReactNode } from 'react';

export interface ButtonProps {
    children:ReactNode;
    color:string;
}

const Button:FC<ButtonProps> = ({children, color, ...props}) => {
    return (
        <button {...props} style={{color}}>
            {children}
        </button>
    )
}

export default Button;