import { Text, Flex, Box } from "@chakra-ui/react";
import { type RefObject } from "react";
import CButton from "../button/button";

interface Props {
  searchRef: RefObject<HTMLInputElement>;
}

export default function PatientBox({ searchRef }: Props): React.ReactElement {
  const handleFocus = (): void => {
    if (searchRef.current != null) {
      searchRef.current.focus();
    }
  };
  console.log(searchRef);
  return (
    <Box
      bg="white"
      borderRadius="8px"
      //   height="602px"
      border="1px solid #E7EAF0"
    >
      <Box p="20px" borderBottom="1px solid #E7EAF0">
        <Text
          fontWeight={500}
          fontSize="16px"
          color="secondary.main"
          textAlign="center"
        >
          Информация о пациенте
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="center" h="535px">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          rowGap="16px"
          maxWidth="260px"
        >
          <Flex align="center" justifyContent="center">
            <img src="/assets/userPlaceholder-lg.svg" alt="user placeholder" />
          </Flex>
          <Text fontWeight="500" fontSize="16px" color="secondary.main">
            Выберите пациента
          </Text>
          <Text fontWeight="400" fontSize="14px" color="grey">
            Используйте поиск по ПИНФЛ/серии паспорта, чтобы найти пациента{" "}
          </Text>
          <CButton
            variant="solid"
            text="Поиск"
            buttonType="button"
            padding="auto 20px"
            onClick={handleFocus}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
