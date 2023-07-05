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
import userData from "@/components/mock/usersData";
import Pagination from "@/components/Pagination/Pagination";
import { useMemo, useState } from "react";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import TableRow from "./TableRow";

const pageSize = 5;

export default function PatientsTable(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return userData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
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
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th w="65%">ФИО пациента</Th>
                  <Th>последний визит</Th>
                  <Th>Действия</Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentTableData.map((el) => (
                  <TableRow
                    src={el.src}
                    name={el.name}
                    date={el.lastInvite}
                    id={el.userId}
                    key={`${el.name}+${el.userId}`}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
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
