import { Flex, Skeleton } from "@chakra-ui/react";

export default function TableSkeleton(): React.ReactElement {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Flex
      width="100%"
      direction="column"
      rowGap={4}
      bg="white"
      borderRadius="8px"
      px="20px"
      py={6}
      border="1px solid #E7EAF0"
    >
      {arr.map((el) => (
        <Skeleton
          key={`skeleton-table-${el}`}
          height={10}
          width="100%"
          borderRadius="8px"
        />
      ))}
    </Flex>
  );
}
