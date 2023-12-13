import USelect from "@/components/USelect/USelect";
import { Flex, Text } from "@chakra-ui/react";

export default function DrugQuantity(): React.ReactElement {
  const options = [
    { value: "Таблетки", label: "Таблетки" },
    { value: "Драже", label: "Драже" },
    { value: "Сборы", label: "Сборы" },
    { value: "Карандаши", label: "Карандаши" },
    { value: "Лекарственные", label: "Лекарственные" },
    { value: "Порошки", label: "Порошки" },
  ];
  return (
    <Flex columnGap="12px" width="70%">
      {/* <Flex
        borderRadius="7px"
        border="1px solid #E7EAF0"
        bg="#F8FAFB"
        py="12px"
        px="16px"
        alignItems="center"
        width="80px"
      >
        <Text fontWeight="400" fontSize="16px">
          1
        </Text>
      </Flex> */}
      <USelect
        options={options}
        searchIcon={false}
        defaultValue={options[0]}
        placeholder=""
      />
    </Flex>
  );
}
