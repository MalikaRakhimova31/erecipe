import { type IconTitleBoxProps } from "@/types";
import { Flex, Text } from "@chakra-ui/react";
import CIconButton from "../CIconButton/CIconButton";

export default function TitleWithIcon({
  icon,
  title,
  text,
}: IconTitleBoxProps): React.ReactElement {
  return (
    <Flex
      borderRadius="8px"
      border="1px solid #E7EAF0"
      px={5}
      py={4}
      bg="white"
      columnGap={4}
      width="100%"
    >
      <Flex justifyContent="center" alignItems="center">
        <CIconButton icon={icon} width={48} height={48} />
      </Flex>
      <Flex direction="column" rowGap="8px" justifyContent="space-between">
        <Text color="grey" fontSize="14px" fontWeight="400">
          {title}
        </Text>
        <Text color="secondary.main" fontSize="18px" fontWeight="500">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}
