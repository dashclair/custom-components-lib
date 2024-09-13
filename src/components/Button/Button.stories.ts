import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
    title: "Example/Button",
    component: Button,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    args: {
        children: "button",
        variant: "outlined",
    },
};

export const Text: Story = {
    args: {
        children: "button",
        variant: "text",
    },
};

export const Contained: Story = {
    args: {
        children: "button",
        variant: "contained",
    },
};

export const Small: Story = {
    args: {
        children: "small",
        variant: "contained",
        size: "small",
    },
};

export const Medium: Story = {
    args: {
        children: "button",
        size: "medium",
    },
};

export const Large: Story = {
    args: {
        children: "button",
        size: "large",
    },
};
