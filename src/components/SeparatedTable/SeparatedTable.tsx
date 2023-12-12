import {
  Flex,
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

export default function SeparatedTable({
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
    <Flex direction="column" justifyContent="space-between" h="100%" w="full">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {headData.map((th: string, index) => (
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
            {bodyData?.map((el: any) => (
              <>
                <Tr
                  bg="white"
                  onClick={() => {
                    handleNavigate(path, el.id);
                  }}
                  cursor={hasPath ? "pointer" : "default"}
                >
                  {Object.keys(el).map((key: string, idc: number) => (
                    <Td
                      border="none"
                      borderTopLeftRadius={idc === 0 ? "8px" : 0}
                      borderBottomLeftRadius={idc === 0 ? "8px" : 0}
                      borderTopEndRadius={
                        idc === Object.keys(el).length - 1 ? "8px" : 0
                      }
                      borderBottomEndRadius={
                        idc === Object.keys(el).length - 1 ? "8px" : 0
                      }
                      paddingRight={
                        idc === Object.keys(el).length - 1 ? "20px" : 0
                      }
                      paddingLeft={idc === 0 ? "20px" : 0}
                      key={key}
                      fontWeight={idc === 0 ? 500 : 400}
                    >
                      {key === "edit" ? (
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        <Link to={`${path}/${el.id}`}>{el[key]}</Link>
                      ) : (
                        el[key]
                      )}
                    </Td>
                  ))}
                </Tr>
                <span className="m-3" />
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
