import type { Meta, StoryObj } from "@storybook/react";

import IconComponent from "./IconComponent";

const meta = {
    title: "Example/Icon",
    component: IconComponent,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof IconComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalExample: Story = {
    args: {
        iconName:'arrow'
    },
};