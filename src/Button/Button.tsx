import React from "react";
import buttonStyles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cn from "classnames";
import cnBind from "classnames/bind";

const cx = cnBind.bind(buttonStyles);

const Button = ({
    select,
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
        text_select: select,
    });

    const stringCheck = typeof children == "string" && !select;

    return (
        <button
            className={btn}
            disabled={isDisabled}
            onClick={onClick}
            {...props}
        >
            {stringCheck ? children.toUpperCase() : children}
        </button>
    );
};

export default Button;
