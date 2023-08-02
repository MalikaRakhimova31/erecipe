import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
}

export default function TitleText({ title, text }: Props): React.ReactElement {
  return (
    <Flex direction="column" rowGap="8px">
      <Text color="#8E93AA" fontSize="14px" fontWeight={400} lineHeight="150%">
        {title}
      </Text>
      <Text color="#393D4E" fontSize="14px" fontWeight={400} lineHeight="150%">
        {text}
      </Text>
    </Flex>
  );
}
