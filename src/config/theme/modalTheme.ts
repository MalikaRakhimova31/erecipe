import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: "blackAlpha.600",
  },
  dialog: {
    borderRadius: "12px",
    bg: `white`,
    padding: "16px",
    // width: "700px !important",
    maxWidth: "fit-content !important",
  },
  header: {
    textAlign: "center",
    color: "#393D4E",
    fontSize: "24px",
    fontWeight: 600,
  },
  body: {
    color: "#393D4E",
    fontSize: "16px",
    // textAlign: "center",
    paddingTop: "0",
    paddingBottom: "24px",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "24px",
  },
});

const modalTheme = defineMultiStyleConfig({
  baseStyle,
});

export default modalTheme;
