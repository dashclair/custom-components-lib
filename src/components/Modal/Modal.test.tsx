import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
    test("render modal based on isOpen prop", () => {
        const { getByText, getByRole } = render(
            <Modal title={"Title"} text={"test"} isOpen={true} />
        );
        const modalDialog = getByRole("dialog", { hidden: true });

        expect(modalDialog).toBeInTheDocument();
        expect(getByText("test")).toBeInTheDocument();
    });

    test("click the button", () => {
        const handleClose = jest.fn();
        const { getByTestId } = render(
            <Modal
                onClose={handleClose}
                hasCloseBtn={true}
                title={"Title"}
                text={"test"}
                isOpen={true}
            />
        );
        const buttonElement = getByTestId("modal-button");
        fireEvent.click(buttonElement);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
