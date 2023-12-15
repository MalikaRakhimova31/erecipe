import CButton from "@/components/button/button";
import { Flex, Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LeavePopup from "./LeavePopup";
import ConfirmPopup from "./ConfirmPopup";

interface Props {
  leave: boolean;
  confirm: boolean;
  setLeave: (s: boolean) => void;
  setConfirm: (s: boolean) => void;
}

export default function Header({
  leave,
  confirm,
  setLeave,
  setConfirm,
}: Props): React.ReactElement {
  const { id } = useParams();

  return (
    <>
      <Box
        w="full"
        py="12.5px"
        px="16px"
        bg="white"
        borderBottom="1px solid #E7EAF0"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" columnGap="16px" cursor="default">
            <Box
              cursor="pointer"
              onClick={() => {
                setLeave(true);
              }}
            >
              <img src="/assets/headerArrowLeft.svg" alt="arrow left" />
            </Box>
            <Text color="#393D4E" fontWeight={500} fontSize="18px">
              Рекомендации на основе назначений в рецепте: {id}
            </Text>
          </Flex>
          <CButton
            buttonType="button"
            variant="solid"
            text="Выдать рецепт пациенту"
            height="41"
            onClick={() => {
              setConfirm(true);
            }}
          />
        </Flex>
      </Box>
      <Box>
        <LeavePopup
          open={leave}
          onClose={() => {
            setLeave(false);
          }}
        />
      </Box>
    </>
  );
}
