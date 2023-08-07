/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { type SelectionMenuProps } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UseGetRecipeMNN } from "@/features/create-recipe/api";
import { useLocation, useSearchParams } from "react-router-dom";
import CSelect from "../CSelect/CSelect";
import CTextArea from "../CTextArea/CTextArea";
import generateMNNOptions from "./generateOptions";
import CModal from "../CModal/CModal";
import CButton from "../button/button";

interface Props {
  control: any;
  fields: any;
  errors: any;
  remove: any;
}

export default function RecipeAccordion({
  control,
  fields,
  errors,
  remove,
}: Props): React.ReactElement {
  const [searchParams] = useSearchParams();
  const [mnnOptions, setMnnOptions] = useState<SelectionMenuProps[]>();
  const [isOpen, setIsOpen] = useState({
    open: false,
    index: 0,
  });
  const location = useLocation();
  // const { data: recipeUnits } = UseGetRecipeUnits();
  // const { data: recipeMethods } = UseGetRecipeUnits({});
  const { data: recipeMNNList } = UseGetRecipeMNN(
    !!searchParams.get("id")?.length,
  );

  const handleRemoveRecipe = (index: number): void => {
    remove(index);
  };

  const handleClose = (): void => {
    setIsOpen({
      open: false,
      index: 0,
    });
  };

  // console.log("units", recipeUnits);
  // console.log("methods", recipeMethods);
  // console.log("recipeMNNList", recipeMNNList);

  useEffect(() => {
    if (recipeMNNList?.results) {
      setMnnOptions(generateMNNOptions(recipeMNNList.results));
    } else setMnnOptions([]);
  }, [recipeMNNList]);

  return (
    <>
      <Accordion allowToggle>
        <Flex
          direction="column"
          rowGap="15px"
          overflowY="auto"
          height="fit-content"
        >
          {/*   F I E L D S   A R R A Y   */}
          {Array(fields) &&
            fields.map((field: any, index: number) => (
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
                          Назначение #{index + 1}
                        </Text>
                        <Flex
                          alignItems="center"
                          direction="row-reverse"
                          columnGap="10px"
                        >
                          <div>
                            {isExpanded ? (
                              <img src="/assets/chevronUp.svg" alt="arrow up" />
                            ) : (
                              <img
                                src="/assets/accordionChevron.svg"
                                alt="arrow up"
                              />
                            )}
                          </div>
                          {!location.pathname.includes("recipe-edit") && (
                            <Box
                              onClick={() => {
                                setIsOpen({
                                  open: true,
                                  index: field.id,
                                });
                              }}
                            >
                              <img src="/assets/close.svg" alt="close icon" />
                            </Box>
                          )}
                        </Flex>
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
                          <Grid templateRows="repeat(2, 1fr)" gap="16px">
                            <GridItem w="100%">
                              <CSelect
                                control={control}
                                name={`items[${index}].mnn`}
                                options={mnnOptions}
                                title="МНН"
                                placeholder="Выберите из списка"
                                isClearable
                                isSearchable
                                required
                                errors={
                                  Boolean(errors) &&
                                  Boolean(errors.items) &&
                                  errors?.items[index]?.mnn
                                }
                              />
                            </GridItem>
                            <Grid templateColumns="repeat(2, 1fr)" gap="16px">
                              <GridItem w="100%">
                                {/* drugType */}
                                <CSelect
                                  control={control}
                                  name={`items[${index}].unit`}
                                  options={mnnOptions}
                                  title="Форма лекарства"
                                  placeholder="Выберите из списка"
                                  isClearable
                                  isSearchable
                                  required
                                  errors={
                                    Boolean(errors) &&
                                    Boolean(errors.items) &&
                                    errors?.items[index]?.unit
                                  }
                                />
                              </GridItem>
                              <GridItem w="100%">
                                {/* drugTypeDetails */}
                                <CSelect
                                  control={control}
                                  name={`items[${index}].method`}
                                  options={mnnOptions}
                                  title="Способ введения препарата"
                                  placeholder="Выберите из списка"
                                  isClearable
                                  isSearchable
                                  required
                                  errors={
                                    Boolean(errors) &&
                                    Boolean(errors.items) &&
                                    errors?.items[index]?.method
                                  }
                                />
                              </GridItem>
                            </Grid>
                            <GridItem w="100%">
                              <CTextArea
                                name={`items[${index}].note`}
                                title="Примечание"
                                placeholder=""
                                control={control}
                                required
                                errors={
                                  Boolean(errors) &&
                                  Boolean(errors.items) &&
                                  errors?.items[index]?.note
                                }
                              />
                            </GridItem>
                          </Grid>
                        </Box>
                        {/* <Box mb="36px">
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
                      </Box> */}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </motion.div>
            ))}
        </Flex>
      </Accordion>
      <CModal isOpen={isOpen.open} onClose={handleClose}>
        <>
          <ModalHeader>Подтвердите действие</ModalHeader>
          <ModalBody maxW="25rem">
            <Text textAlign="center">
              Вы уверены, что хотите отменить создание е-рецепта? Все данные
              будут утеряны
            </Text>
          </ModalBody>
          <ModalFooter>
            <CButton
              buttonType="button"
              onClick={handleClose}
              variant="ghost"
              text="Отмена"
            />
            <CButton
              buttonType="button"
              onClick={() => {
                handleRemoveRecipe(isOpen.index);
                handleClose();
              }}
              variant="danger"
              text="Удалить"
            />
          </ModalFooter>
        </>
      </CModal>
    </>
  );
}
