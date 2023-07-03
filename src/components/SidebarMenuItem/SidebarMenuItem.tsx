import { type SidebarMenuProps } from "@/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function SidebarMenuItem(props: SidebarMenuProps): JSX.Element {
  const { title, icon, path, activeIcon } = props;

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <Flex columnGap="21px" cursor="pointer">
          <Box
            width="3px"
            height="auto"
            borderRadius="100px"
            bgColor={isActive ? "primary.main" : ""}
          />
          <Flex alignItems="center" columnGap="1rem">
            <img src={isActive ? activeIcon : icon} alt="sidebar icon" />
            <Text
              color={isActive ? "secondary.main" : "grey"}
              fontSize={16}
              fontWeight="500"
            >
              {title}
            </Text>
          </Flex>
        </Flex>
      )}
    </NavLink>
  );
}
