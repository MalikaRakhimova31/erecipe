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
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import TableRow from "@/features/patients/views/TableRow";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../api";

export default function RecentPatients(): React.ReactElement {
  const { data: patientsData } = useQuery({
    queryKey: ["patients"],
    queryFn: async () => {
      const res = await getPatients();
      return res;
    },
  });

  const patients = patientsData?.results;

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
      {Array.isArray(patients) ? (
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
                {patients.map((el) => (
                  <TableRow
                    src={el.birth_date}
                    name={`${el.lastname} ${el.firstname} ${el.middlename}`}
                    date={el.last_visited}
                    id={el.id}
                    key={el.id}
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
