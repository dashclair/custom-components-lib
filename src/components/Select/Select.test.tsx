import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
    it("should be rendered", () => {
        const { getByRole, queryByText } = render(
            <Select label="select" options={["Option 1"]} />
        );
        const selectInput = getByRole("combobox");
        const selectButton = getByRole("button");

        expect(selectInput).toBeInTheDocument();
        expect(selectButton).toBeInTheDocument();
        expect(queryByText("Option 1")).not.toBeInTheDocument();
    });

    it("is checking the display of options after button clicks", () => {
        const options = ["1", "2", "3"];
        const { queryByText, getByRole } = render(
            <Select label="Select" options={options} />
        );
        const selectButton = getByRole("button");

        fireEvent.click(selectButton);
        options.forEach((option) => {
            expect(queryByText(option)).toBeInTheDocument();
        });

        fireEvent.click(selectButton);
        options.forEach((option) => {
            expect(queryByText(option)).toBeNull();
        });
    });

    it("is checking the setting of the clicked option as a select value", () => {
        const options = ["1", "2", "3"];
        const { queryByText, getByRole, getByText } = render(
            <Select label="Select" options={options} />
        );

        const selectInput = getByRole("combobox");
        const selectButton = getByRole("button");

        fireEvent.click(selectButton);
        options.forEach((option) => {
            expect(queryByText(option)).toBeInTheDocument();
        });

        fireEvent.click(getByText("1"));
        expect(selectInput).toHaveValue("1");
    });

    it("should be rendered with error prop styles", () => {
        const options = ["1", "2", "3"];
        const { getByRole } = render(
            <Select label="Select" options={options} selectError={true} />
        );
        const selectInput = getByRole("combobox");

        expect(selectInput).toHaveClass("outlined error");
    });
});
