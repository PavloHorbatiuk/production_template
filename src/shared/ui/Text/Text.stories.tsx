import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
    title: "shared/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof Text>;

export const WithTitle: Story = {
    args: {
        title: "Title lorem ipsum",
    },
};
export const WithText: Story = {
    args: {
        text: "Text lorem ipsum",
    },
};
