import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextField from "./TextField";

describe("TextField", () => {
    test("default props", () => {
        const { getByLabelText } = render(
            <TextField id="input" label="Text Field" />
        );
        const inputElement = getByLabelText("Text Field");
        const labelElement = getByLabelText("Text Field");

        expect(inputElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toHaveValue("");
        expect(inputElement).not.toBeDisabled();
        expect(labelElement).not.toHaveClass("error");
    });

    test("custom props", () => {
        const onChangeMock = jest.fn();
        const onBlurMock = jest.fn();
        const { getByLabelText } = render(
            <TextField
                id="myTextField"
                label="Text Field"
                variant="outlined"
                type="email"
                value="example@example.com"
                className="custom-class"
                error={true}
                required={true}
                onBlur={onBlurMock}
                onChange={onChangeMock}
            />
        );
        const inputElement = getByLabelText("Text Field");
        const labelElement = getByLabelText("Text Field");

        expect(inputElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toHaveValue("example@example.com");
        expect(inputElement).toHaveAttribute("type", "email");
        expect(inputElement).toHaveClass("outlined error custom-class");

        fireEvent.change(inputElement, { target: { value: "newvalue" } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));

        fireEvent.blur(inputElement);
        expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
    test("with disabled", () => {
        const { getByLabelText } = render(
            <TextField
                id="myTextField"
                label="Text Field"
                variant="filled"
                type="text"
                disabled={true}
            />
        );
        const inputElement = getByLabelText("Text Field");
        const labelElement = getByLabelText("Text Field");

        expect(inputElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute("type", "text");
        expect(inputElement).toHaveClass("filled");
        expect(inputElement).toBeDisabled();

        fireEvent.change(inputElement, { target: { value: "name" } });
    });
});
