import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
    test("renders with default props", () => {
        const { queryByText, getByRole } = render(
            <Select
                label="select"
                options={["Option 1", "Option 2", "Option 3"]}
            />
        );
        const selectInput = getByRole("textbox");
        const selectButton = getByRole("button");

        expect(selectInput).toBeInTheDocument();
        expect(selectButton).toBeInTheDocument();
        expect(queryByText("Option 1")).not.toBeInTheDocument();
        expect(queryByText("Option 2")).not.toBeInTheDocument();
        expect(queryByText("Option 3")).not.toBeInTheDocument();
    });

    test("renders with selects option", () => {
        const options = ["Option 1", "Option 2", "Option 3"];
        const { getByText, getByRole } = render(
            <Select label="Select" options={options}/>
        );
        const selectInput = getByRole("textbox");
        const selectButton = getByRole("button");
       
        fireEvent.click(selectButton);

        options.forEach((option) => {
            expect(getByText(option)).toBeInTheDocument();
        });

        fireEvent.click(getByText("Option 1"));

        expect(selectInput).toHaveAttribute("value", "Option 1");
    });
});
