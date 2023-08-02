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

export default function LeavePopup({
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
            Вы уверены, что хотите выйти из деталей рецепта? Чтобы войти
            повторно, Вам необходимо ввести новый код подтверждения, который
            будет отправлен пациенту на номер телефона в виде СМС сообщения.
          </Text>
        </ModalBody>
        <ModalFooter>
          <CButton
            text="Отмена"
            variant="ghost"
            buttonType="button"
            onClick={onClose}
          />
          <CButton
            text="Выйти"
            variant="danger"
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
