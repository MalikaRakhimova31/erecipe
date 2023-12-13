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

export default function RecipeTable({
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
    <TableContainer borderRadius="8px" border="1px solid #E7EAF0" h="100%">
      <Table variant="simple">
        <Thead bg="#F8FAFB">
          <Tr>
            {headData?.map((el: any, index: number) => (
              <Th key={el} paddingLeft={index === 0 ? "20px" : "0"}>
                {el}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {bodyData?.map((el: any) => (
            <Tr
              key={9 + 9}
              onClick={() => {
                handleNavigate(path, el.id);
              }}
            >
              {Object.keys(el).map((key: string, idc) => {
                if (key === "id") return null;
                return (
                  <Td key={key} paddingLeft={idc === 0 ? "20px" : "0"}>
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
