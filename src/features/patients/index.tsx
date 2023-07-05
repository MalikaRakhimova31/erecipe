import USelect from "@/components/USelect/USelect";
import { Box, Flex } from "@chakra-ui/react";
import CCalendar from "@/components/Calendar/CCalendar";
import { useState } from "react";
import PatientsTable from "./views/PatientsTable";

function PatientsHome(): React.ReactElement {
  const [value, setValue] = useState(new Date());

  const options: any = [
    { value: "001", label: "Recipeee" },
    { value: "002", label: "Kecipeee" },
    { value: "003", label: "Apple" },
    { value: "004", label: "Butter" },
    { value: "005", label: "Butterfly" },
  ];

  const handleChange = (e: Date): void => {
    setValue(e);
  };
  return (
    <Flex columnGap="16px" padding="16px">
      <Box flex="1">
        <CCalendar
          value={value}
          onChange={(e: any) => {
            handleChange(e);
          }}
        />
      </Box>
      <Flex width="74%" flex="5" direction="column" rowGap="16px">
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
