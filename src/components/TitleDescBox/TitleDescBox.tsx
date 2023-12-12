import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: any;
}

export default function TitleDescBox({
  title,
  description,
}: Props): React.ReactElement {
  return (
    <Flex
      borderRadius="8px"
      border="1px solid #E7EAF0"
      p="20px"
      direction="column"
      rowGap="8px"
      width="100%"
      bg="white"
      h="93px"
    >
      <Text
        textTransform="uppercase"
        fontSize="12px"
        fontWeight="400"
        color="#8E93AA"
      >
        {title}
      </Text>
      <Text fontSize="14px" fontWeight="500" color="secondary.main">
        {description}
      </Text>
    </Flex>
  );
}
