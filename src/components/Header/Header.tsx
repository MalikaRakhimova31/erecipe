import { Flex, Text } from "@chakra-ui/react";
import useSection from "@/hooks/use-section";
import UserAccount from "../UserAccount/UserAccount";

export default function Header(): React.ReactElement {
  const section = useSection();

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
      case "polyclinics": {
        return "Поликлиники";
      }
      case "doctors": {
        return "Врачи";
      }
      case "erecipes": {
        return "E-рецепты";
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
