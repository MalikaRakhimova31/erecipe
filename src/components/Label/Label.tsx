/* eslint-disable jsx-a11y/label-has-associated-control */
import { Flex, Text } from "@chakra-ui/react";
import { type LabelProps } from "@/types";

export default function Label(props: LabelProps): React.ReactElement {
  const { title, children, optional, id } = props;
  return (
    <Flex direction="column" rowGap="8px">
      <label id={id}>
        <Text fontSize="14px" color="grey">
          {title}
          {optional ?? (
            <Text as="span" color="errorColor">
              *
            </Text>
          )}
        </Text>
      </label>
      {children}
    </Flex>
  );
}
