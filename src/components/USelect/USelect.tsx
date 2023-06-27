import { type SelectionMenuProps, type USelectProps } from "@/types";
import SelectMenu, {
  type StylesConfig,
  type DropdownIndicatorProps,
  components,
  type ClearIndicatorProps,
} from "react-select";

function SearchIcon(): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Linear / Search / Magnifer" clipPath="url(#clip0_1247_1048)">
        <circle
          id="Vector"
          cx="9.58341"
          cy="9.58366"
          r="7.91667"
          stroke="#393D4E"
          strokeWidth="1.5"
        />
        <path
          id="Vector_2"
          d="M15.4167 15.417L18.3334 18.3337"
          stroke="#393D4E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1247_1048">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ClearIcon(): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1247_2995)">
        <path
          d="M18.3333 10.0003C18.3333 14.6027 14.6023 18.3337 9.99996 18.3337C5.39759 18.3337 1.66663 14.6027 1.66663 10.0003C1.66663 5.39795 5.39759 1.66699 9.99996 1.66699C14.6023 1.66699 18.3333 5.39795 18.3333 10.0003Z"
          fill="#E6EAF0"
          stroke="#8E93AA"
          strokeWidth="1.5"
        />
        <path
          d="M12.0833 7.91701L7.91663 12.0837M7.91661 7.91699L12.0833 12.0836"
          stroke="#8E93AA"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1247_2995">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const customDropdownIndicator = (
  props: DropdownIndicatorProps<SelectionMenuProps[]>,
): React.ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.DropdownIndicator {...props}>
    <SearchIcon />
  </components.DropdownIndicator>
);

const customClearIndicator = (
  props: ClearIndicatorProps<SelectionMenuProps[]>,
): React.ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.ClearIndicator {...props}>
    <ClearIcon />
  </components.ClearIndicator>
);

const selectStyles: StylesConfig<USelectProps> = {
  control: (provided, { isFocused }) => ({
    ...provided,
    width: "100%",
    outline: "none !important",
    background: "white",
    borderRadius: "7px",
    boxShadow: isFocused ? "0px 0px 5px 0px rgba(10, 186, 181, 0.15);" : "none",
    borderColor: isFocused ? "#0ABAB5" : "#E7EAF0",
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
    color: "#8E93AA",
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

const formatOptionLabel = (
  { label }: any,
  { inputValue }: any,
): React.ReactElement => {
  if (Boolean(inputValue) && Boolean(label)) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const regex = new RegExp(`(${inputValue})`, "gi");
    return (
      <span>
        {label.split(regex).map((part: any, index: number) =>
          regex.test(part) ? (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}-react-select-option}`}
              style={{
                color: "#0ABAB5",
                textDecoration: "underline",
                textUnderlineOffset: "0.2em",
              }}
            >
              {part}
            </span>
          ) : (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index}>{part}</span>
          ),
        )}
      </span>
    );
  }
  return label;
};

export default function USelect({
  options,
  isMulti = false,
  isClearable = false,
  isDisabled = false,
  isSearchable = false,
  placeholder,
  searchRef,
  ...restProps
}: USelectProps): React.ReactElement {
  return (
    <SelectMenu
      styles={selectStyles}
      options={options}
      classNamePrefix="select"
      className="basic-multi-select"
      openMenuOnFocus
      isClearable={isClearable}
      isMulti={isMulti}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      placeholder={placeholder}
      formatOptionLabel={formatOptionLabel}
      ref={searchRef}
      components={{
        // IndicatorSeparator: () => null,
        DropdownIndicator: customDropdownIndicator,
        ClearIndicator: customClearIndicator,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    />
  );
}
