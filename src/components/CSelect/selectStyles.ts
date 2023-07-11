import { type StylesConfig } from "react-select";
import { type SelectProps } from "@/types";

const selectStyles: StylesConfig<SelectProps> = {
  control: (provided, { isFocused, isDisabled }) => ({
    ...provided,
    width: "100% !important",
    outline: isDisabled ? "#F8FAFB" : "white",
    opacity: isDisabled ? "0.4" : "1",
    background: isDisabled ? "white" : "#F8FAFB",
    borderRadius: "7px",
    boxShadow: isFocused ? "0px 0px 5px 0px rgba(10, 186, 181, 0.15);" : "none",
    // eslint-disable-next-line no-nested-ternary
    borderColor: isFocused
      ? "#0ABAB5"
      : isDisabled
      ? "rgba(142, 147, 170, 0.4)"
      : "#E7EAF0",
    height: "48px",
    padding: "0 8px",
    transition: "all 0.2s ease",
    ":hover": {
      borderColor: "#0ABAB5",
      transition: "all 0.2s ease",
    },
  }),
  input: (provided) => ({
    ...provided,
    outline: "none",
    fontSize: "16px",
    color: "#393D4E",
    lineHeight: "150%",
    fontFamily: "Golos",
    caretColor: "#0ABAB5",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "16px",
    lineHeight: "17px",
    color: "#393D4E",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      state.isSelected || state.isFocused ? "transparent" : "transparent",
    color: state.isSelected ? "#0ABAB5" : "#393D4E",
    fontSize: "16px",
    paddingRight: "0",
    paddingLeft: "0",
    ":first-child": {
      paddingTop: "0",
    },
    ":last-child": {
      paddingBottom: "0",
    },
    ":hover": {
      background: "transparent",
    },
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: "4px",
    borderRadius: "7px",
    boxShadow: "0px 8px 15px 0px rgba(0, 0, 0, 0.08)",
    padding: "16px",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "100px",
    overflow: "auto",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "red",
  }),
};

export default selectStyles;
