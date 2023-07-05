import PatientBox from "@/components/PatientBox.tsx/PatientBox";
import RecipeHistoryCard from "@/components/RecipeHistoryCard/RecipeHistoryCard";
import USelect from "@/components/USelect/USelect";
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import historyData from "@/components/mock/historyData";
import { useMemo, useRef, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";

const pageSize = 5;
export default function RecipeHistory(): React.ReactElement {
  const searchRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return historyData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const theader = [
    "ID рецепта",
    "создан",
    "Действует",
    "кол-во версий",
    "Статус",
    "Действия",
  ];
  const options: any = [
    { value: "001", label: "Recipeee" },
    { value: "002", label: "Kecipeee" },
    { value: "003", label: "Apple" },
    { value: "004", label: "Butter" },
    { value: "005", label: "Butterfly" },
  ];
  return (
    <Flex columnGap="16px" w="full" minH="89vh" p="4">
      <Flex direction="column" rowGap="16px" flex="1">
        <USelect
          searchIcon
          isSearchable
          isClearable
          placeholder="Поиск по ID рецепта"
          options={options}
        />
        <Flex direction="column" justifyContent="space-between" h="100%">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  {theader.map((th: string, index) => (
                    <Th
                      borderBottom="none"
                      key={`${th}`}
                      paddingLeft={index === 0 ? `16px` : 0}
                      paddingRight={index === 0 ? `16px` : 0}
                    >
                      {th}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {currentTableData.map((el) => (
                  <>
                    <RecipeHistoryCard
                      id={el.id}
                      created={el.created}
                      expire={el.expire}
                      version={el.version}
                      status={el.status}
                    />
                    <span className="mx-[6px]" />
                  </>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Pagination
            currentPage={currentPage}
            totalCount={historyData.length}
            pageSize={pageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
            siblingCount={1}
          />
        </Flex>
      </Flex>
      <Box width="29.4%">
        <PatientBox searchRef={searchRef} />
      </Box>
    </Flex>
  );
}
