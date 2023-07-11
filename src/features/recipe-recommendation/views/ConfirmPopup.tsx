import CModal from "@/components/CModal/CModal";
import CButton from "@/components/button/button";
import { type PopupInstanceProps } from "@/types";
import {
  Box,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ConfirmPopup({
  open,
  onClose,
}: PopupInstanceProps): React.ReactElement {
  const navigate = useNavigate();
  return (
    <CModal isOpen={open} onClose={onClose}>
      <Box maxW="451px">
        <ModalHeader>Подтвердите действие</ModalHeader>
        <ModalBody>
          <Text
            textAlign="center"
            color="#393D4E"
            fontSize="16px"
            fontWeight={400}
          >
            Вы выбрали 1 из 4 назначений. Вы уверены, что хотите выдать неполный
            рецепт?
          </Text>
        </ModalBody>
        <ModalFooter>
          <CButton
            text="Отменить"
            variant="outline"
            buttonType="button"
            onClick={onClose}
          />
          <CButton
            text="Подтвердить"
            variant="solid"
            buttonType="button"
            onClick={() => {
              navigate("/erecipes");
            }}
          />
        </ModalFooter>
      </Box>
    </CModal>
  );
}
