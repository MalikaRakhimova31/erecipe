import { Flex, Text } from "@chakra-ui/react";
import useSection from "@/hooks/use-section";
import { getRegions } from "@/features/api";
import { useQuery } from "@tanstack/react-query";
import { useHaveAccessTo } from "@/helpers/have-access-to";
import { useMemo, useState } from "react";
import UserAccount from "../UserAccount/UserAccount";
import RegionSelection from "../RegionSelection/RegionSelection";

export default function Header(): React.ReactElement {
  const section = useSection();
  const [value, setValue] = useState();
  const isMinistry = useHaveAccessTo("region-selection");
  console.log("isMinistry", isMinistry);
  const { data: regions } = useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      const res = await getRegions();
      return res;
    },
    enabled: !!isMinistry,
  });

  const regionsOption = useMemo(
    () =>
      isMinistry &&
      regions?.results.map((el) => ({
        value: el.id,
        label: el.name.ru,
      })),
    [regions, isMinistry],
  );

  // console.log("region", regionsOption);

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
