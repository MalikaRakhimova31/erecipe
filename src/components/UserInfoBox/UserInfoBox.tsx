import { Flex, Text } from "@chakra-ui/react";

interface Props {
  src: string;
  name: string;
}

export default function UserInfoBox({ src, name }: Props): React.ReactElement {
  return (
    <Flex alignItems="center" columnGap="12px">
      <Flex
        w={9}
        h={9}
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
      >
        <img src={src} className="w-full h-full object-cover" alt="user" />
      </Flex>
      <Text color="secondary.main" fontSize="14px" fontWeight={500}>
        {name}
      </Text>
    </Flex>
  );
}
