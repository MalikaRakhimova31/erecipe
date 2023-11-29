import { Button } from "@chakra-ui/react";
import { type ButtonProps } from "@/types";

export default function CButton(props: ButtonProps): JSX.Element {
  const {
    onClick,
    text,
    icon,
    rightIcon,
    variant,
    buttonType,
    padding,
    isFull = false,
    height = "53",
    disabled,
    isLoading,
  } = props;

  return (
    <Button
      isDisabled={disabled}
      type={buttonType}
      onClick={onClick}
      leftIcon={icon}
      rightIcon={rightIcon}
      variant={variant}
      w={`${isFull ? "full" : ""}`}
      padding={padding}
      height={`${height}px`}
      isLoading={isLoading}
    >
      {text}
    </Button>
  );
}
