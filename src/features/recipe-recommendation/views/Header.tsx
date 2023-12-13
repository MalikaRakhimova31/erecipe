import CButton from "@/components/button/button";
import { Flex, Box, Text } from "@chakra-ui/react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import LeavePopup from "./LeavePopup";
import ConfirmPopup from "./ConfirmPopup";

export default function Header(): React.ReactElement {
  const [leave, setLeave] = useState(false);
  const [confirm, setConfirm] = useState(false);
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
      <ConfirmPopup
        open={confirm}
        onClose={() => {
          setConfirm(false);
        }}
      />
    </>
  );
}
