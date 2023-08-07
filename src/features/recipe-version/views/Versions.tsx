/* eslint-disable @typescript-eslint/restrict-template-expressions */
import StatusBox from "@/components/StatusBox/StatusBox";
import CButton from "@/components/button/button";
import {
  Flex,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Versions({ recipe }: any): React.ReactElement {
  const navigate = useNavigate();
  console.log("recipe versions", recipe);
  return (
    <Box mt="24px">
      <Flex alignItems="center" justifyContent="space-between" mb="15px">
        <Flex columnGap="12px">
          <img src="/assets/timer.svg" alt="timer" />
          <Text
            fontSize="16px"
            fontWeight="600"
            color="secondary.main"
            columnGap="12px"
          >
            Версия 2.0
          </Text>
          <Text fontSize="16px" fontWeight="400" color="#8E93AA">
            (последнее обновление 02/06/2023 (11:30))
          </Text>
        </Flex>
        <Flex>
          {import.meta.env.VITE_ROLE === "DOCTOR" && (
            <CButton
              variant="unstyled"
              text="Редактировать"
              icon={<img src="/assets/editPencil.svg" alt="pencil" />}
              buttonType="button"
              onClick={() => {
                navigate(
                  `/patients/recipe-edit?nnuzb=${recipe?.patient?.nnuzb}&id=${recipe?.patient?.id}&recipe-id=${recipe?.uid}`,
                );
              }}
            />
          )}
        </Flex>
      </Flex>
      <Accordion allowToggle>
        <Flex
          direction="column"
          rowGap="15px"
          overflowY="auto"
          height="fit-content"
        >
          {recipe?.items?.map((item: any, index: number) => (
            <AccordionItem key={`${item?.note}${item?.uid}`}>
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
                    <Box mr="100px">
                      <StatusBox status={recipe.status} />
                    </Box>
                    {isExpanded ? (
                      <img src="/assets/chevronUp.svg" alt="arrow up" />
                    ) : (
                      <img src="/assets/accordionChevron.svg" alt="arrow up" />
                    )}
                  </AccordionButton>
                  <AccordionPanel>
                    <Flex direction="column" rowGap="16px">
                      <Flex alignItems="center" justifyContent="space-between">
                        <Text color="#8E93AA" fontSize="14px" fontWeight="400">
                          МНН
                        </Text>
                        <Text
                          color="secondary.main"
                          fontSize="14px"
                          fontWeight="400"
                        >
                          {item?.mnn}
                        </Text>
                      </Flex>
                      <Flex alignItems="center" justifyContent="space-between">
                        <Text color="#8E93AA" fontSize="14px" fontWeight="400">
                          Форма лекарства
                        </Text>
                        <Text
                          color="secondary.main"
                          fontSize="14px"
                          fontWeight="400"
                        >
                          {item?.unit}
                        </Text>
                      </Flex>
                      <Flex alignItems="center" justifyContent="space-between">
                        <Text color="#8E93AA" fontSize="14px" fontWeight="400">
                          Способ введения препарата
                        </Text>
                        <Text
                          color="secondary.main"
                          fontSize="14px"
                          fontWeight="400"
                        >
                          {item?.method}
                        </Text>
                      </Flex>
                      <Flex alignItems="center" justifyContent="space-between">
                        <Text color="#8E93AA" fontSize="14px" fontWeight="400">
                          Примечание
                        </Text>
                        <Text
                          color="secondary.main"
                          fontSize="14px"
                          fontWeight="400"
                        >
                          {item?.note}
                        </Text>
                      </Flex>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Flex>
      </Accordion>
    </Box>
  );
}
