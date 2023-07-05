/* eslint-disable react/require-default-props */
import { Flex } from "@chakra-ui/react";

interface Props {
  icon: React.ReactElement;
  height?: number;
  width?: number;
}

export default function CIconButton({
  icon,
  height = 36,
  width = 36,
}: Props): React.ReactElement {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width={`${width}px`}
      height={`${height}px`}
      borderRadius="50%"
      border="1px solid #E7EAF0"
    >
      {icon}
    </Flex>
  );
}
