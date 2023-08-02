import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontFamily: "inherit", // change the font family
    fontSize: "14px",
    fontWeight: "400",
    color: "secondary.main",
    background: "red !important",
    borderRadius: "8px",
    borderColor: "#E7EAF0 !important",
    outline: "none",
    border: "1px solid",
    caretColor: "#0ABAB5",
    _placeholder: {
      color: "#8E93AA",
    },
    _hover: {
      borderColor: "#0ABAB5 !important",
    },
    _focusVisible: {
      borderColor: "#0ABAB5",
    },
  },
});

const inputTheme = defineMultiStyleConfig({ baseStyle });
export default inputTheme;
