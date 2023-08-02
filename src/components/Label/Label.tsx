/* eslint-disable jsx-a11y/label-has-associated-control */
import { Flex, Text } from "@chakra-ui/react";
import { type LabelProps } from "@/types";

export default function Label(props: LabelProps): React.ReactElement {
  const { title, children, optional, id, errors } = props;

  return (
    <Flex
      direction="column"
      rowGap="8px"
      // alignItems="flex-start"
      // justifyContent="flex-start"
    >
      <label id={id}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="14px" color="grey">
            {title}
            {optional ?? (
              <Text as="span" color="errorColor">
                *
              </Text>
            )}
          </Text>
          {Boolean(errors) && (
            <Text color="errorColor" fontSize="14px" fontWeight={400}>
              Обязательное поле
            </Text>
          )}
        </Flex>
      </label>
      {children}
    </Flex>
  );
}
