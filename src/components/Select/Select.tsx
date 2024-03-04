import React, { useEffect, useRef, ChangeEvent, useState } from "react";
import { createPortal } from "react-dom";
import TextField from "../TextField/TextField";
import { SelectProps } from "./Select.types";
import Button from "../Button/Button";
import IconComponent from "../Icon/IconComponent";
import cnBind from "classnames/bind";
import styles from "./Select.module.scss";
import useOutsideClick from "../../hooks/useOutsideClick";

const cx = cnBind.bind(styles);

const Select = ({
    label,
    options,
    defaultValue = "",
    selectError,
    onChange,
}: SelectProps) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    useOutsideClick(divRef, () => setOpen(false));

    useEffect(() => {
        const inputElement = inputRef.current;
        const divElement = divRef.current;

        if (inputElement && divElement) {
            const inputRect = inputElement.getBoundingClientRect();

            divElement.style.position = "absolute";
            divElement.style.width = `${inputRect.width}px`;
            divElement.style.top = `${inputRect.bottom}px`;
            divElement.style.left = `${inputRect.left}px`;
        }
    }, [inputRef]);

    const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setSelectedItem(value);

        if (onChange) {
            onChange(value);
        }

        if (options.includes(value)) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    const handleOpen = () => {
        if (!selectedItem) {
            setSelectedItem(" ");
        }
        setOpen(!open);
    };

    const arrow = cx({
        arrowRotate: open,
    });

    const optionsContainer = cx("optionsContainer", {
        none: !open,
    });

    return (
        <div id="select" className={styles.select}>
            <div className={styles.selectContainer}>
                <TextField
                    role="combobox"
                    inputRef={inputRef}
                    onChange={handleSelectChange}
                    value={selectedItem}
                    variant="outlined"
                    select={open}
                    label={label}
                    error={selectError}
                    className={styles.input}
                >
                    <button
                        onClick={handleOpen}
                        className={styles.selectButton}
                    >
                        <IconComponent iconName="arrow" className={arrow} />
                    </button>
                </TextField>
            </div>
            {createPortal(
                <div ref={divRef} className={optionsContainer}>
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
                </div>,
                document.body
            )}
        </div>
    );
};

export default Select;
