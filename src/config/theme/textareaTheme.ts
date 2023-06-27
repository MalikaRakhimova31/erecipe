import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderColor: "#E7EAF0",
  backgroundColor: "#F8FAFB",
  borderRadius: "7px",
  caretColor: "#0ABAB5",
  padding: "16px",
  color: "#393D4E",
  outline: "none !important",
  _hover: {
    borderColor: "#0ABAB5",
  },
  _focusVisible: {
    borderWidth: "1px",
    borderColor: "#0ABAB5 !important",
    boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15)",
  },
});

const textareaTheme = defineStyleConfig({
  variants: { outline },
});

export default textareaTheme;
