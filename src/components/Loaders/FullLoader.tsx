import { Flex, Spinner } from "@chakra-ui/react";

export default function FullLoader(): React.ReactElement {
  return (
    <Flex
      minH="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      <Spinner size="xl" color="primary.main" />
    </Flex>
  );
}
