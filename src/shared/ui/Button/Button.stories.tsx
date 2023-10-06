import type { Meta, StoryObj } from "@storybook/react";

import { Button, type ButtonProps, ThemeButton } from "./Button";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const CLEAR: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.CLEAR,
    },
};
export const Black: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.BLACK,
    },
};
