import { type EmptyBoxProps } from "@/types";
import { Flex, Text } from "@chakra-ui/react";

export default function EmptyBox({
  icon,
  title,
  description,
}: EmptyBoxProps): React.ReactElement {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      rowGap="16px"
      w="full"
      h="full"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="#F8FAFB"
        w="6.25rem"
        h="6.25rem"
        borderRadius="50%"
      >
        <img src={icon} alt="empty box" />
      </Flex>
      <Text color="secondary.main" fontSize="16px" fontWeight="500">
        {title}
      </Text>
      <Text color="grey" fontSize="14px" textAlign="center" maxW="24rem">
        {description}
      </Text>
    </Flex>
  );
}
