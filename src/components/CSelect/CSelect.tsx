import { Controller } from "react-hook-form";
import { type SelectProps } from "@/types";
import SelectMenu, {
  type DropdownIndicatorProps,
  components,
} from "react-select";
import Label from "../Label/Label";
import selectStyles from "./selectStyles";

function ChevronDown(): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Linear / Arrows / Arrow Down">
        <g id="Group">
          <g id="Group_2">
            <path
              id="Vector"
              d="M10.5203 13.454L16.4537 7.52053C16.5911 7.38329 16.6667 7.2001 16.6667 7.00476C16.6667 6.80942 16.5911 6.62623 16.4537 6.48899L16.0169 6.05203C15.7322 5.7677 15.2696 5.7677 14.9854 6.05203L10.0028 11.0345L5.01481 6.0465C4.87747 5.90927 4.69438 5.8335 4.49915 5.8335C4.3037 5.8335 4.12062 5.90927 3.98316 6.0465L3.54642 6.48346C3.40908 6.62081 3.33341 6.80389 3.33341 6.99923C3.33341 7.19457 3.40908 7.37777 3.54642 7.515L9.48523 13.454C9.62301 13.5916 9.80697 13.6671 10.0025 13.6667C10.1988 13.6671 10.3827 13.5916 10.5203 13.454Z"
              fill="#8E93AA"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

const customDropdownIndicator = (
  props: DropdownIndicatorProps,
): React.ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.DropdownIndicator {...props}>
    <ChevronDown />
  </components.DropdownIndicator>
);

const customClearIndicator = (props: any): React.ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.ClearIndicator {...props}>
    <ClearIcon />
  </components.ClearIndicator>
);

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

export default function CSelect({
  control,
  name,
  title,
  options,
  isMulti = false,
  isClearable = false,
  isDisabled = false,
  isSearchable = false,
  placeholder,
  menuPlacement = "auto",
}: SelectProps): React.ReactElement {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Label title={title}>
          <SelectMenu
            styles={selectStyles}
            value={value}
            onChange={onChange}
            options={options}
            classNamePrefix="select"
            className="basic-multi-select"
            // openMenuOnFocus
            isClearable={isClearable}
            isMulti={isMulti}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            placeholder={placeholder}
            formatOptionLabel={formatOptionLabel}
            menuPlacement={menuPlacement}
            // getOptionValue={(option) => option.value}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: customDropdownIndicator,
              ClearIndicator: customClearIndicator,
            }}
          />
        </Label>
      )}
    />
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
