import React from "react";
import buttonStyles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button = ({
    children,
    onClick,
    className,
    variant = "contained",
    isDisabled,
    size = "medium",
    ...props
}: ButtonProps) => {
    const checkingTypes = (value: string) => {
        return buttonStyles[value];
    };

    const typeVariant = checkingTypes(variant);
    const typeSize = checkingTypes(size);

    const stringCheck = typeof children == "string";

    return (
        <button
            className={`${buttonStyles.button} ${typeVariant} ${typeSize}  ${
                className ?? ""
            }`}
            disabled={isDisabled}
            onClick={onClick}
            {...props}
        >
            {stringCheck ? children.toUpperCase() : children}
        </button>
    );
};

export default Button;
