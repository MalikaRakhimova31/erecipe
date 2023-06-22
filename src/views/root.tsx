import "@/lib/to-capital-case";
import SideBar from "@/components/SideBar/SideBar";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Root(): React.ReactElement {
  // const mention = "spa starter".toCapitalCase();

  return (
    <>
      <Flex>
        <SideBar />
        <Outlet />
      </Flex>
      <div />
    </>
  );
}
