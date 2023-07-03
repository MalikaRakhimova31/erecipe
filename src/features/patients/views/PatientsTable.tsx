import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import userData from "@/components/mock/usersData";
import TableRow from "./TableRow";

export default function PatientsTable(): React.ReactElement {
  return (
    <Box
      bg="white"
      borderRadius="8px"
      // py="16px"
      px="20px"
      border="1px solid #E7EAF0"
    >
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
            {userData.map((el) => (
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
    </Box>
  );
}
