import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";

const meta = {
    title: "Example/Switch",
    component: Switch,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
    args: {
        id: "toogle",
    },
};

export const SwitchDisabled: Story = {
    args: {
        id: "toogle",
        disabled: true,
    },
};

export const SwitchOn: Story = {
    args: {
        id: "toogle",
        checked: true,
    },
};
