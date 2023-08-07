/* eslint-disable react/require-default-props */
import { Box, Flex, Text } from "@chakra-ui/react";
import Pagination from "@/components/Pagination/Pagination";
import { useMemo } from "react";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import JoinedTable from "@/components/JoinedTable/JoinedTable";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import { format } from "date-fns";

interface Props {
  // eslint-disable-next-line react/require-default-props
  patients?: any;
  pageSize: number;
  currentPage: number;
  setCurrentPage: (c: number) => void;
}

export default function PatientsTable({
  patients,
  pageSize,
  currentPage,
  setCurrentPage,
}: Props): React.ReactElement {
  const generateUserData = useMemo(
    () =>
      patients?.results?.map((patient: any) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        id: `${patient.id}&${patient.nnuzb}`,
        patient: (
          <UserInfoBox
            src="/assets/users/user1.png"
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            name={`${patient?.firstname} ${patient?.lastname}`}
          />
        ),
        lastVisit: format(new Date(patient.last_visited), "dd/MM/yyyy (HH:mm)"),
        edit: (
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="#EBFAF9"
            borderRadius="8px"
            px="16px"
            py="12px"
            w="fit-content"
          >
            <Text color="primary.main" fontSize="12px" fontWeight="500">
              Все рецепты
            </Text>
          </Flex>
        ),
      })),
    [patients],
  );

  const tableHead = ["ФИО пациента", "последний визит", "Действия"];

  return (
    <Box
      bg="white"
      borderRadius="8px"
      px="20px"
      border="1px solid #E7EAF0"
      minH="82vh"
      w="100%"
    >
      {generateUserData?.length > 0 ? (
        <Flex direction="column" justifyContent="space-between" h="100%">
          <JoinedTable
            headData={tableHead}
            bodyData={generateUserData}
            hasPath
            path="patients"
          />

          <Pagination
            currentPage={currentPage}
            totalCount={patients.count}
            pageSize={pageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
            siblingCount={1}
          />
        </Flex>
      ) : (
        <EmptyBox
          icon="/assets/patientsBig.svg"
          title="Список пациентов пуст"
          description="Здесь будет отображаться список Ваших пациентов, которым вы выписывали рецепт"
        />
      )}
    </Box>
  );
}
