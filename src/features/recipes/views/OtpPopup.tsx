/* eslint-disable @typescript-eslint/no-misused-promises */
import CModal from "@/components/CModal/CModal";
import OtpInput from "@/components/OtpInput/OtpInput";
import CButton from "@/components/button/button";
import {
  Box,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function OtpPopup({ open, onClose }: Props): React.ReactElement {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      code: "",
    },
  });
  const onSubmit = (): void => {
    navigate("/recipe-recommendation/1");
  };
  return (
    <CModal isOpen={open} onClose={onClose}>
      <>
        <ModalHeader>Код подтверждения</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody width="450px">
            <Text
              textAlign="center"
              fontSize="16px"
              fontWeight={400}
              color="#393D4E"
              lineHeight="160%"
            >
              Код СМС отправлен на номер телефона пациента.
            </Text>
            <Text
              textAlign="center"
              fontSize="16px"
              fontWeight={400}
              whiteSpace="nowrap"
              color="#393D4E"
              lineHeight="160%"
            >
              +998 93 3** ** 89
            </Text>
            <Text
              textAlign="center"
              fontSize="16px"
              fontWeight={400}
              color="#393D4E"
              lineHeight="160%"
            >
              Введите код, чтобы посмотреть детали рецепта.
            </Text>
            <Box className="flex items-center justify-center mt-5">
              <OtpInput name="code" control={control} />
            </Box>
          </ModalBody>
          <ModalFooter width="100%">
            <CButton
              variant="solid"
              text="Подтвердить"
              buttonType="submit"
              isFull
            />
          </ModalFooter>
        </form>
      </>
    </CModal>
  );
}
