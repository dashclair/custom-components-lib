import React, { useEffect, useRef, useState } from "react";
import styles from "./Modal.modules.scss";
import { ModalProps } from "./Modal.types";
import CrossIcon from "./CrossIcon";

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
                if (typeof modalElement.showModal === "function") {
                    modalElement.showModal();
                }
            } else {
                if (typeof modalElement.close === "function") {
                    modalElement.close();
                }
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
        <dialog
            ref={modalRef}
            className={styles.modal}
            onKeyDown={handleKeyDown}
        >
            {hasCloseBtn && (
                <button
                    data-testid='modal-button'
                    className={styles.closeButton}
                    onClick={handleCloseModal}
                >
                    <CrossIcon className={styles.cross} />
                </button>
            )}
            <h1 className={styles.title}>{title}</h1>
            <p>{text}</p>
            {children}
        </dialog>
    );
};

export default Modal;
