import USelect from "@/components/USelect/USelect";
import { type SelectionMenuProps } from "@/types";
import { Box, Flex } from "@chakra-ui/react";
import PatientsTable from "./views/PatientsTable";

function PatientsHome(): React.ReactElement {
  const options: SelectionMenuProps[] = [
    { value: "001", label: "Recipeee" },
    { value: "002", label: "Kecipeee" },
    { value: "003", label: "Apple" },
    { value: "004", label: "Butter" },
    { value: "005", label: "Butterfly" },
  ];
  return (
    <Flex columnGap="16px" padding="16px">
      <Box width="25%">Calendar</Box>
      <Flex flex="1" direction="column" rowGap="16px">
        <USelect
          placeholder="Поиск по ПИНФЛ/серии паспорта"
          searchIcon
          options={options}
          isSearchable
          isClearable
        />
        <PatientsTable />
      </Flex>
    </Flex>
  );
}

export default PatientsHome;
