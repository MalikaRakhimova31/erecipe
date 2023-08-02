import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function UserAccountPopover(): React.ReactElement {
  const navigate = useNavigate();
  return (
    <Flex
      boxShadow="0px 8px 15px 0px rgba(0, 0, 0, 0.08)"
      borderRadius="7px"
      p={4}
      alignItems="center"
      justifyContent="center"
      columnGap="16px"
      bg="white"
      width="max-content"
      onClick={() => {
        navigate("/auth");
      }}
    >
      <img src="/assets/logout.svg" alt="leave icon" />
      <Text fontWeight={400} fontSize="16px" color="primary.color">
        Выйти из аккаунта
      </Text>
    </Flex>
  );
}
