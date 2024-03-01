import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

const meta = {
    title: "Example/Checkbox",
    component: Checkbox,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        label: "Small",
        value: false,
        size: "small",
    },
};

export const Medium: Story = {
    args: {
        label: "Medium",
        value: true,
        size: "medium",
    },
};

export const Large: Story = {
    args: {
        label: "Large",
        value: true,
        size: "large",
    },
};

export const Default: Story = {
    args: {
        label: "Default",
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        disabled: true,
        value: true,
    }
}





