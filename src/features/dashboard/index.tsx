import TitleWithIcon from "@/components/TitleWithIcon/TitleWithIcon";
import { Box, Flex, Text } from "@chakra-ui/react";
import { type SelectionMenuProps } from "@/types";
import USelect from "@/components/USelect/USelect";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Chart from "react-apexcharts";
import {
  mainDoctorsListTH,
  patientIndicatorsTH,
} from "@/components/mock/tableHeaders";
import JoinedTable from "@/components/JoinedTable/JoinedTable";
import Pagination from "@/components/Pagination/Pagination";
import RecentPatients from "./views/RecentPatients";
import LineGraph from "./views/LineGraph";
import { getRecipeStatDate } from "./api";
import useStatsState from "./views/state";

const options: SelectionMenuProps[] = [
  {
    value: "yearly",
    label: "За год",
  },
  {
    value: "monthly",
    label: "За месяц",
  },
];

export default function Dashboard(): React.ReactElement {
  const [dateTime, setDateTime] = useState(options[0]);
  const {
    patientsStats,
    patientsDoughnut,
    patientsDoughnutSeries,
    recipeDoughnut,
    recipeDoughnutSeries,
    recipeStats,
    practitionerCount,
    isPractitionerCount,
    healthMinistryTable,
    patientsIndicatorTB,
    isDoctor,
    PAGE_SIZE,
    currentPage,
    setCurrentPage,
    patientsData,
    patientsLoading,
    doctorsTB,
    doctorsLoading,
    doctors,
    isMainDoctor,
  } = useStatsState();

  const { data } = useQuery({
    queryKey: ["recipe-stats-date"],
    queryFn: async () => {
      const res = await getRecipeStatDate();
      return res;
    },
  });

  const handleChange = (e: SelectionMenuProps): void => {
    setDateTime(e);
  };

  return (
    <Flex p={4} direction="column" rowGap="16px">
      <Flex alignItems="center" justifyContent="space-between" columnGap="16px">
        <TitleWithIcon
          icon={<PersonIcon />}
          title="Кол-во принятых пациентов за текущий месяц"
          text={patientsStats?.current}
        />
        {isPractitionerCount && (
          <TitleWithIcon
            icon={<DocumentIcon />}
            title="Кол-во работающих врачей в области"
            text={practitionerCount?.count}
          />
        )}
        <TitleWithIcon
          icon={<BottleIcon />}
          title="Кол-во выписанных назначений в рецептах"
          text={recipeStats?.current}
        />
        <TitleWithIcon
          icon={<BottleIcon />}
          title="Кол-во выписанных назначений в области"
          text={recipeStats?.total_recipe_items}
        />
      </Flex>
      <Flex columnGap="16px" width="100%">
        <Flex
          flex={1}
          borderRadius="8px"
          bg="white"
          p={5}
          border="1px solid #E7EAF0"
          width="100%"
          id="custom-line-graph"
          direction="column"
          rowGap="32px"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Text color="secondary.main" fontSize="18px" fontWeight="500">
              Статистика выданных рецептов
            </Text>
            <Box width="230px">
              <USelect
                placeholder=""
                searchIcon={false}
                options={options}
                // defaultValue={options[0]}
                value={dateTime}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Box>
          </Flex>
          <LineGraph
            labels={data?.data?.map((month) => month.item) ?? []}
            values={data?.data?.map((month) => month.count) ?? []}
          />
        </Flex>
        <Flex w="32.4%" direction="column" rowGap="16px">
          <Flex
            border="1px solid #E7EAF0"
            borderRadius="8px"
            py={4}
            px={5}
            bg="white"
          >
            <Chart
              type="donut"
              options={patientsDoughnut ?? []}
              series={patientsDoughnutSeries ?? []}
            />
          </Flex>
          <Flex
            border="1px solid #E7EAF0"
            borderRadius="8px"
            py={4}
            px={5}
            bg="white"
          >
            <Chart
              type="donut"
              options={recipeDoughnut ?? []}
              series={recipeDoughnutSeries ?? []}
            />
          </Flex>
        </Flex>
      </Flex>
      {healthMinistryTable && <RecentPatients />}
      {isDoctor && (
        <Box
          bg="white"
          borderRadius="8px"
          px="20px"
          py={6}
          border="1px solid #E7EAF0"
          w="100%"
        >
          <Text
            fontSize="18px"
            fontWeight={500}
            color="secondary.main"
            mb="8px"
          >
            Недавние пациенты
          </Text>
          <Flex direction="column" justifyContent="space-between" h="100%">
            <JoinedTable
              headData={patientIndicatorsTH}
              bodyData={patientsIndicatorTB}
              loading={patientsLoading}
              path="patients"
            />
            <Pagination
              pageSize={PAGE_SIZE}
              totalCount={patientsData?.count ?? 1}
              siblingCount={1}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </Flex>
        </Box>
      )}
      {isMainDoctor && (
        <Box
          bg="white"
          borderRadius="8px"
          px="20px"
          py={6}
          border="1px solid #E7EAF0"
          w="100%"
        >
          <Text
            fontSize="18px"
            fontWeight={500}
            color="secondary.main"
            mb="8px"
          >
            Показатели врачей
          </Text>
          <Flex direction="column" justifyContent="space-between" h="100%">
            <JoinedTable
              headData={mainDoctorsListTH}
              bodyData={doctorsTB}
              loading={doctorsLoading}
            />
            <Pagination
              pageSize={PAGE_SIZE}
              totalCount={doctors?.count ?? 1}
              siblingCount={1}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </Flex>
        </Box>
      )}
    </Flex>
  );
}

function PersonIcon(): React.ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 13H16V18C16 19.8856 16 20.8284 15.4142 21.4142C14.8284 22 13.8856 22 12 22C10.1144 22 9.17157 22 8.58579 21.4142C8 20.8284 8 19.8856 8 18V13Z"
        fill="#EBFAF9"
      />
      <path
        d="M8 13H16M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13M8 13C6.28928 13 4.84936 14.2804 4.64948 15.9795L4 21.5M16 13C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5"
        stroke="#0ABAB5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
        fill="white"
        stroke="#0ABAB5"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function DocumentIcon(): React.ReactElement {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3.66675" y="2" width="18" height="20" rx="4" fill="#EBFAF9" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6103 1.25H13.7232C15.5609 1.24998 17.0166 1.24997 18.1558 1.40314C19.3282 1.56076 20.2771 1.89288 21.0255 2.64124C21.7739 3.38961 22.106 4.33856 22.2636 5.51098C22.4168 6.65019 22.4168 8.10583 22.4167 9.94359V14.0564C22.4168 15.8942 22.4168 17.3498 22.2636 18.489C22.106 19.6614 21.7739 20.6104 21.0255 21.3588C20.2771 22.1071 19.3282 22.4392 18.1558 22.5969C17.0166 22.75 15.5609 22.75 13.7232 22.75H11.6103C9.77258 22.75 8.31694 22.75 7.17773 22.5969C6.0053 22.4392 5.05635 22.1071 4.30799 21.3588C3.55963 20.6104 3.22751 19.6614 3.06988 18.489C2.91672 17.3498 2.91673 15.8942 2.91675 14.0564V9.94358C2.91673 8.10582 2.91672 6.65019 3.06988 5.51098C3.22751 4.33856 3.55963 3.38961 4.30799 2.64124C5.05635 1.89288 6.0053 1.56076 7.17773 1.40314C8.31694 1.24997 9.77257 1.24998 11.6103 1.25ZM7.3776 2.88976C6.37151 3.02502 5.79186 3.27869 5.36865 3.7019C4.94544 4.12511 4.69177 4.70476 4.55651 5.71085C4.41834 6.73851 4.41675 8.09318 4.41675 10V14C4.41675 15.9068 4.41834 17.2615 4.55651 18.2892C4.69177 19.2952 4.94544 19.8749 5.36865 20.2981C5.79186 20.7213 6.37151 20.975 7.3776 21.1102C8.40526 21.2484 9.75993 21.25 11.6667 21.25H13.6667C15.5736 21.25 16.9282 21.2484 17.9559 21.1102C18.962 20.975 19.5416 20.7213 19.9648 20.2981C20.3881 19.8749 20.6417 19.2952 20.777 18.2892C20.9152 17.2615 20.9167 15.9068 20.9167 14V10C20.9167 8.09318 20.9152 6.73851 20.777 5.71085C20.6417 4.70476 20.3881 4.12511 19.9648 3.7019C19.5416 3.27869 18.962 3.02502 17.9559 2.88976C16.9282 2.75159 15.5736 2.75 13.6667 2.75H11.6667C9.75993 2.75 8.40526 2.75159 7.3776 2.88976ZM12.6667 5.25C13.0809 5.25 13.4167 5.58579 13.4167 6V7.25L14.6667 7.25C15.0809 7.25 15.4167 7.58579 15.4167 8C15.4167 8.41421 15.0809 8.75 14.6667 8.75L13.4167 8.75L13.4167 10C13.4167 10.4142 13.0809 10.75 12.6667 10.75C12.2525 10.75 11.9167 10.4142 11.9167 10L11.9167 8.75H10.6667C10.2525 8.75 9.91672 8.41421 9.91672 8C9.91672 7.58579 10.2525 7.25 10.6667 7.25H11.9167V6C11.9167 5.58579 12.2525 5.25 12.6667 5.25ZM7.91675 14C7.91675 13.5858 8.25253 13.25 8.66675 13.25H16.6667C17.081 13.25 17.4167 13.5858 17.4167 14C17.4167 14.4142 17.081 14.75 16.6667 14.75H8.66675C8.25253 14.75 7.91675 14.4142 7.91675 14ZM8.91675 18C8.91675 17.5858 9.25253 17.25 9.66675 17.25H15.6667C16.081 17.25 16.4167 17.5858 16.4167 18C16.4167 18.4142 16.081 18.75 15.6667 18.75H9.66675C9.25253 18.75 8.91675 18.4142 8.91675 18Z"
        fill="#0ABAB5"
      />
    </svg>
  );
}

function BottleIcon(): React.ReactElement {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4.33325" y="10" width="16" height="8" fill="#EBFAF9" />
      <rect x="6.33325" y="2" width="12" height="3" fill="#EBFAF9" />
      <path
        d="M6.33325 3.5C6.33325 3.03406 6.33325 2.80109 6.40937 2.61732C6.51087 2.37229 6.70554 2.17761 6.95057 2.07612C7.13434 2 7.36731 2 7.83325 2H16.8333C17.2992 2 17.5322 2 17.7159 2.07612C17.961 2.17761 18.1556 2.37229 18.2571 2.61732C18.3333 2.80109 18.3333 3.03406 18.3333 3.5C18.3333 3.96594 18.3333 4.19891 18.2571 4.38268C18.1556 4.62771 17.961 4.82239 17.7159 4.92388C17.5322 5 17.2992 5 16.8333 5H7.83325C7.36731 5 7.13434 5 6.95057 4.92388C6.70554 4.82239 6.51087 4.62771 6.40937 4.38268C6.33325 4.19891 6.33325 3.96594 6.33325 3.5Z"
        stroke="#0ABAB5"
        strokeWidth="1.5"
      />
      <path
        d="M4.83325 18H19.8333"
        stroke="#0ABAB5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.83325 10H19.8333"
        stroke="#0ABAB5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.83447 7.79902L8.2376 5.87652C8.78013 5.4425 9.05139 5.22549 9.3728 5.11274C9.69421 5 10.0416 5 10.7364 5H13.976C14.677 5 15.0276 5 15.3515 5.11466C15.6754 5.22933 15.9478 5.44989 16.4927 5.89102L18.85 7.79931C19.7882 8.55877 20.3333 9.70126 20.3333 10.9083V17.5649C20.3333 18.4927 20.0108 19.3916 19.421 20.1078L19.0627 20.5428C18.3029 21.4655 17.1702 22 15.975 22H9.29018C8.71907 22 8.43352 22 8.16282 21.9628C7.35986 21.8526 6.60933 21.5011 6.01063 20.9548C5.80879 20.7706 5.62597 20.5513 5.26037 20.1125C4.66132 19.3937 4.33325 18.4875 4.33325 17.5518V10.9225C4.33325 9.70736 4.88561 8.55811 5.83447 7.79902Z"
        stroke="#0ABAB5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.3333 12V16M10.3333 14L14.3333 14"
        stroke="#0ABAB5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
