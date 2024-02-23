import React from "react";
import inputStyles from "./TextField.module.scss";
import { TextFieldTypes } from "./TextField.types";
import classNames from "classnames/bind";

const cx = classNames.bind(inputStyles);

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
    
    const inputStyle = cx("input", {
        outlined: variant === "outlined",
        filled: variant === "filled",
        error: error,
        select: select,
    });

    return (
        <div className={`${inputStyles.containerInput}`}>
            <input
                className={`${inputStyle} ${className ?? ""}`}
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
