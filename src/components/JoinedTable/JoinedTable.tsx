import {
  Skeleton,
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
  loading,
}: TableProps): React.ReactElement {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4];
  const handleNavigate = (url: string, id: string): void => {
    if (hasPath) {
      navigate(`/${url}/${id}`);
    }
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          {loading ? (
            <Tr>
              <Th>
                <div />
              </Th>
            </Tr>
          ) : (
            <Tr>
              {headData?.map((el: any) => (
                <Th key={el}>{el}</Th>
              ))}
            </Tr>
          )}
        </Thead>
        <Tbody>
          {loading
            ? arr.map((el) => (
                <Tr key={el}>
                  <Td>
                    <Skeleton
                      key={`skeleton-table-${el}`}
                      height={10}
                      width="100%"
                      borderRadius="8px"
                      size="sm"
                    />
                  </Td>
                </Tr>
              ))
            : bodyData?.map((el: any) => (
                <Tr
                  key={el.id}
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
