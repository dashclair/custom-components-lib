import React, { useEffect, useRef, useState } from "react";
import stylesModal from "./Modal.modules.scss";
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
        <dialog
            ref={modalRef}
            className={stylesModal.modal}
            onKeyDown={handleKeyDown}
        >
            {hasCloseBtn && (
                <button
                    className={stylesModal.closeButton}
                    onClick={handleCloseModal}
                >
                    <CrossIcon className={stylesModal.cross} />
                </button>
            )}
            <h1 className={stylesModal.title}>{title}</h1>
            <p>{text}</p>
            {children}
        </dialog>
    );
};

export default Modal;
