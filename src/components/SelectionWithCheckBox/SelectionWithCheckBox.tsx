import { Controller } from "react-hook-form";
import Select, {
  components,
  type OptionProps,
  type DropdownIndicatorProps,
} from "react-select";
import { useState } from "react";
import { type SelectionMenuProps } from "@/types";
import { Checkbox, Flex } from "@chakra-ui/react";
import Label from "../Label/Label";
import selectStyles from "../CSelect/selectStyles";
import { ChevronDownForSelectionIcon } from "../Icons";

interface InputOptionProps extends OptionProps<any> {
  getStyles: any;
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
  children: React.ReactNode;
  innerProps: any;
}

const customClearIndicator = (props: any): React.ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.ClearIndicator {...props}>
    <ClearIcon />
  </components.ClearIndicator>
);

const customDropdownIndicator = (
  props: DropdownIndicatorProps,
): React.ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.DropdownIndicator {...props}>
    <ChevronDownForSelectionIcon />
  </components.DropdownIndicator>
);

function InputOption({
  getStyles,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}: InputOptionProps): React.ReactElement {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = (): void => {
    setIsActive(true);
  };
  const onMouseUp = (): void => {
    setIsActive(false);
  };
  const onMouseLeave = (): void => {
    setIsActive(false);
  };

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#EBFAF9";
  if (isActive) bg = "#EBFAF9";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      {/* <input type="checkbox" checked={isSelected} /> */}
      <Flex columnGap="8px" alignItems="center">
        <Checkbox isChecked={isSelected} colorScheme="primary.main" />
        {children}
      </Flex>
    </components.Option>
  );
}

interface Props {
  control: any;
  name: string;
  title: string;
  options: SelectionMenuProps[];
  placeholder: string;
  // eslint-disable-next-line react/require-default-props
  errors?: boolean;
}

export default function SelectionWithCheckBox({
  control,
  name,
  title,
  options,
  placeholder,
  errors = false,
}: Props): React.ReactElement {
  const selectionStyles = selectStyles(errors);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Label title={title}>
          <Select
            styles={selectionStyles}
            defaultValue={[]}
            isMulti
            className="react-select"
            classNamePrefix="react-select"
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={onChange}
            options={options}
            value={value}
            placeholder={placeholder}
            components={{
              Option: InputOption,
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
