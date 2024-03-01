import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";

const meta = {
    title: "Example/Modal",
    component: Modal,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalExample: Story = {
    args: {
        isOpen: true,
        hasCloseBtn: true,
        title: "Title",
        text: "Example Example Example  Example  Example  Example  Example Example Example Example Example  Example  Example  Example  Example Example Example ",
    },
};
