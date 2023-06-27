import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  root: {
    background: "transparent",
    border: "none",
    borderColor: "transparent",
    // _hover: {
    //   background: "transparent",
    // },
  },
  container: {
    bg: "white", // change the backgroundColor of the container
    border: "1px solid #E7EAF0",
    borderColor: "transparent",
    borderRadius: "8px",
  },
  button: {
    border: "none",
    background: "transparent",
    padding: "20px",
    borderColor: "transparent",
    borderRadius: "8px 8px 0 0",
    _hover: {
      background: "transparent",
    },
    _expanded: {
      borderBottom: "1px solid #E7EAF0 !important",
    },
  },
  panel: {
    padding: "20px",
    height: "max-content",
  },
  icon: {
    color: "#393D4E",
  },
});

const accordionTheme = defineMultiStyleConfig({ baseStyle });
export default accordionTheme;
