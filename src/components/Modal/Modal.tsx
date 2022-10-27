import { ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import { Text } from "../Text";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

type ModalProps = {
  buttons?: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  size: "sm" | "md" | "lg" | "xl";
  subtitle?: string;
  title: string;
};

export const Modal = ({
  content,
  title,
  subtitle,
  isOpen,
  setIsOpen,
  buttons,
}: ModalProps) => {
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

          {buttons && (
            <ButtonGroup className="justify-end">{buttons}</ButtonGroup>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
