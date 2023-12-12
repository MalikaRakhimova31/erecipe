import { Box, Flex, Text } from "@chakra-ui/react";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import JoinedTable from "@/components/JoinedTable/JoinedTable";
import { healthMinistryDashTH } from "@/components/mock/tableHeaders";
import Pagination from "@/components/Pagination/Pagination";
import useStatsState from "./state";

export default function RecentPatients(): React.ReactElement {
  const {
    organizationsLoading,
    healthMinistryDashTableBody,
    PAGE_SIZE,
    currentPage,
    setCurrentPage,
    oraganizationsData,
  } = useStatsState();

  if (oraganizationsData?.results?.length === 0) {
    <EmptyBox
      icon="/assets/patientsBig.svg"
      title="Список пациентов пуст"
      description="Здесь будет отображаться список Ваших пациентов, которым вы выписывали рецепт"
    />;
  }

  return (
    <Box
      bg="white"
      borderRadius="8px"
      px="20px"
      py={6}
      border="1px solid #E7EAF0"
      w="100%"
    >
      <Text fontSize="18px" fontWeight={500} color="secondary.main" mb="8px">
        Показатели поликлиник в Ташкентской области
      </Text>
      <Flex direction="column" justifyContent="space-between" h="100%">
        <JoinedTable
          headData={healthMinistryDashTH}
          bodyData={healthMinistryDashTableBody}
          loading={organizationsLoading}
        />
        <Pagination
          currentPage={currentPage}
          totalCount={oraganizationsData?.count ?? 0}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
          siblingCount={1}
        />
      </Flex>
    </Box>
  );
}
