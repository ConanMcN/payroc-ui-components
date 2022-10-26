import { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";
import React from "react";
import { Text } from "../Text";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Button } from "../Button";

type ModalProps = {
  content: ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  subtitle?: string;
  title: string;
};

export const Modal = ({ content, title, subtitle }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog
      onClose={() => setIsOpen(false)}
      className="relative z-50"
      open={isOpen}
    >
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/30">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-modal-xl rounded bg-white p-4">
          <Text variant="h2">{title}</Text>

          {content}

          <ButtonGroup className="justify-end">
            <Button color="transparent">Cancel</Button>
            <Button color="primary">Submit</Button>
          </ButtonGroup>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
