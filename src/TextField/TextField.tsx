import React, {FC} from 'react';
import inputStyles from './input.module.css';


export interface TextFieldTypes {
    id:string;
    variant: 'outlined' | 'filled' | 'standart'
    label:string;
    type:string;
    value:string;
    className:string;
    error:boolean;
    disabled:boolean;
    required:boolean;
    onBlur:() => void;
    onChange:() => void;
    
}
const TextField:FC<Partial<TextFieldTypes>> = ({id, variant='standart', label, type='text', value, className, error, disabled, required, onBlur,onChange, ...props}) => {
    
    const handleErrorStyle = () => {
        if(error && variant !== 'standart') {
            return `${inputStyles[`${variant}_error`]}`
        }
        
        if (error && variant === 'standart') {
            return inputStyles.input_error
        }
    };
    
    const errorStyle =  handleErrorStyle();
    
    return (
        <div className={`${inputStyles.containerInput} ${className ?? ''}`}>
            <input 
            className={`${inputStyles.input} ${variant!=='standart' && inputStyles[`${variant}`]} ${errorStyle}`}
            value={value}
            id={id} 
            type={type} 
            placeholder=''
            disabled={disabled}
            required={required}
            onBlur={onBlur}
            onChange={onChange}
            {...props}
            ></input>
            <label className={inputStyles.label} htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextField