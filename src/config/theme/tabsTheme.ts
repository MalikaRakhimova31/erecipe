import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: "semibold", // change the font weight
    padding: "12px 20px 10px 20px",
    height: "43px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "8px",
    _selected: {
      // bg: mode('#fff', 'gray.800')(props),
      bg: "white",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      color: "primary.main",
      borderColor: "border",
      borderBottom: "none",
      mb: "-1px",
      _after: {
        content: "url(/assets/tick.svg)",
        height: "24px",
        width: "24px",
      },
    },
  },
  tabpanels: {
    background: "white",
    border: "none",
    borderRadius: "8px",
  },
  tabpanel: {
    fontFamily: "inherit", // change the font family
    bg: "white",
    borderColor: "#E6EAF0",
    borderRadius: "8px",
    border: "1px solid #E6EAF0",
    minH: "82vh",
    padding: "0",
  },
});

// export the component theme
const tabsTheme = defineMultiStyleConfig({ baseStyle });
export default tabsTheme;
