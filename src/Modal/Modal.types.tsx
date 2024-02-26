import { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    children?: ReactNode;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    title?:string;
    text?:string;
}