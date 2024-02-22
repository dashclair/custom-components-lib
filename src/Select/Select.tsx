import React, { useState } from "react";
import TextField from "../TextField/TextField";
import selectStyles from "./Select.module.scss";
import { SelectProps } from "./Select.types";
import Button from "../Button/Button";
import Arrow from "./Arrow";

const Select = ({
    label,
    options,
    defaultValue = "",
    selectError,
}: SelectProps) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);

    const handleOpen = () => {
        if (!selectedItem) {
            setSelectedItem(" ");
        }
        setOpen(!open);
    };

    return (
        <div className={selectStyles.select}>
            <div className={selectStyles.selectContainer}>
                <TextField
                    value={selectedItem}
                    variant="outlined"
                    select={open}
                    label={label}
                    error={selectError}
                    className={selectStyles.input}
                />
                <button
                    onClick={handleOpen}
                    className={selectStyles.selectButton}
                >
                    <Arrow className={open ? selectStyles.arrowRotate : ""} />
                </button>
            </div>
            <div
                className={
                    open
                        ? selectStyles.optionsContainer
                        : selectStyles.optionsContainer_none
                }
            >
                {open &&
                    Array.isArray(options) &&
                    options.map((option) => {
                        return (
                            <Button
                                key={option}
                                className={selectStyles.optionButton}
                                variant="text"
                                onClick={() => {
                                    setSelectedItem(option);
                                    setOpen(!open);
                                }}
                                select
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
