import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("rendering button", () => {
    test("button with capitalized text", () => {
        const { getByRole } = render(<Button>button</Button>);
        const buttonElement = getByRole("button");

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("BUTTON");
    });

    test("button with uncapitalized text", () => {
        const { getByRole } = render(
            <Button capitalized={false}>button</Button>
        );
        const buttonElement = getByRole("button");

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("button");
    });

    test("with custom props", () => {
        const onClickMock = jest.fn();
        const { getByRole } = render(
            <Button
                capitalized={false}
                variant="outlined"
                size="small"
                onClick={onClickMock}
            >
                Click me
            </Button>
        );
        const buttonElement = getByRole("button");

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("button outlined small");
        expect(buttonElement).toHaveTextContent("Click me");

        fireEvent.click(buttonElement);

        expect(onClickMock).toHaveBeenCalled();
    });

    test("disabled button", () => {
        const onClickMock = jest.fn();
        const { getByRole } = render(
            <Button
                capitalized
                variant="contained"
                size="medium"
                isDisabled={true}
                onClick={onClickMock}
            >
                button
            </Button>
        );
        const buttonElement = getByRole("button");

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("button contained medium");
        expect(buttonElement).toHaveTextContent("BUTTON");
        expect(buttonElement).toBeDisabled();

        fireEvent.click(buttonElement);

        expect(onClickMock).not.toHaveBeenCalled();
    });
});
