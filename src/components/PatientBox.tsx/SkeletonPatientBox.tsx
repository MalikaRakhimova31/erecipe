import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function SkeletonPatientBox(): React.ReactElement {
  return (
    <Box p="20px 40px">
      <Flex alignItems="center" justifyContent="center" h={400}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          rowGap="16px"
          w="full"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            width="90px"
            height="90px"
            borderRadius="50%"
          >
            <SkeletonCircle size="20" />
          </Flex>
          <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
          <Flex
            borderTop="1px solid #E7EAF0"
            mt="20px"
            direction="column"
            w="100%"
          >
            <SkeletonText mt="4" noOfLines={4} spacing="6" skeletonHeight="2" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
