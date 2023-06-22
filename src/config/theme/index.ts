import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: `brand[800]`,
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
      a: {
        color: colors.primary[`500`],
        _hover: {
          textDecoration: `underline`,
        },
      },
      button: {
        fontWeight: `normal !important`,
      },
    }),
  },
});

export default theme;
