import { Flex, Text } from "@chakra-ui/react";

interface Props {
  src: string;
  text: string;
}

export default function OrganizationButton({
  src,
  text,
}: Props): React.ReactElement {
  return (
    <Flex
      bg="white"
      w="100%"
      borderRadius="7px"
      border="1px solid #E7EAF0"
      p={4}
      alignItems="center"
      // justifyContent="center"
      columnGap="12px"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        width="36px"
        height="36px"
      >
        <img
          src={src}
          alt="org"
          className="object-cover"
          width="full"
          height="full"
        />
      </Flex>
      <Text color="secondary.main" fontSize="14px" fontWeight={500}>
        {text}
      </Text>
    </Flex>
  );
}
