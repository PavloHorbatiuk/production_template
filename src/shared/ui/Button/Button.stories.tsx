import type { Meta, StoryObj } from "@storybook/react";

import { Button, type ButtonProps, ButtonTheme, ButtonSize } from "./Button";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Outline: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};
export const Black: Story = {
    name: "Balck button",
    args: {
        children: "Text",
        theme: ButtonTheme.BLACK,
    },
};
export const Background: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const BackgroundInverted: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
        square: true,
    },
};
export const SquareSizeM: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const SquareSizeL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
export const ButtonDisabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        disabled: true,
        size: ButtonSize.XL,
    },
};
