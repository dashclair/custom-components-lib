import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Button = ({
    capitalized = true,
    children,
    onClick,
    className,
    variant = "contained",
    isDisabled,
    size = "medium",
    ...props
}: ButtonProps) => {
    const btn = cx("button", className, {
        disabled: isDisabled,
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
        text: variant === "text",
        outlined: variant === "outlined",
        contained: variant === "contained",
    });

    const capitalizedLetters =
        capitalized && typeof children === "string"
            ? children.toUpperCase()
            : children;

    return (
        <button
            className={btn}
            disabled={isDisabled}
            onClick={onClick}
            {...props}
        >
            {capitalizedLetters}
        </button>
    );
};

export default Button;
