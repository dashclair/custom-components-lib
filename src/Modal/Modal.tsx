import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.modules.scss";
import { ModalProps } from "./Modal.types";
import IconComponent from "../components/Icon/IconComponent";

const Modal = ({
    children,
    isOpen,
    onClose,
    hasCloseBtn,
    title,
    text,
}: ModalProps) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };
    return (
        <>
            {createPortal(
                <dialog
                    ref={modalRef}
                    className={styles.modal}
                    onKeyDown={handleKeyDown}
                >
                    {hasCloseBtn && (
                        <button
                            className={styles.closeButton}
                            onClick={handleCloseModal}
                        >
                            <IconComponent iconName="cross" />
                        </button>
                    )}
                    <h1 className={styles.title}>{title}</h1>
                    <p>{text}</p>
                    {children}
                </dialog>,
                document.body
            )}
        </>
    );
};

export default Modal;
