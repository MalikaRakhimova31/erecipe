import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import accordionTheme from "./accordionTheme";
import textareaTheme from "./textareaTheme";
import modalTheme from "./modalTheme";
import inputTheme from "./inputTheme";
import tabsTheme from "./tabsTheme";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: {
          borderRadius: "8px",
          width: "max-content",
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
        ghost: {
          borderRadius: "8px",
          width: "max-content",
          height: "53px",
          background: "#EBFAF9",
          color: "primary.main",
          fontWeight: "500 !important",
          border: "none",
          fontSize: "16px",
          _hover: {
            // borderColor: "errorColor",
            boxShadow: "0px 4px 20px 0px rgba(255, 78, 78, 0.30)",
            background: "#0ABAB5",
            color: "white",
          },
        },
        danger: {
          borderRadius: "8px",
          width: "max-content",
          height: "53px",
          background: "#FF4E4E",
          color: "white",
          fontWeight: "500 !important",
          border: "none",
          fontSize: "16px",
          _hover: {
            // borderColor: "errorColor",
            boxShadow: "0px 4px 20px 0px rgba(255, 78, 78, 0.30)",
          },
        },
        greenText: {
          borderRadius: "8px",
          width: "max-content",
          height: "48px",
          background: "white",
          color: "#23A566",
          fontWeight: "500 !important",
          borderWidth: "1px",
          borderColor: "border",
          fontSize: "16px",
          _hover: {
            boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15);",
            borderColor: "#23A566",
          },
        },
        statusButton: {
          borderRadius: "8px",
          width: "max-content",
          height: "41px",
          background: "#EBFAF9",
          color: "#0ABAB5",
          fontWeight: "500 !important",
          borderWidth: "none",
          borderColor: "none",
          fontSize: "14px",
          _hover: {
            boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15);",
            borderColor: "#23A566",
          },
        },
        blackButton: {
          borderRadius: "8px",
          width: "100%",
          height: "41px",
          background: "white",
          color: "#393D4E",
          fontWeight: "500 !important",
          border: "1px solid",
          borderColor: "#E7EAF0",
          fontSize: "14px",

          _hover: {
            boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15);",
            borderColor: "transparent",
            color: "white",
            background: "#0ABAB5",
          },
        },
        gray: {
          borderRadius: "8px",
          width: "100%",
          height: "41px",
          background: "white",
          color: "#393D4E",
          fontWeight: "500 !important",
          border: "1px solid",
          borderColor: "#E7EAF0",
          fontSize: "16px",

          _hover: {
            boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15);",
          },
        },
      },
    },
    Tabs: tabsTheme,
    Accordion: accordionTheme,
    Textarea: textareaTheme,
    Modal: modalTheme,
    Table: {
      variants: {
        simple: {
          th: {
            padding: "16px 0",
            borderColor: "#E7EAF0",
            fontSize: "12px",
            fontWeight: "400",
            color: "#8E93AA",
            maxWidth: "330px !important",
          },
          td: {
            borderColor: "#E7EAF0",
            padding: "16px 0",
            color: "secondary.main",
            fontSize: "14px",
            fontWeight: "400",
            whiteSpace: "wrap",
            maxWidth: "315px",
            "&:last-child": {
              borderColor: "none",
            },
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          bg: "transparent",
          _checked: {
            bg: "primary.main",
            border: "none",
          },
        },
      },
    },
    Input: inputTheme,
    InputGroup: {
      baseStyle: {
        background: "red",
        _focusVisible: {
          border: "1px solid",
          borderColor: "red",
        },
      },
    },
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
