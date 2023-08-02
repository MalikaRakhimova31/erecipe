import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import userData from "@/components/mock/usersData";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import TableRow from "@/features/patients/views/TableRow";

export default function RecentPatients(): React.ReactElement {
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
        Показатели враче
      </Text>
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
                {userData.slice(0, 2).map((el) => (
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
          {/* <Pagination
            currentPage={currentPage}
            totalCount={userData.length}
            pageSize={pageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
            siblingCount={1}
          /> */}
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
