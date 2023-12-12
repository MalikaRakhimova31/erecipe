import SeparatedTable from "@/components/SeparatedTable/SeparatedTable";
import UInput from "@/components/UInput/UInput";
import { Box, Flex } from "@chakra-ui/react";
import Pagination from "@/components/Pagination/Pagination";
import useIssueHistory from "./views/state";

export default function IssueHistory(): React.ReactElement {
  const {
    orders,
    tableBody,
    ordersLoading,
    currentPage,
    setCurrentPage,
    PAGE_SIZE,
    search,
    setSearch,
  } = useIssueHistory();

  const tHead = [
    "ID рецепта",
    "создан",
    "Выдан",
    "Пациент",
    "КОЛ-ВО",
    "Статус",
    "Действия",
  ];

  return (
    <Flex direction="column" p={4} rowGap={4}>
      <Box>
        <UInput
          placeholder="Поиск по ID рецепта"
          icon="/assets/search.svg"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Box>
      <SeparatedTable
        headData={tHead}
        bodyData={tableBody}
        loading={ordersLoading}
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        totalCount={orders?.count ?? 0}
        pageSize={PAGE_SIZE}
        siblingCount={1}
      />
    </Flex>
  );
}
