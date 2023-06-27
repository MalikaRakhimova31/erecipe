/* eslint-disable @typescript-eslint/no-misused-promises */
import RecipeAccordion from "@/components/RecipeAccordion/RecipeAccordion";
import { Box, Flex } from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import CButton from "@/components/button/button";
import { useRef, useState } from "react";
import { type SelectionMenuProps, type itemProps } from "@/types";
import USelect from "@/components/USelect/USelect";
import PatientBox from "@/components/PatientBox.tsx/PatientBox";

interface FormValues {
  items: itemProps[];
}

const options: SelectionMenuProps[] = [
  { value: "001", label: "Recipeee" },
  { value: "002", label: "Kecipeee" },
  { value: "003", label: "Apple" },
  { value: "004", label: "Butter" },
  { value: "005", label: "Butterfly" },
];

export default function CreateRecipe(): React.ReactElement {
  const searchRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(1);
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      items: [],
    },
  });

  const { fields, append } = useFieldArray({
    name: "items",
    control,
  });

  const handleAdd = (): void => {
    setCount(count + 1);
    append({
      recipeType: "",
      mnn: "",
      drugForm: "",
      drugFormDetails: "",
      drugMethod: "",
      startDate: new Date(),
      endDate: new Date(),
      drugQuantity: 0,
      measure: "",
      frequencyMethod: "",
      frequency: 0,
      drugDuartion: "",
      period: 0,
      note: "",
    });
  };

  console.log("field", fields);

  const onSubmit = (data: FormValues): void => {
    console.log(data);
  };
  return (
    <Box bg="transparent" p="16px" w="100%">
      <Flex columnGap="16px">
        <Box w="71%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
              direction="column"
              justifyContent="space-between"
              height="90vh"
            >
              <Box maxHeight="100%" overflowY="scroll">
                <Flex direction="column" rowGap="16px">
                  <RecipeAccordion control={control} />
                  {fields?.map((field, index) => (
                    <RecipeAccordion
                      control={control}
                      key={field.id}
                      isAppended
                      index={index}
                    />
                  ))}
                </Flex>
              </Box>
              <Box mt="15px">
                <CButton
                  icon={<img src="/assets/create.svg" alt="add icon" />}
                  text="Добавить назначение"
                  buttonType="button"
                  variant="unstyled"
                  onClick={handleAdd}
                  isFull
                />
                <Flex
                  width="100%"
                  alignItems="center"
                  justifyContent="flex-end"
                  mt="36px"
                >
                  <Flex w="40%" alignItems="center" columnGap="16px">
                    <CButton
                      text="Отменить"
                      buttonType="button"
                      variant="outline"
                    />
                    <CButton
                      text="Отправить рецепт"
                      variant="solid"
                      buttonType="submit"
                    />
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </form>
        </Box>
        <Box width="29%">
          <Flex direction="column" rowGap="16px">
            <USelect
              options={options}
              placeholder="Поиск по ПИНФЛ/серии паспорта"
              isClearable
              isSearchable
              searchRef={searchRef}
            />
            <PatientBox searchRef={searchRef} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
