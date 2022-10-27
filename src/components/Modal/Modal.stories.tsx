import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";
import { Text } from "../Text";
import { Button } from "../Button";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        {...args}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttons={
          <>
            <Button color="transparent" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => setIsOpen(false)}>
              Submit
            </Button>
          </>
        }
      ></Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: (
    <Text variant="paragraph">Officia ea tempor in adipisicing cillum.</Text>
  ),
  title: "Example Modal",
};
