import { Flex, Text } from "@chakra-ui/react";
import useSection from "@/hooks/use-section";
import { useHaveAccessTo } from "@/helpers/have-access-to";
import UserAccount from "../UserAccount/UserAccount";

export default function Header(): React.ReactElement {
  const section = useSection();

  const part = useHaveAccessTo("doctors-indicators");

  console.log(part);

  const generateHeaderTitle = (): React.ReactNode => {
    switch (section) {
      case "dashboard": {
        return "Статистика";
      }
      case "create-recipe": {
        return "Создать новый рецепт";
      }
      case "patients": {
        return "Пациенты";
      }
      case "settings": {
        return "Настройки";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      borderBottom="1px solid #E7EAF0"
      h="66px"
      w="full"
      px="16px"
      py="15px"
    >
      <Text fontWeight="500" fontSize="18px" color="secondary.main">
        {generateHeaderTitle()}
      </Text>
      <UserAccount />
    </Flex>
  );
}
