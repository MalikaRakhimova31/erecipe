import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
// import { type Control } from "react-hook-form";
import { type itemProps, type SelectionMenuProps } from "@/types";
import { motion } from "framer-motion";
import CSelect from "../CSelect/CSelect";
import CTextArea from "../CTextArea/CTextArea";
import CDatePicker from "../CDatePicker/CDatePicker";

interface Props {
  control: any;
  fields: itemProps[];
}

export default function RecipeAccordion({
  control,
  fields,
}: Props): React.ReactElement {
  const options: SelectionMenuProps[] = [
    { value: "001", label: "Recipeee" },
    { value: "002", label: "Kecipeee" },
    { value: "003", label: "Apple" },
    { value: "004", label: "Butter" },
    { value: "005", label: "Butterfly" },
  ];

  return (
    <Accordion allowToggle>
      <Flex
        direction="column"
        rowGap="15px"
        overflowY="auto"
        height="fit-content"
      >
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton>
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  color="secondary.main"
                  flex="1"
                  textAlign="left"
                >
                  Назначение #1
                </Text>
                {isExpanded ? (
                  <img src="/assets/chevronUp.svg" alt="arrow up" />
                ) : (
                  <img src="/assets/accordionChevron.svg" alt="arrow up" />
                )}
              </AccordionButton>
              <AccordionPanel>
                <Box mb="36px">
                  <Box mb="16px">
                    <Text
                      color="secondary.main"
                      fontWeight={500}
                      fontSize="16px"
                    >
                      О препарате
                    </Text>
                  </Box>
                  <Grid templateRows="repeat(3, 1fr)" gap="16px">
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="mnn"
                        options={options}
                        title="МНН"
                        placeholder="Выберите из списка"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                    <Grid templateColumns="repeat(2, 1fr)" gap="16px">
                      <GridItem w="100%">
                        <CSelect
                          control={control}
                          name="drugForm"
                          options={options}
                          title="Лекарственная форма"
                          placeholder="Выберите из списка"
                          isClearable
                          isSearchable
                        />
                      </GridItem>
                      <GridItem w="100%">
                        <CSelect
                          control={control}
                          name="drugFormDetails"
                          options={options}
                          title="Детальное понятие формы лекарства"
                          placeholder="Выберите из списка"
                          isClearable
                          isSearchable
                        />
                      </GridItem>
                    </Grid>
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="drugMethod"
                        options={options}
                        title="Способ введения препарата"
                        placeholder="Выберите из списка"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                  </Grid>
                </Box>
                <Box mb="36px">
                  <Box mb="16px">
                    <Text
                      color="secondary.main"
                      fontWeight={500}
                      fontSize="16px"
                    >
                      Схема и график приёма
                    </Text>
                  </Box>
                  <Grid
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap="16px"
                  >
                    <GridItem w="100%">
                      <CDatePicker
                        control={control}
                        name="startDate"
                        title="Дата начала"
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <CDatePicker
                        control={control}
                        name="endDate"
                        title="Дата окончания"
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="drugQuantity"
                        options={options}
                        title="Количество приёма лекарства"
                        placeholder="0"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="measure"
                        options={options}
                        title="Мера измерения"
                        placeholder="Выберите из списка"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="frequencyMethod"
                        options={options}
                        title="Частота приёма лекарства"
                        placeholder="Выберите из списка"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="frequency"
                        options={options}
                        title="Сколько раз"
                        placeholder="0"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="drugDuration"
                        options={options}
                        title="Продолжительность приёма лекарств"
                        placeholder="Выберите из списка"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                    <GridItem w="100%">
                      <CSelect
                        control={control}
                        name="period"
                        options={options}
                        title="Выберите период"
                        placeholder="Выберите из списка"
                        isClearable
                        isSearchable
                      />
                    </GridItem>
                  </Grid>
                  <Box mt="16px">
                    <CTextArea
                      name="note"
                      title="Примечание"
                      placeholder=""
                      control={control}
                    />
                  </Box>
                </Box>
                <Box mb="36px">
                  <Box mb="16px">
                    <Text
                      color="secondary.main"
                      fontWeight={500}
                      fontSize="16px"
                    >
                      Укажите крайний срок действия выдаваемого рецепта
                    </Text>
                  </Box>
                  <CDatePicker
                    name="expiredDate"
                    control={control}
                    title="Срок действия рецепта"
                  />
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        {fields.map((field, index: number) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      color="secondary.main"
                      flex="1"
                      textAlign="left"
                    >
                      Назначение #{index + 2}
                    </Text>
                    {isExpanded ? (
                      <img src="/assets/chevronUp.svg" alt="arrow up" />
                    ) : (
                      <img src="/assets/accordionChevron.svg" alt="arrow up" />
                    )}
                  </AccordionButton>
                  <AccordionPanel>
                    <Box mb="36px">
                      <Box mb="16px">
                        <Text
                          color="secondary.main"
                          fontWeight={500}
                          fontSize="16px"
                        >
                          О препарате
                        </Text>
                      </Box>
                      <Grid templateRows="repeat(3, 1fr)" gap="16px">
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].mnn`}
                            options={options}
                            title="МНН"
                            placeholder="Выберите из списка"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                        <Grid templateColumns="repeat(2, 1fr)" gap="16px">
                          <GridItem w="100%">
                            <CSelect
                              control={control}
                              name={`items[${index}].drugForm`}
                              options={options}
                              title="Лекарственная форма"
                              placeholder="Выберите из списка"
                              isClearable
                              isSearchable
                            />
                          </GridItem>
                          <GridItem w="100%">
                            <CSelect
                              control={control}
                              name={`items[${index}].drugFormDetails`}
                              options={options}
                              title="Детальное понятие формы лекарства"
                              placeholder="Выберите из списка"
                              isClearable
                              isSearchable
                            />
                          </GridItem>
                        </Grid>
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].drugMethod`}
                            options={options}
                            title="Способ введения препарата"
                            placeholder="Выберите из списка"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box mb="36px">
                      <Box mb="16px">
                        <Text
                          color="secondary.main"
                          fontWeight={500}
                          fontSize="16px"
                        >
                          Схема и график приёма
                        </Text>
                      </Box>
                      <Grid
                        templateRows="repeat(4, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        gap="16px"
                      >
                        <GridItem w="100%">
                          <CDatePicker
                            control={control}
                            name={`items[${index}].startDate`}
                            title="Дата начала"
                          />
                        </GridItem>
                        <GridItem w="100%">
                          <CDatePicker
                            control={control}
                            name={`items[${index}].endDate`}
                            title="Дата окончания"
                          />
                        </GridItem>
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].drugQuantity`}
                            options={options}
                            title="Количество приёма лекарства"
                            placeholder="0"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].measure`}
                            options={options}
                            title="Мера измерения"
                            placeholder="Выберите из списка"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].frequencyMethod`}
                            options={options}
                            title="Частота приёма лекарства"
                            placeholder="Выберите из списка"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].frequency`}
                            options={options}
                            title="Сколько раз"
                            placeholder="0"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].drugDuration`}
                            options={options}
                            title="Продолжительность приёма лекарств"
                            placeholder="Выберите из списка"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                        <GridItem w="100%">
                          <CSelect
                            control={control}
                            name={`items[${index}].period`}
                            options={options}
                            title="Выберите период"
                            placeholder="Выберите из списка"
                            isClearable
                            isSearchable
                          />
                        </GridItem>
                      </Grid>
                      <Box mt="16px">
                        <CTextArea
                          name={`items[${index}].note`}
                          title="Примечание"
                          placeholder=""
                          control={control}
                        />
                      </Box>
                    </Box>
                    <Box mb="36px">
                      <Box mb="16px">
                        <Text
                          color="secondary.main"
                          fontWeight={500}
                          fontSize="16px"
                        >
                          Укажите крайний срок действия выдаваемого рецепта
                        </Text>
                      </Box>
                      <CDatePicker
                        name={`items[${index}].expiredDate`}
                        control={control}
                        title="Срок действия рецепта"
                      />
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </motion.div>
        ))}
      </Flex>
    </Accordion>
  );
}
