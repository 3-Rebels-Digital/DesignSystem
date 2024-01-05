// Setup storybook for Button component

import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
    title: "Components/Atoms/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Outline = Template.bind({});
export const Underline = Template.bind({});
Primary.args = {
    type: "primary",
    children: "Button Text",
};

Outline.args = {
    type: "outline",
    children: "Button Text",
};

Underline.args = {
    type: "underline",
    children: "Button Text",
};