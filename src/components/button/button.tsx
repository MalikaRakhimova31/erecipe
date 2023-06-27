import { Button } from "@chakra-ui/react";
import { type ButtonProps } from "@/types";

export default function CButton(props: ButtonProps): JSX.Element {
  const {
    onClick,
    text,
    icon,
    variant,
    buttonType,
    padding,
    isFull = false,
  } = props;

  return (
    <Button
      type={buttonType}
      onClick={onClick}
      leftIcon={icon}
      variant={variant}
      w={`${isFull ? "full" : ""}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      padding={padding}
    >
      {text}
    </Button>
  );
}
