import React from "react";
import { SwitchTypes } from "./Switch.types";
import switchStyles from "./Switch.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(switchStyles);

const Switch = ({ id, checked, onChange, disabled }: SwitchTypes) => {
    const inputStyles = cx("input", {
        disabled: disabled,
    });
    return (
        <div className={switchStyles.container}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={inputStyles}
                disabled={disabled}
            />
            <label htmlFor={id} className={switchStyles.slider}></label>
        </div>
    );
};

export default Switch;
