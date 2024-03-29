import { Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Restricted from "@/providers/restricted";
import sidebarMenu from "./menu-list";
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem";
import ButtonByRole from "./ButtonByRole";

export default function SideBar(): React.ReactElement {
  return (
    <div className="min-h-[100vh] bg-white border-light-grey-stroke border w-[15rem]">
      <Flex direction="column" rowGap={5} flex={1}>
        <Restricted to={["doctor", "healthMinistry", "mainDoctor"]}>
          <Link to="/">
            <Flex px="6" py="3" alignItems="center" columnGap="2">
              <img src="/assets/logo.svg" alt="logo" />
              <Text
                color="secondary.main"
                fontWeight="700"
                textTransform="uppercase"
                fontSize="xl"
                whiteSpace="nowrap"
              >
                E-Recipe
              </Text>
            </Flex>
          </Link>
        </Restricted>
        <Restricted to={["pharmacy"]}>
          <Link to="/erecipes">
            <Flex px="6" py="3" alignItems="center" columnGap="2">
              <img src="/assets/logo.svg" alt="logo" />
              <Text
                color="secondary.main"
                fontWeight="700"
                textTransform="uppercase"
                fontSize="xl"
                whiteSpace="nowrap"
              >
                E-Recipe
              </Text>
            </Flex>
          </Link>
        </Restricted>
        <HStack px="12px" w="100%" mb="6">
          <ButtonByRole />
        </HStack>
        <Flex direction="column" rowGap="24px">
          <HStack pl="24px">
            <Text
              color="grey"
              fontWeight="400"
              textTransform="uppercase"
              fontSize="12px"
              lineHeight="1.8px"
            >
              Mеню
            </Text>
          </HStack>
          <List spacing="24px">
            {sidebarMenu?.map((menu) => (
              <Restricted to={menu.roles ?? []} key={menu.title}>
                <ListItem>
                  <SidebarMenuItem
                    title={menu.title}
                    icon={menu.icon}
                    path={menu.path}
                    activeIcon={menu.activeIcon}
                  />
                </ListItem>
              </Restricted>
            ))}
          </List>
        </Flex>
      </Flex>
    </div>
  );
}
