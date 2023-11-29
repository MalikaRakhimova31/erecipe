import { Box, Flex } from "@chakra-ui/react";
import UInput from "@/components/UInput/UInput";
import { useRef } from "react";
import USelect from "@/components/USelect/USelect";
import statusOptions from "@/components/mock/options";
import Restricted from "@/providers/restricted";
import { roles } from "@/config/permissions";
import RecipesTable from "./views/RecipesTable";
import ExcelBtn from "./views/ExcelBtn";

export default function ERecipes(): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (): void => {
    if (inputRef.current !== null) {
      const inputValue = inputRef.current.value;
      console.log(inputValue);
    }
  };

  return (
    <Flex p={4} w="full" direction="column" rowGap={4}>
      <Flex w="full" columnGap="16px">
        <UInput
          onChange={onChange}
          inputRef={inputRef}
          icon="/assets/search.svg"
          placeholder="Поиск по ID рецепта, имени врача, имени пациента"
        />
        <Box width="30%">
          <USelect
            searchIcon={false}
            options={statusOptions}
            defaultValue={statusOptions[0]}
            placeholder=""
          />
        </Box>
        <Restricted to={[roles.healthMinistry]}>
          <Box flex={2}>
            <ExcelBtn />
          </Box>
        </Restricted>
      </Flex>
      <RecipesTable />
    </Flex>
  );
}
