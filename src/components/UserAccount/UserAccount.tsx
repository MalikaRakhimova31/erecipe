import { Flex, Text } from "@chakra-ui/react";

export default function UserAccount(): React.ReactElement {
  return (
    <Flex columnGap="10px" justifyContent="space-between" alignItems="start">
      <Flex alignItems="center" justifyContent="center">
        <img src="/assets/userPlaceholder.svg" alt="user placeholder" />
      </Flex>
      <Flex direction="column">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          columnGap="8px"
        >
          <Text color="secondary.main" fontWeight={500} fontSize="14px">
            Абдурахмонов М.С.
          </Text>
          <img src="/assets/chevronDown.svg" alt="chevron" />
        </Flex>
        <Text color="primary.main" fontSize="12px">
          Врач
        </Text>
      </Flex>
    </Flex>
  );
}
