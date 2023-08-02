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

export default function Versions(): React.ReactElement {
  const navigate = useNavigate();

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
                navigate(`/patients/recipe-edit`);
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
                  <Box mr="100px">
                    <StatusBox status="declined" />
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
                        Бисопролол
                      </Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Text color="#8E93AA" fontSize="14px" fontWeight="400">
                        МНН
                      </Text>
                      <Text
                        color="secondary.main"
                        fontSize="14px"
                        fontWeight="400"
                      >
                        Бисопролол
                      </Text>
                    </Flex>
                  </Flex>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Flex>
      </Accordion>
    </Box>
  );
}
