import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { type TableProps } from "@/types";
import { Link, useNavigate } from "react-router-dom";

export default function JoinedTable({
  headData,
  bodyData,
  hasPath = false,
  path = "",
}: TableProps): React.ReactElement {
  const navigate = useNavigate();
  const handleNavigate = (url: string, id: string): void => {
    if (hasPath) {
      navigate(`/${url}/${id}`);
    }
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headData?.map((el) => (
              <Th key={el}>{el}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {bodyData?.map((el) => (
            <Tr
              key={9 + 9}
              onClick={() => {
                handleNavigate(path, el.id);
              }}
            >
              {Object.keys(el).map((key: string) => {
                if (key === "id") return null;
                return (
                  <Td key={key}>
                    {key === "edit" ? (
                      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                      <Link to={`/${path}/${el.id}`}>{el[key]}</Link>
                    ) : (
                      el[key]
                    )}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
