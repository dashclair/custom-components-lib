import React from "react";
import styles from "./TextField.module.scss";
import { TextFieldProps } from "./TextField.types";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

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
    inputRef,
    ...props
}: Partial<TextFieldProps>) => {
    const inputStyle = cx("input", className, {
        outlined: variant === "outlined",
        filled: variant === "filled",
        error: error,
        select: select,
    });

    return (
        <div className={`${styles.containerInput}`}>
            <input
                className={inputStyle}
                value={value}
                id={id}
                type={type}
                placeholder=""
                disabled={disabled}
                required={required}
                onBlur={onBlur}
                onChange={onChange}
                ref={inputRef}
                {...props}
            ></input>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            {children}
        </div>
    );
};

export default TextField;
