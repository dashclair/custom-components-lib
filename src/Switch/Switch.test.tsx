import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch", () => {
    test("renders with default props", () => {
        const { getByRole } = render(<Switch id="mySwitch" />);
        const switchElement = getByRole("checkbox");

        expect(switchElement).toBeInTheDocument();
        expect(switchElement).not.toBeChecked();
        expect(switchElement).not.toBeDisabled();
    });

    test("renders with custom props", () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(
            <Switch
                id="mySwitch"
                checked={true}
                onChange={onChangeMock}
            />
        );
        const switchElement = getByRole("checkbox");

        expect(switchElement).toBeInTheDocument();
        expect(switchElement).toBeChecked();
        expect(switchElement).not.toBeDisabled();

        fireEvent.click(switchElement);

        expect(onChangeMock).toHaveBeenCalled();
    });
    
    test("renders with custom disabled props", () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(
            <Switch
                id="mySwitch"
                checked={true}
                disabled={true}
                onChange={onChangeMock}
            />
        );
        const switchElement = getByRole("checkbox");

        expect(switchElement).toBeInTheDocument();
        expect(switchElement).toBeChecked();
        expect(switchElement).toBeDisabled();
    });
});
