import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import accordionTheme from "./accordionTheme";
import textareaTheme from "./textareaTheme";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: {
          borderRadius: "8px",
          width: "max-content",
          height: "53px",
          padding: "0 24px",
          background: "primary.main",
          color: "white",
          fontWeight: "500 !important",
          paddingLeft: "24px !important",
          paddingRight: "24px !important",
          _hover: {
            boxShadow: "0px 4px 20px 0px rgba(10, 186, 181, 0.30)",
            background: "primary.main",
            color: "white",
          },
        },
        unstyled: {
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          width: "max-content",
          height: "53px",
          background: "white",
          borderWidth: "1px",
          borderStyle: "dashed",
          borderColor: "primary.main",
          color: "primary.main",
          fontSize: "16px",
          fontWeight: "500 !important",
          padding: "0 24px",
        },
        outline: {
          borderRadius: "8px",
          width: "max-content",
          height: "53px",
          background: "white",
          color: "secondary.main",
          fontWeight: "500 !important",
          borderWidth: "1px",
          borderColor: "border",
          fontSize: "16px",
          _hover: {
            borderColor: "errorColor",
            boxShadow: "0px 4px 20px 0px rgba(255, 78, 78, 0.30)",
            background: "errorColor",
            color: "white",
          },
        },
      },
    },
    Accordion: accordionTheme,
    Textarea: textareaTheme,
  },
  colors,
  fonts: {
    body: `"Source Sans Pro", "Inter", "Mulish", "Inter", "Lobster" ,"Lexend Deca", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    heading: `"Lexend Deca", "Mulish", "Inter", "Lexend Deca", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        // mode ("color for light mode (string)", "color for dark mode (string)")
        backgroundColor: `#F1F5F9`,
        color: `gray.600`,
        // bg: mode(`gray.50`, `gray.50`)(props),
        // fontFamily: `"Lexend Deca", "Source Sans Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      },
      button: {
        fontWeight: `normal !important`,
      },
    }),
  },
});

export default theme;
