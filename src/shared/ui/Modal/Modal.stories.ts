import { type StoryObj, type Meta } from "@storybook/react";
import { Modal, type ModalProps } from "./Modal";

// export default {
//     title: 'shared/Modal',
//     component: Modal,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Modal>;

const meta = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;
type StoryFn = StoryObj<ModalProps>;

export default meta;
export const Primary: StoryFn = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ",
    },
};
export const Dard: StoryFn = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ",
    },
};

// export const Primary = Template.bind({});
// Primary.args = {
//     isOpen: true,
//     children:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ",
// };

// export const Dark = Template.bind({});
// Dark.args = {
//     isOpen: true,
//     children:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ",
// };
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
