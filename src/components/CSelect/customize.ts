/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/require-default-props */
// @ts-ignore
// @ts-nocheck
import { type CSSProperties } from "react";

interface ColourStyles {
  control: (
    base: CSSProperties,
    state: {
      isFocused: boolean;
      isDisabled: boolean;
    },
  ) => CSSProperties;
  option: (
    base: CSSProperties,
    state: {
      data: any;
      isDisabled: boolean;
      isFocused: boolean;
      isSelected: boolean;
    },
  ) => CSSProperties;
  input: (base: CSSProperties) => CSSProperties;
  placeholder: (base: CSSProperties) => CSSProperties;
  singleValue: (base: CSSProperties, state: { data: any }) => CSSProperties;
}

const colourStyles: ColourStyles = {
  control: (styles, { isDisabled }) => ({
    ...styles,
    backgroundColor: isDisabled ? "#F6F8F9" : "#F6F8F9",
    borderWidth: "1px",
    borderColor: "red",
    boxShadow: "none",
    height: "48px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all .25s ease-in-out",
    ":hover": {
      borderColor: "var(--primary-color)",
    },
    "@media (max-width: 768px)": {
      height: "42px",
    },
  }),
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    cursor: isDisabled ? "not-allowed" : "default",
    backgroundColor: isFocused ? "rgba(16, 130, 146, 0.1)" : "#fff",
    color: isDisabled ? "#6E7C87" : "#252C32",
    fontSize: "14px",
    lineHeight: "17px",
    // ":active": {
    //   ...styles[":active"],
    // },
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#9AA6AC",
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: "14px",
    lineHeight: "17px",
  }),
};

export default colourStyles;
