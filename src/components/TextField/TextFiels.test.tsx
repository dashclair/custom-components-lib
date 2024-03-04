import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextField from "./TextField";

describe("TextField", () => {
    it("should be rendered with the default props", () => {
        const { getByLabelText, getByRole } = render(
            <TextField id="input" label="Text Field" />
        );
        const inputElement = getByRole("textbox");
        const labelElement = getByLabelText("Text Field");

        expect(inputElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute("type", "text");
    });

    it("should be rendered with variant prop", () => {
        const { getByRole } = render(
            <TextField label="Label" variant="outlined" />
        );
        const inputElement = getByRole("textbox");

        expect(inputElement).toHaveClass("outlined");
    });

    it("should be rendered with custom type prop", () => {
        const { getByRole } = render(<TextField label="Label" type="email" />);
        const inputElement = getByRole("textbox");

        expect(inputElement).toHaveAttribute("type", "email");
    });

    it("should be rendered with custom className", () => {
        const { getByRole } = render(
            <TextField label="Label" className="custom-input" />
        );
        const inputElement = getByRole("textbox");

        expect(inputElement).toHaveClass("input custom-input");
    });

    it("should be rendered with onChange value", () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(
            <TextField label="Label" onChange={onChangeMock} />
        );
        const inputElement = getByRole("textbox");

        fireEvent.change(inputElement, { target: { value: "newvalue" } });
        expect(inputElement).toHaveValue("newvalue");
    });

    it("should be rendered with error prop", () => {
        const { getByRole } = render(<TextField label="Label" error={true} />);
        const inputElement = getByRole("textbox");

        expect(inputElement).toHaveClass("input error");
    });

    it("should be rendered onBlur prop", () => {
        const onBlurMock = jest.fn();
        const { getByRole } = render(
            <TextField label="Label" onBlur={onBlurMock} />
        );
        const inputElement = getByRole("textbox");

        fireEvent.blur(inputElement);
        expect(onBlurMock).toHaveBeenCalledTimes(1);
    });

    it("should be rendered with disabled", () => {
        const { getByLabelText } = render(
            <TextField id="myTextField" label="Text Field" disabled={true} />
        );
        const inputElement = getByLabelText("Text Field");

        expect(inputElement).toBeDisabled();
    });
});
