import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

const meta = {
    title: "Example/Select",
    component: Select,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "select",
        options: ["1", "2"],
    },
};

const users = [
    {
        name: "account",
        id: "1",
    },
    {
        name: "john",
        id: "2",
    },
    {
        name: "hi",
        id: "2",
    },
];

const usersName = users.map((user) => user.name);

export const ErrorSelect: Story = {
    args: {
        label: "select",
        options: ["age", "status", "gender"],
        selectError: true,
    },
};

export const SelectDefault: Story = {
    args: {
        label: "name",
        defaultValue: usersName[0],
        options: usersName,
    },
};
