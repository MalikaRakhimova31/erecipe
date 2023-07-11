import { Box, Flex, Text } from "@chakra-ui/react";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import JoinedTable from "@/components/JoinedTable/JoinedTable";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import { format } from "date-fns";

const pageSize = 5;

export default function PatientsTable(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const date = new Date();

  const userData = [
    {
      id: 1,
      patient: (
        <UserInfoBox src="/assets/users/user1.png" name="Ахрор Саидов" />
      ),
      lastVisit: format(date, "dd/MM/yyyy (HH:mm)"),
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
    },
  ];
  const tableHead = ["ФИО пациента", "последний визит", "Действия"];

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   return userData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);
  return (
    <Box
      bg="white"
      borderRadius="8px"
      px="20px"
      border="1px solid #E7EAF0"
      minH="82vh"
      w="100%"
    >
      {userData.length > 0 ? (
        <Flex direction="column" justifyContent="space-between" h="100%">
          <JoinedTable
            headData={tableHead}
            bodyData={userData}
            hasPath
            path="patients"
          />

          <Pagination
            currentPage={currentPage}
            totalCount={userData.length}
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
