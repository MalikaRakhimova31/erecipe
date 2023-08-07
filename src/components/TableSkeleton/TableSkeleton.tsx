import { Flex, Skeleton } from "@chakra-ui/react";

export default function TableSkeleton(): React.ReactElement {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Flex width="100%" direction="column" rowGap={4}>
      {arr.map((el) => (
        <Skeleton key={`skeleton-table-${el}`} height={10} width="100%" />
      ))}
    </Flex>
  );
}
