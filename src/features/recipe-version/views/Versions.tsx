/* eslint-disable @typescript-eslint/restrict-template-expressions */
import StatusBox from "@/components/StatusBox/StatusBox";
import CButton from "@/components/button/button";
import { useHaveAccessTo } from "@/helpers/have-access-to";
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
import { useMemo } from "react";
import JoinedTable from "@/components/JoinedTable/JoinedTable";

export default function Versions({ recipe }: any): React.ReactElement {
  const navigate = useNavigate();
  const isDoctor = useHaveAccessTo("edit-recipe-button");
  console.log("recipe", recipe);
  const isMinistryOrganizationTable = useHaveAccessTo(
    "recipe-version-organization-ministry",
  );
  const isDoctorOrganizationTable = useHaveAccessTo(
    "recipe-version-organization-doctor",
  );

  const organizationMinistryTH = [
    "Название аптеки",
    "Адрес",
    "Дата выдачи",
    "Номер телефона",
    "выданное назначение",
  ];
  const organizationDoctorTH = [
    "Название аптеки",
    "Адрес",
    "Дата выдачи",
    "Номер телефона",
    "Аптека",
  ];

  const organizationMinistryTable = useMemo(
    () =>
      isMinistryOrganizationTable &&
      recipe?.orders?.map((el: any, index: number) => ({
        name: el?.pharmacy?.organization?.ru,
        adress: el?.address[0]?.district?.name?.ru,
        givenDate: el?.created_at,
        phones: el?.phones?.map((phone: any) => (
          <div key={phone?.id}>{phone?.value}</div>
        )),
        mnn: `Назначение #${el?.order_items[index]?.recipe_item}`,
      })),
    [recipe, isMinistryOrganizationTable],
  );

  const organizationDoctorTB = useMemo(
    () =>
      isDoctorOrganizationTable &&
      recipe?.orders?.map((el: any) => ({
        name: el?.pharmacy?.organization?.ru,
        givenDate: el?.created_at,
        phones: el.phones.map((phone: any) => (
          <div key={phone?.id}>{phone?.value}</div>
        )),
        // pharmacy: el.
      })),
    [recipe, isDoctorOrganizationTable],
  );

  return (
    <Box mt="24px">
      {isDoctorOrganizationTable && recipe?.orders?.length > 0 && (
        <Box my={4}>
          <Flex alignItems="center" gap={3} mb={4}>
            <OrganizationIcon />
            <Text
              fontWeight={600}
              lineHeight="150%"
              color="#393D4E"
              fontSize={16}
            >
              Информация об выданных лекарствах
            </Text>
          </Flex>
          <Box
            bg="white"
            borderRadius="8px"
            px="20px"
            py={6}
            border="1px solid #E7EAF0"
            w="100%"
          >
            <JoinedTable
              bodyData={organizationDoctorTB}
              headData={organizationDoctorTH}
              loading={false}
            />
          </Box>
        </Box>
      )}
      {isMinistryOrganizationTable && recipe?.orders?.length > 0 && (
        <Box my={4} mb={2}>
          <Flex alignItems="center" gap={3} mb={4}>
            <OrganizationIcon />
            <Text
              fontWeight={600}
              lineHeight="150%"
              color="#393D4E"
              fontSize={16}
            >
              Информация об выданных лекарствах
            </Text>
          </Flex>
          <Box
            bg="white"
            borderRadius="8px"
            px="20px"
            py={6}
            border="1px solid #E7EAF0"
            w="100%"
          >
            <JoinedTable
              bodyData={organizationMinistryTH}
              headData={organizationMinistryTable}
              loading={false}
            />
          </Box>
        </Box>
      )}
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
          {isDoctor && recipe?.items?.length > 0 && (
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
                          {item?.mnn.name.ru}
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
                          {item?.unit.name.ru}
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
                          {item?.method.name.ru}
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

function OrganizationIcon(): React.ReactElement {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L1 21"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 21V5C16 3.11438 16 2.17157 15.4142 1.58579C14.8284 1 13.8856 1 12 1H10C8.11438 1 7.17157 1 6.58579 1.58579C6 2.17157 6 3.11438 6 5V21"
        stroke="#8E93AA"
        strokeWidth="1.5"
      />
      <path
        d="M20 21V7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4"
        stroke="#8E93AA"
        strokeWidth="1.5"
      />
      <path
        d="M2 21V7.5C2 6.09554 2 5.39331 2.33706 4.88886C2.48298 4.67048 2.67048 4.48298 2.88886 4.33706C3.39331 4 4.09554 4 5.5 4"
        stroke="#8E93AA"
        strokeWidth="1.5"
      />
      <path
        d="M11 21V18"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 11H13"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 10H6"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 13H6"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 10H17.5"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 13H17.5"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 7H6"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 7H17.5"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 14H13"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 8V4"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6L9 6"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
