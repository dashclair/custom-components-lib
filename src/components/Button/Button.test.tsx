import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    it("should be rendered", () => {
        const { getByRole } = render(<Button>button</Button>);
        const buttonElement = getByRole("button");

        expect(buttonElement).toBeInTheDocument();
    });

    it("should be rendered with capitalized text", () => {
        const { getByRole } = render(<Button>button</Button>);
        const buttonElement = getByRole("button");

        expect(buttonElement).toHaveTextContent("BUTTON");
    });

    it("should be rendered with uncapitalized text", () => {
        const { getByRole } = render(
            <Button capitalized={false}>button</Button>
        );

        const buttonElement = getByRole("button");

        expect(buttonElement).toHaveTextContent("button");
    });

    it("should be rendered with custom variant and size prop", () => {
        const { getByRole } = render(
            <Button variant="outlined" size="small">
                Click me
            </Button>
        );

        const buttonElement = getByRole("button");

        expect(buttonElement).toHaveClass("button outlined small");
    });

    it("should be rendered with checking the onClick", () => {
        const onClickMock = jest.fn();
        const { getByRole } = render(
            <Button onClick={onClickMock}>Click me</Button>
        );
        const buttonElement = getByRole("button");

        fireEvent.click(buttonElement);

        expect(onClickMock).toHaveBeenCalled();
    });

    it("should be renderd with disabled prop", () => {
        const onClickMock = jest.fn();
        const { getByRole } = render(
            <Button isDisabled={true} onClick={onClickMock}>
                button
            </Button>
        );
        const buttonElement = getByRole("button");

        fireEvent.click(buttonElement);

        expect(buttonElement).toBeDisabled();
        expect(onClickMock).not.toHaveBeenCalled();
    });
});
