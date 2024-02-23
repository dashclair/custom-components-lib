import React from "react";
import styles from "./Checkbox.module.scss";
import { CheckboxTypes } from "./Checkbox.types";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Checkbox = ({
    label,
    value,
    disabled,
    size = "small",
    onChange,
}: CheckboxTypes) => {
    const checkboxStyle = cx("input", {
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
    });

    const labelStyles = cx("label", {
        disabled: disabled,
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
    });

    return (
        <div className={styles.container}>
            <label className={labelStyles}>
                <input
                    className={checkboxStyle}
                    type="checkbox"
                    checked={value}
                    onChange={onChange}
                    disabled={disabled}
                />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
