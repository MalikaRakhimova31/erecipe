import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
}

function LockIcon(): React.ReactElement {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 24C3 19.7574 3 17.636 4.31802 16.318C5.63604 15 7.75736 15 12 15H24C28.2426 15 30.364 15 31.682 16.318C33 17.636 33 19.7574 33 24C33 28.2426 33 30.364 31.682 31.682C30.364 33 28.2426 33 24 33H12C7.75736 33 5.63604 33 4.31802 31.682C3 30.364 3 28.2426 3 24Z"
        stroke="#8E93AA"
        strokeWidth="1.5"
      />
      <circle cx="18" cy="24" r="3" stroke="#8E93AA" strokeWidth="1.5" />
      <path
        d="M9 15V12C9 7.02944 13.0294 3 18 3C22.9706 3 27 7.02944 27 12V15"
        stroke="#8E93AA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function NoPermission({
  title,
  text,
}: Props): React.ReactElement {
  return (
    <Flex
      borderRadius="8px"
      border="1px solid #E7EAF0"
      bg="white"
      direction="column"
      rowGap="16px"
      alignItems="center"
      justifyContent="center"
      height="100%"
      margin="16px"
    >
      <Flex
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="#F8FAFB"
        alignItems="center"
        justifyContent="center"
      >
        <LockIcon />
      </Flex>
      <Text color="secondary.main" fontSize="16px" fontWeight={500}>
        {title}
      </Text>
      <Text
        color="grey"
        fontSize="14px"
        fontWeight={400}
        maxW="385px"
        textAlign="center"
      >
        {text}
      </Text>
    </Flex>
  );
}
