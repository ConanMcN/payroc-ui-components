import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "transparent"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Submit",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Sign up",
};

export const Transparent = Template.bind({});
Transparent.args = {
  color: "transparent",
  children: "Cancel",
};
