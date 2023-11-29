import { Flex, Td, Text, Tr } from "@chakra-ui/react";
import format from "date-fns/format";
import { Link } from "react-router-dom";

interface Props {
  src: string;
  name: string;
  date: string;
  id: string | number;
}

export default function TableRow({
  src,
  name,
  date,
  id,
}: Props): React.ReactElement {
  return (
    <Tr>
      <Td>
        <Flex alignItems="center" columnGap="12px" justifyContent="left">
          <Flex
            alignItems="center"
            justifyContent="center"
            w="36px"
            h="36px"
            borderRadius="50%"
            overflow="hidden"
          >
            <img
              src="/assets/users/user1.png"
              alt="patient"
              className="object-cover"
            />
          </Flex>
          {name}
        </Flex>
      </Td>
      <Td>{format(new Date(date), "dd/MM/yyyy (HH:mm)")}</Td>
      <Td>
        <Link to={`/patients/${id}`}>
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="#EBFAF9"
            borderRadius="8px"
            px="16px"
            py="12px"
            w="fit-content"
          >
            <Text color="primary.main" fontSize="12px" fontWeight="500">
              Все рецепты
            </Text>
          </Flex>
        </Link>
      </Td>
    </Tr>
  );
}
