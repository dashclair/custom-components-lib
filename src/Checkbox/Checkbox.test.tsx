import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("checkbox", () => {
    test("with default props", () => {
        const onChangeMock = jest.fn();
        const { getByLabelText } = render(
            <Checkbox label="label" onChange={onChangeMock} />
        );
        const checkboxElement = getByLabelText("label");

        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement).not.toBeChecked();
        expect(checkboxElement).not.toBeDisabled();

        fireEvent.click(checkboxElement);

        expect(onChangeMock).toHaveBeenCalled();
    });

    test("with custom props", () => {
        const onChangeMock = jest.fn();
        const { getByLabelText } = render(
            <Checkbox
                label="label"
                value={true}
                disabled={true}
                size="large"
                onChange={onChangeMock}
            />
        );
        const checkboxElement = getByLabelText("label");

        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement).toBeChecked();
        expect(checkboxElement).toHaveClass("input large");
        expect(checkboxElement).toBeDisabled();
    });
});
