import React from "react";
import inputStyles from "./TextField.module.scss";
import { TextFieldTypes } from "./TextField.types";

const TextField = ({
    children,
    id,
    variant = "standart",
    label,
    type = "text",
    value,
    className,
    error,
    disabled,
    required,
    select,
    onBlur,
    onChange,
    ...props
}: Partial<TextFieldTypes>) => {
    const handleErrorStyle = () => {
        if (error && variant !== "standart") {
            return `${inputStyles[`${variant}_error`]}`;
        }

        if (error && variant === "standart") {
            return inputStyles.input_error;
        }
    };

    const selectStyles = select && inputStyles.outlined_select;

    const errorStyle = handleErrorStyle();

    return (
        <div
            className={`${inputStyles.containerInput} ${className ?? ""}`} 
        >
            <input
                className={`${inputStyles.input} ${
                    variant !== "standart" && inputStyles[`${variant}`]
                } ${errorStyle} ${selectStyles} `}
                value={value}
                id={id}
                type={type}
                placeholder=""
                disabled={disabled}
                required={required}
                onBlur={onBlur}
                onChange={onChange}
                {...props}
            ></input>
            <label className={inputStyles.label} htmlFor={id}>
                {label}
            </label>
            {children}
        </div>
    );
};

export default TextField;
