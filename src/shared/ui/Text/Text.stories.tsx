import type { Meta, StoryObj } from "@storybook/react";
import { type TextProps } from "./Text";
import Text from "./Text";

const meta = {
    title: "shared/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<TextProps>;

export const Outline: Story = {
    args: {
        title: "Title lorem ipsum",
        text: "Title lorem ipsum",
    },
};
