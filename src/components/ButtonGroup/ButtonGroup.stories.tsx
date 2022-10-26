import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Example/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    className: {
      control: {
        type: "select",
        options: ["justify-start", "justify-center", "justify-end"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button color="transparent">Close</Button>
    <Button color="primary">Submit</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
