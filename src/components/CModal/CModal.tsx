import { Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

export default function CModal({
  isOpen,
  onClose,
  children,
}: ModalProps): React.ReactElement {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <Flex
          alignItems="center"
          justifyContent="flex-end"
          cursor="pointer"
          onClick={onClose}
        >
          <img src="/assets/close.svg" alt="close icon" />
        </Flex>
        {children}
      </ModalContent>
    </Modal>
  );
}
