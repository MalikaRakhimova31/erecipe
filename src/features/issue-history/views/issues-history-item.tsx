import SeparatedTable from "@/components/SeparatedTable/SeparatedTable";
import { Flex } from "@chakra-ui/react";
import useOrderItemState from "./order-item-state";

export default function IssuesHistoryItem(): React.ReactElement {
  const { orderItem, orderItemLoading, tableBody, tableHeader } =
    useOrderItemState();
  console.log("orderItem", orderItem);
  return (
    <Flex columnGap="16px" w="full" minH="82vh" p="4">
      <SeparatedTable
        headData={tableHeader}
        bodyData={tableBody}
        loading={orderItemLoading}
      />
    </Flex>
  );
}
