import { PhoneIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

// import "react-pro-sidebar/dist/css/styles.css";

export default function SideBar(): React.ReactElement {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <motion.div
        animate={{ width: collapsed ? "20%" : "5%" }}
        className="min-h-[100vh] bg-rose-500"
      >
        <Menu>
          <MenuButton>Button</MenuButton>
          <MenuList>
            <MenuItem icon={<PhoneIcon />}>Dashboard</MenuItem>
            {/* <Link to="/">
            </Link> */}
          </MenuList>
        </Menu>
      </motion.div>
      <button onClick={handleCollapse} type="button">
        toggle
      </button>
    </>
  );
}
