import React, { useState } from "react";
import TextField from "../TextField/TextField";
import styles from "./Select.module.scss";
import { SelectProps } from "./Select.types";
import Button from "../Button/Button";
import Arrow from "./Arrow";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Select = ({
    label,
    options,
    defaultValue = "",
    selectError,
}: SelectProps) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);

    const arrow = cx({
        arrowRotate: open,
    });

    const handleOpen = () => {
        if (!selectedItem) {
            setSelectedItem(" ");
        }
        setOpen(!open);
    };

    const optionsContainer = cx("optionsContainer", {
        none: !open,
    });

    return (
        <div className={styles.select}>
            <div className={styles.selectContainer}>
                <TextField
                    value={selectedItem}
                    variant="outlined"
                    select={open}
                    label={label}
                    error={selectError}
                    className={styles.input}
                />
                <button onClick={handleOpen} className={styles.selectButton}>
                    <Arrow className={arrow} />
                </button>
            </div>
            <div className={optionsContainer}>
                {open &&
                    Array.isArray(options) &&
                    options.map((option) => {
                        return (
                            <Button
                                key={option}
                                capitalized={false}
                                className={styles.optionButton}
                                variant="text"
                                onClick={() => {
                                    setSelectedItem(option);
                                    setOpen(!open);
                                }}
                            >
                                {option}
                            </Button>
                        );
                    })}
            </div>
        </div>
    );
};

export default Select;
